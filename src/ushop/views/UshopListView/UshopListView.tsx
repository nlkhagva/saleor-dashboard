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
import { ListViews } from "@saleor/types";
import UshopDeleteDialog from "@saleor/ushop/components/UshopDeleteDialog";
import UshopListPage from "@saleor/ushop/components/UshopListPage";
import { useUshopDelete } from "@saleor/ushop/mutations";
import { useUshopList } from "@saleor/ushop/queries";
import {
  ushopAddUrl,
  ushopListUrl,
  UshopListUrlDialog,
  UshopListUrlQueryParams,
  ushopUrl
} from "@saleor/ushop/urls";
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

export interface UshopListProps {
  params: UshopListUrlQueryParams;
}

const UshopList: React.FC<UshopListProps> = ({ params }) => {
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

  const { data, loading, refetch } = useUshopList({
    displayLoader: true,
    variables: queryVariables
  });

  const [deleteUshop, deleteUshopOpts] = useUshopDelete({
    onCompleted: data => {
      if (data.ushopDelete.errors.length === 0) {
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
    createUrl: ushopListUrl,
    getFilterQueryParam: () => undefined,
    navigate,
    params
  });

  const [openModal, closeModal] = createDialogActionHandlers<
    UshopListUrlDialog,
    UshopListUrlQueryParams
  >(navigate, ushopListUrl, params);

  const handleTabChange = (tab: number) =>
    navigate(
      ushopListUrl({
        activeTab: tab.toString(),
        ...getFilterTabs()[tab - 1].data
      })
    );

  const handleTabDelete = () => {
    deleteFilterTab(currentTab);
    navigate(ushopListUrl());
  };

  const handleTabSave = (data: SaveFilterTabDialogFormData) => {
    saveFilterTab(data.name, getActiveFilters(params));
    handleTabChange(tabs.length + 1);
  };

  const { loadNextPage, loadPreviousPage, pageInfo } = paginate(
    maybe(() => data.ushops.pageInfo),
    paginationState,
    params
  );

  const handleSort = createSortHandler(navigate, ushopListUrl, params);

  const deleteTransitionState = getMutationStatus(deleteUshopOpts);

  return (
    <>
      <WindowTitle title={intl.formatMessage(sectionNames.ushop)} />
      <UshopListPage
        currentTab={currentTab}
        initialSearch={params.query}
        onSearchChange={handleSearchChange}
        onAll={resetFilters}
        onTabChange={handleTabChange}
        onTabDelete={() => openModal("delete-search")}
        onTabSave={() => openModal("save-search")}
        tabs={tabs.map(tab => tab.name)}
        ushops={maybe(() => data.ushops.edges.map(edge => edge.node))}
        settings={settings}
        disabled={loading}
        pageInfo={pageInfo}
        onAdd={() => navigate(ushopAddUrl)}
        onNextPage={loadNextPage}
        onPreviousPage={loadPreviousPage}
        onRemove={id => openModal("delete", { id })}
        onSort={handleSort}
        onUpdateListSettings={updateListSettings}
        onRowClick={id => () => navigate(ushopUrl(id))}
        sort={getSortParams(params)}
      />
      <UshopDeleteDialog
        confirmButtonState={deleteTransitionState}
        name={maybe(
          () =>
            data.ushops.edges.find(edge => edge.node.id === params.id).node.name
        )}
        open={params.action === "delete"}
        onClose={closeModal}
        onConfirm={() =>
          deleteUshop({
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

UshopList.displayName = "UshopList";
export default UshopList;
