import Button from "@material-ui/core/Button";
import AppHeader from "@saleor/components/AppHeader";
import Container from "@saleor/components/Container";
import PageHeader from "@saleor/components/PageHeader";
import { sectionNames } from "@saleor/intl";
import { ListActions, PageListProps } from "@saleor/types";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { CrawlerList_crawlers_edges_node } from "../../types/CrawlerList";
import PageList from "../CrawlerList/CrawlerList";

export interface CrawlerListPageProps extends PageListProps, ListActions {
  crawlers: CrawlerList_crawlers_edges_node[];
  onBack: () => void;
}

const CrawlerListPage: React.FC<CrawlerListPageProps> = ({
  disabled,
  settings,
  onAdd,
  onBack,
  onNextPage,
  onPreviousPage,
  onRowClick,
  onUpdateListSettings,
  pageInfo,
  crawlers,
  isChecked,
  selected,
  toggle,
  toggleAll,
  toolbar
}) => {
  const intl = useIntl();

  return (
    <Container>
      <AppHeader onBack={onBack}>
        {intl.formatMessage(sectionNames.configuration)}
      </AppHeader>
      <PageHeader title={intl.formatMessage(sectionNames.crawler)}>
        <Button
          disabled={disabled}
          onClick={onAdd}
          variant="contained"
          color="primary"
        >
          <FormattedMessage
            defaultMessage="Create crawler"
            description="button"
          />
        </Button>
      </PageHeader>
      <PageList
        disabled={disabled}
        settings={settings}
        crawlers={crawlers}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
        onUpdateListSettings={onUpdateListSettings}
        onRowClick={onRowClick}
        pageInfo={pageInfo}
        isChecked={isChecked}
        selected={selected}
        toggle={toggle}
        toggleAll={toggleAll}
        toolbar={toolbar}
      />
    </Container>
  );
};
CrawlerListPage.displayName = "CrawlerListPage";
export default CrawlerListPage;
