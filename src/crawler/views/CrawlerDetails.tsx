import { DialogContentText } from "@material-ui/core";
import ActionDialog from "@saleor/components/ActionDialog";
import { WindowTitle } from "@saleor/components/WindowTitle";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import { getMutationState, maybe } from "@saleor/misc";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

// import { CrawlerInput } from "@saleor/types/globalTypes";
import CrawlerDetailsPage, { FormData } from "../components/CrawlerDetailsPage";
import { TypedCrawlerRemove, TypedCrawlerUpdate } from "../mutations";
import { TypedCrawlerDetailsQuery } from "../queries";
import { CrawlerRemove } from "../types/CrawlerRemove";
import { crawlerListUrl, crawlerUrl, CrawlerUrlQueryParams } from "../urls";

export interface CrawlerDetailsProps {
  id: string;
  params: CrawlerUrlQueryParams;
}

const createCrawlerInput = (data: FormData): any => ({
  listSelection: data.listSelection,
  productSelection: data.productSelection,
  url: data.url
});

export const CrawlerDetails: React.FC<CrawlerDetailsProps> = ({
  id,
  params
}) => {
  const navigate = useNavigator();
  const notify = useNotifier();
  const intl = useIntl();

  const handleCrawlerRemove = (data: CrawlerRemove) => {
    if (data.crawlerDelete.errors.length === 0) {
      notify({
        status: "success",
        text: intl.formatMessage({
          defaultMessage: "Remove crawler"
        })
      });

      navigate(crawlerListUrl());
    }
  };

  return (
    <TypedCrawlerRemove variables={{ id }} onCompleted={handleCrawlerRemove}>
      {(crawlerRemove, crawlerRemoveOpts) => (
        <TypedCrawlerUpdate>
          {(crawlerUpdate, crawlerUpdateOpts) => (
            <TypedCrawlerDetailsQuery variables={{ id }}>
              {CrawlerDetails => {
                const formTransitionState = getMutationState(
                  crawlerUpdateOpts.called,
                  crawlerUpdateOpts.loading,
                  maybe(() => crawlerUpdateOpts.data.crawlerUpdate.errors)
                );
                const removeTransitionState = getMutationState(
                  crawlerRemoveOpts.called,
                  crawlerRemoveOpts.loading,
                  maybe(() => crawlerRemoveOpts.data.crawlerDelete.errors)
                );

                return (
                  <>
                    <WindowTitle
                      title={maybe(() => CrawlerDetails.data.crawler.url)}
                    />
                    <CrawlerDetailsPage
                      disabled={CrawlerDetails.loading}
                      errors={maybe(
                        () => crawlerUpdateOpts.data.crawlerUpdate.errors,
                        []
                      )}
                      saveButtonBarState={formTransitionState}
                      crawler={maybe(() => CrawlerDetails.data.crawler)}
                      onBack={() => navigate(crawlerListUrl())}
                      onRemove={() =>
                        navigate(crawlerUrl(id, { action: "remove" }))
                      }
                      onSubmit={formData =>
                        crawlerUpdate({
                          variables: {
                            id,
                            input: createCrawlerInput(formData)
                          }
                        })
                      }
                    />
                    <ActionDialog
                      open={params.action === "remove"}
                      confirmButtonState={removeTransitionState}
                      title={intl.formatMessage({
                        defaultMessage: "Delete Crawler",
                        description: "dialog header"
                      })}
                      onClose={() => navigate(crawlerUrl(id))}
                      onConfirm={crawlerRemove}
                      variant="delete"
                    >
                      <DialogContentText>
                        <FormattedMessage
                          defaultMessage="Are you sure you want to delete {url}"
                          description="delete crawler"
                          values={{
                            url: (
                              <strong>
                                {maybe(
                                  () => CrawlerDetails.data.crawler.url,
                                  "..."
                                )}
                              </strong>
                            )
                          }}
                        />
                      </DialogContentText>
                    </ActionDialog>
                  </>
                );
              }}
            </TypedCrawlerDetailsQuery>
          )}
        </TypedCrawlerUpdate>
      )}
    </TypedCrawlerRemove>
  );
};

CrawlerDetails.displayName = "CrawlerDetails";
export default CrawlerDetails;
