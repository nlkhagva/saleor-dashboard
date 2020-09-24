import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ActionDialog from "@saleor/components/ActionDialog";
import { configurationMenuUrl } from "@saleor/configuration";
import useBulkActions from "@saleor/hooks/useBulkActions";
import useListSettings from "@saleor/hooks/useListSettings";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import usePaginator, {
  createPaginationState
} from "@saleor/hooks/usePaginator";
import { getMutationState, maybe } from "@saleor/misc";
import { ListViews } from "@saleor/types";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import CrawlerListPage from "../components/CrawlerListPage";
import { TypedCrawlerBulkRemove } from "../mutations";
import { TypedCrawlerListQuery } from "../queries";
import { CrawlerBulkRemove } from "../types/CrawlerBulkRemove";
import {
  crawlerCreateUrl,
  crawlerListUrl,
  CrawlerListUrlDialog,
  CrawlerListUrlQueryParams,
  crawlerUrl
} from "../urls";

interface CrawlerListProps {
  params: CrawlerListUrlQueryParams;
}

export const CrawlerList: React.FC<CrawlerListProps> = ({ params }) => {
  const navigate = useNavigator();
  const notify = useNotifier();
  const paginate = usePaginator();

  const { isSelected, listElements, reset, toggle, toggleAll } = useBulkActions(
    params.ids
  );
  const { updateListSettings, settings } = useListSettings(
    ListViews.PAGES_LIST
  );

  const intl = useIntl();

  const paginationState = createPaginationState(settings.rowNumber, params);

  return (
    <TypedCrawlerListQuery displayLoader variables={paginationState}>
      {({ data, loading, refetch }) => {
        const { loadNextPage, loadPreviousPage, pageInfo } = paginate(
          maybe(() => data.crawlers.pageInfo),
          paginationState,
          params
        );

        const closeModal = () =>
          navigate(
            crawlerListUrl({
              ...params,
              action: undefined,
              ids: undefined
            }),
            true
          );

        const openModal = (action: CrawlerListUrlDialog, ids: string[]) =>
          navigate(
            crawlerListUrl({
              ...params,
              action,
              ids
            })
          );

        const handleCrawlerBulkRemove = (data: CrawlerBulkRemove) => {
          if (data.crawlerBulkDelete.errors.length === 0) {
            closeModal();
            notify({
              status: "success",
              text: intl.formatMessage({
                defaultMessage: "remove crawlers",
                description: "notification"
              })
            });
            reset();
            refetch();
          }
        };

        return (
          <TypedCrawlerBulkRemove onCompleted={handleCrawlerBulkRemove}>
            {(bulkCrawlerRemove, bulkCrawlerRemoveOpts) => {
              const deleteTransitionState = getMutationState(
                bulkCrawlerRemoveOpts.called,
                bulkCrawlerRemoveOpts.loading,
                maybe(() => bulkCrawlerRemoveOpts.data.crawlerBulkDelete.errors)
              );

              return (
                <>
                  <CrawlerListPage
                    disabled={loading}
                    settings={settings}
                    crawlers={maybe(() =>
                      data.crawlers.edges.map(edge => edge.node)
                    )}
                    pageInfo={pageInfo}
                    onAdd={() => navigate(crawlerCreateUrl)}
                    onBack={() => navigate(configurationMenuUrl)}
                    onNextPage={loadNextPage}
                    onPreviousPage={loadPreviousPage}
                    onUpdateListSettings={updateListSettings}
                    onRowClick={id => () => navigate(crawlerUrl(id))}
                    toolbar={
                      <>
                        <IconButton
                          color="primary"
                          onClick={() => openModal("remove", listElements)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </>
                    }
                    isChecked={isSelected}
                    selected={listElements.length}
                    toggle={toggle}
                    toggleAll={toggleAll}
                  />
                  <ActionDialog
                    open={params.action === "remove"}
                    onClose={closeModal}
                    confirmButtonState={deleteTransitionState}
                    onConfirm={() =>
                      bulkCrawlerRemove({
                        variables: {
                          ids: params.ids
                        }
                      })
                    }
                    variant="delete"
                    title={intl.formatMessage({
                      defaultMessage: "Delete crawlers",
                      description: "dialog header"
                    })}
                  >
                    <FormattedMessage
                      defaultMessage="Are you sure you want to delete {counter,plural,one{this page} other{{displayQuantity} crawlers}}?"
                      description="dialog content"
                      values={{
                        counter: maybe(() => params.ids.length),
                        displayQuantity: (
                          <strong>{maybe(() => params.ids.length)}</strong>
                        )
                      }}
                    />
                  </ActionDialog>
                </>
              );
            }}
          </TypedCrawlerBulkRemove>
        );
      }}
    </TypedCrawlerListQuery>
  );
};

export default CrawlerList;
