import { WindowTitle } from "@saleor/components/WindowTitle";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import React from "react";
import { useIntl } from "react-intl";

import { getMutationState, maybe } from "../../misc";
import CrawlerDetailsPage from "../components/CrawlerDetailsPage";
import { TypedCrawlerCreate } from "../mutations";
import { CrawlerCreate as CrawlerCreateData } from "../types/CrawlerCreate";
import { crawlerListUrl, crawlerUrl } from "../urls";

export interface PageCreateProps {
  id: string;
}

export const PageCreate: React.FC<PageCreateProps> = () => {
  const navigate = useNavigator();
  const notify = useNotifier();
  const intl = useIntl();

  const handlePageCreate = (data: CrawlerCreateData) => {
    if (data.crawlerCreate.errors.length === 0) {
      notify({
        status: "success",
        text: intl.formatMessage({
          defaultMessage: "Successfully created new crawler"
        })
      });
      navigate(crawlerUrl(data.crawlerCreate.crawler.id));
    }
  };

  return (
    <TypedCrawlerCreate onCompleted={handlePageCreate}>
      {(crawlerCreate, crawlerCreateOpts) => {
        const formTransitionState = getMutationState(
          crawlerCreateOpts.called,
          crawlerCreateOpts.loading,
          maybe(() => crawlerCreateOpts.data.crawlerCreate.errors)
        );

        return (
          <>
            <WindowTitle
              title={intl.formatMessage({
                defaultMessage: "Create Crawler",
                description: "header"
              })}
            />
            <CrawlerDetailsPage
              disabled={crawlerCreateOpts.loading}
              errors={maybe(
                () => crawlerCreateOpts.data.crawlerCreate.errors,
                []
              )}
              saveButtonBarState={formTransitionState}
              crawler={null}
              onBack={() => navigate(crawlerListUrl())}
              onRemove={() => undefined}
              onSubmit={formData =>
                crawlerCreate({
                  variables: {
                    input: {
                      completed: false,
                      jsonData: JSON.stringify({}),
                      listSelection: formData.listSelection,
                      productCount: 0,
                      productSelection: formData.productSelection,
                      url: formData.url
                    }
                  }
                })
              }
            />
          </>
        );
      }}
    </TypedCrawlerCreate>
  );
};
PageCreate.displayName = "PageCreate";
export default PageCreate;
