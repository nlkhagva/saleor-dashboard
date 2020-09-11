import DeleteFilterTabDialog from "@saleor/components/DeleteFilterTabDialog";
import SaveFilterTabDialog, {
  SaveFilterTabDialogFormData
} from "@saleor/components/SaveFilterTabDialog";
import { WindowTitle } from "@saleor/components/WindowTitle";
import useListSettings from "@saleor/hooks/useListSettings";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import usePaginator, {
  createPaginationState
} from "@saleor/hooks/usePaginator";
import { commonMessages, sectionNames } from "@saleor/intl";
import { getMutationStatus, maybe } from "@saleor/misc";
import PackageDeleteDialog from "@saleor/package/components/PackageDeleteDialog";
import PackageListPage from "@saleor/package/components/PackageListPage";
import { usePackageDelete } from "@saleor/package/mutations";
import { usePackageList } from "@saleor/package/queries";
import {
  packageAddUrl,
  packageListUrl,
  PackageListUrlDialog,
  PackageListUrlQueryParams,
  packageUrl
} from "@saleor/package/urls";
import { ListViews } from "@saleor/types";
import createDialogActionHandlers from "@saleor/utils/handlers/dialogActionHandlers";
import createFilterHandlers from "@saleor/utils/handlers/filterHandlers";
import createSortHandler from "@saleor/utils/handlers/sortHandler";
import { getSortParams } from "@saleor/utils/sort";
import React from "react";
import { useIntl } from "react-intl";

import {
  areFiltersApplied,
  deleteFilterTab,
  getActiveFilters,
  getFilterTabs,
  getFilterVariables,
  saveFilterTab
} from "./filters";
import { getSortQueryVariables } from "./sort";

export interface PackageListProps {
  params: PackageListUrlQueryParams;
}

const PackageList: React.FC<PackageListProps> = ({ params }) => {
  const navigate = useNavigator();
  const notify = useNotifier();
  const paginate = usePaginator();
  const intl = useIntl();
  const { updateListSettings, settings } = useListSettings(
    ListViews.SALES_LIST
  );

  const paginationState = createPaginationState(settings.rowNumber, params);
  const queryVariables = React.useMemo(
    () => ({
      ...paginationState,
      filter: getFilterVariables(params),
      sort: getSortQueryVariables(params)
    }),
    [params]
  );

  const { data, loading, refetch } = usePackageList({
    displayLoader: true,
    variables: queryVariables
  });

  const [deletePackage, deletePackageOpts] = usePackageDelete({
    onCompleted: data => {
      if (data.packageDelete.errors.length === 0) {
        notify({
          status: "success",
          text: intl.formatMessage(commonMessages.savedChanges)
        });
        refetch();
        closeModal();
      }
    }
  });

  const tabs = getFilterTabs();

  const currentTab =
    params.activeTab === undefined
      ? areFiltersApplied(params)
        ? tabs.length + 1
        : 0
      : parseInt(params.activeTab, 0);

  const [, resetFilters, handleSearchChange] = createFilterHandlers({
    createUrl: packageListUrl,
    getFilterQueryParam: () => undefined,
    navigate,
    params
  });

  const [openModal, closeModal] = createDialogActionHandlers<
    PackageListUrlDialog,
    PackageListUrlQueryParams
  >(navigate, packageListUrl, params);

  const handleTabChange = (tab: number) =>
    navigate(
      packageListUrl({
        activeTab: tab.toString(),
        ...getFilterTabs()[tab - 1].data
      })
    );

  const handleTabDelete = () => {
    deleteFilterTab(currentTab);
    navigate(packageListUrl());
  };

  const handleTabSave = (data: SaveFilterTabDialogFormData) => {
    saveFilterTab(data.name, getActiveFilters(params));
    handleTabChange(tabs.length + 1);
  };

  const { loadNextPage, loadPreviousPage, pageInfo } = paginate(
    maybe(() => data.packages.pageInfo),
    paginationState,
    params
  );

  const handleSort = createSortHandler(navigate, packageListUrl, params);

  const deleteTransitionState = getMutationStatus(deletePackageOpts);

  return (
    <>
      <WindowTitle title={intl.formatMessage(sectionNames.package)} />
      <PackageListPage
        currentTab={currentTab}
        initialSearch={params.query}
        onSearchChange={handleSearchChange}
        onAll={resetFilters}
        onTabChange={handleTabChange}
        onTabDelete={() => openModal("delete-search")}
        onTabSave={() => openModal("save-search")}
        tabs={tabs.map(tab => tab.name)}
        packages={maybe(() => data.packages.edges.map(edge => edge.node))}
        settings={settings}
        disabled={loading}
        pageInfo={pageInfo}
        onAdd={() => navigate(packageAddUrl)}
        onNextPage={loadNextPage}
        onPreviousPage={loadPreviousPage}
        onRemove={id => openModal("delete", { id })}
        onSort={handleSort}
        onUpdateListSettings={updateListSettings}
        onRowClick={id => () => navigate(packageUrl(id))}
        sort={getSortParams(params)}
      />
      <PackageDeleteDialog
        confirmButtonState={deleteTransitionState}
        name={maybe(
          () =>
            data.packages.edges.find(edge => edge.node.id === params.id).node
              .name
        )}
        open={params.action === "delete"}
        onClose={closeModal}
        onConfirm={() =>
          deletePackage({
            variables: {
              id: params.id
            }
          })
        }
      />
      <SaveFilterTabDialog
        open={params.action === "save-search"}
        confirmButtonState="default"
        onClose={closeModal}
        onSubmit={handleTabSave}
      />
      <DeleteFilterTabDialog
        open={params.action === "delete-search"}
        confirmButtonState="default"
        onClose={closeModal}
        onSubmit={handleTabDelete}
        tabName={maybe(() => tabs[currentTab - 1].name, "...")}
      />
    </>
  );
};

PackageList.displayName = "PackageList";
export default PackageList;
