import DeleteFilterTabDialog from "@saleor/components/DeleteFilterTabDialog";
import SaveFilterTabDialog, {
  SaveFilterTabDialogFormData
} from "@saleor/components/SaveFilterTabDialog";
import { WindowTitle } from "@saleor/components/WindowTitle";
import GaduurDeleteDialog from "@saleor/gaduur/components/GaduurDeleteDialog";
import GaduurListPage from "@saleor/gaduur/components/GaduurListPage";
import { useGaduurDelete } from "@saleor/gaduur/mutations";
import { useGaduurList } from "@saleor/gaduur/queries";
import {
  gaduurAddUrl,
  gaduurListUrl,
  GaduurListUrlDialog,
  GaduurListUrlQueryParams,
  gaduurUrl
} from "@saleor/gaduur/urls";
import useListSettings from "@saleor/hooks/useListSettings";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import usePaginator, {
  createPaginationState
} from "@saleor/hooks/usePaginator";
import { commonMessages, sectionNames } from "@saleor/intl";
import { getMutationStatus, maybe } from "@saleor/misc";
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

export interface GaduurListProps {
  params: GaduurListUrlQueryParams;
}

const GaduurList: React.FC<GaduurListProps> = ({ params }) => {
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

  const { data, loading, refetch } = useGaduurList({
    displayLoader: true,
    variables: queryVariables
  });

  const [deleteGaduur, deleteGaduurOpts] = useGaduurDelete({
    onCompleted: data => {
      if (data.gaduurDelete.errors.length === 0) {
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
    createUrl: gaduurListUrl,
    getFilterQueryParam: () => undefined,
    navigate,
    params
  });

  const [openModal, closeModal] = createDialogActionHandlers<
    GaduurListUrlDialog,
    GaduurListUrlQueryParams
  >(navigate, gaduurListUrl, params);

  const handleTabChange = (tab: number) =>
    navigate(
      gaduurListUrl({
        activeTab: tab.toString(),
        ...getFilterTabs()[tab - 1].data
      })
    );

  const handleTabDelete = () => {
    deleteFilterTab(currentTab);
    navigate(gaduurListUrl());
  };

  const handleTabSave = (data: SaveFilterTabDialogFormData) => {
    saveFilterTab(data.name, getActiveFilters(params));
    handleTabChange(tabs.length + 1);
  };

  const { loadNextPage, loadPreviousPage, pageInfo } = paginate(
    maybe(() => data.gaduurs.pageInfo),
    paginationState,
    params
  );

  const handleSort = createSortHandler(navigate, gaduurListUrl, params);

  const deleteTransitionState = getMutationStatus(deleteGaduurOpts);

  return (
    <>
      <WindowTitle title={intl.formatMessage(sectionNames.gaduur)} />
      <GaduurListPage
        currentTab={currentTab}
        initialSearch={params.query}
        onSearchChange={handleSearchChange}
        onAll={resetFilters}
        onTabChange={handleTabChange}
        onTabDelete={() => openModal("delete-search")}
        onTabSave={() => openModal("save-search")}
        tabs={tabs.map(tab => tab.name)}
        gaduurs={maybe(() => data.gaduurs.edges.map(edge => edge.node))}
        settings={settings}
        disabled={loading}
        pageInfo={pageInfo}
        onAdd={() => navigate(gaduurAddUrl)}
        onNextPage={loadNextPage}
        onPreviousPage={loadPreviousPage}
        onRemove={id => openModal("delete", { id })}
        onSort={handleSort}
        onUpdateListSettings={updateListSettings}
        onRowClick={id => () => navigate(gaduurUrl(id))}
        sort={getSortParams(params)}
      />
      <GaduurDeleteDialog
        confirmButtonState={deleteTransitionState}
        name={maybe(
          () =>
            data.gaduurs.edges.find(edge => edge.node.id === params.id).node
              .name
        )}
        open={params.action === "delete"}
        onClose={closeModal}
        onConfirm={() =>
          deleteGaduur({
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

GaduurList.displayName = "GaduurList";
export default GaduurList;
