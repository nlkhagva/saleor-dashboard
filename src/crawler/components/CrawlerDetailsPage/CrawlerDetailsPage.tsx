import AppHeader from "@saleor/components/AppHeader";
import { ConfirmButtonTransitionState } from "@saleor/components/ConfirmButton";
import Container from "@saleor/components/Container";
import Form from "@saleor/components/Form";
import PageHeader from "@saleor/components/PageHeader";
import SaveButtonBar from "@saleor/components/SaveButtonBar";
import { sectionNames } from "@saleor/intl";
import { maybe } from "@saleor/misc";
import { UserError } from "@saleor/types";
import React from "react";
import { useIntl } from "react-intl";

import { CrawlerDetails_crawler } from "../../types/CrawlerDetails";
import CrawlerInfo from "../CrawlerInfo";
// import CrawlerProcess from "../ShopInfo/CrawlerProcess";

export interface FormData {
  url: string;
  listSelection: string;
  productSelection: string;
}

export interface CrawlerDetailsPageProps {
  disabled: boolean;
  errors: UserError[];
  crawler: CrawlerDetails_crawler;
  saveButtonBarState: ConfirmButtonTransitionState;
  onBack: () => void;
  onRemove: () => void;
  onSubmit: (data: FormData) => void;
}

const CrawlerDetailsPage: React.FC<CrawlerDetailsPageProps> = ({
  disabled,
  crawler,
  saveButtonBarState,
  onBack,
  onRemove,
  onSubmit
}) => {
  const intl = useIntl();

  const initialForm: FormData = {
    listSelection: maybe(() => crawler.listSelection, ""),
    productSelection: maybe(() => crawler.productSelection, ""),
    url: maybe(() => crawler.url, "")
  };

  return (
    <Form initial={initialForm} onSubmit={onSubmit}>
      {({ change, data, submit }) => (
        <Container>
          <AppHeader onBack={onBack}>
            {intl.formatMessage(sectionNames.crawler)}
          </AppHeader>
          <PageHeader
            title={
              crawler === null
                ? intl.formatMessage({
                    defaultMessage: "Create crawler",
                    description: "page header"
                  })
                : maybe(() => crawler.url)
            }
          />
          <CrawlerInfo
            data={data}
            disabled={disabled}
            crawler={crawler}
            onChange={change}
          />
          {/* {crawler && (
            <CrawlerProcess
              url={crawler.url}
              crawler={crawler}
              listSelection={crawler.listSelection}
              productSelection={crawler.productSelection}
            />
          )} */}
          <SaveButtonBar
            disabled={disabled}
            state={saveButtonBarState}
            onCancel={onBack}
            onDelete={crawler === null ? undefined : onRemove}
            onSave={submit}
          />
        </Container>
      )}
    </Form>
  );
};

export default CrawlerDetailsPage;
