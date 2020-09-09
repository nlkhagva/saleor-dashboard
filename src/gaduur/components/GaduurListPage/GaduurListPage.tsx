import { Button, Card } from "@material-ui/core";
import Container from "@saleor/components/Container";
import PageHeader from "@saleor/components/PageHeader";
import SearchBar from "@saleor/components/SearchBar";
import { GaduurListUrlSortField } from "@saleor/gaduur/urls";
import { sectionNames } from "@saleor/intl";
import {
  PageListProps,
  SearchPageProps,
  SortPage,
  TabPageProps
} from "@saleor/types";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import GaduurList from "../GaduurList";

export interface GaduurListPageProps
  extends PageListProps,
    SearchPageProps,
    SortPage<GaduurListUrlSortField>,
    TabPageProps {
  gaduurs: any[];
  onRemove: (id: string) => void;
}

export const GaduurListPage: React.FC<GaduurListPageProps> = ({
  gaduurs,
  currentTab,
  disabled,
  initialSearch,
  pageInfo,
  settings,
  tabs,
  onAdd,
  onAll,
  onNextPage,
  onPreviousPage,
  onRemove,
  onRowClick,
  onSearchChange,
  onTabChange,
  onTabDelete,
  onTabSave,
  onUpdateListSettings,
  ...listProps
}) => {
  const intl = useIntl();

  return (
    <Container>
      <PageHeader title={intl.formatMessage(sectionNames.gaduur)}>
        <Button color="primary" variant="contained" onClick={onAdd}>
          <FormattedMessage
            defaultMessage="Гадуур дагавар үүсгэх"
            description="button"
          />
        </Button>
      </PageHeader>
      <Card>
        <SearchBar
          allTabLabel={intl.formatMessage({
            defaultMessage: "Бүх гадуур дагавар",
            description: "tab name"
          })}
          currentTab={currentTab}
          initialSearch={initialSearch}
          searchPlaceholder={intl.formatMessage({
            defaultMessage: "Гадуур дагавар хайх"
          })}
          tabs={tabs}
          onAll={onAll}
          onSearchChange={onSearchChange}
          onTabChange={onTabChange}
          onTabDelete={onTabDelete}
          onTabSave={onTabSave}
        />
        <GaduurList
          gaduurs={gaduurs}
          disabled={disabled}
          pageInfo={pageInfo}
          settings={settings}
          onAdd={onAdd}
          onNextPage={onNextPage}
          onPreviousPage={onPreviousPage}
          onRemove={onRemove}
          onRowClick={onRowClick}
          onUpdateListSettings={onUpdateListSettings}
          {...listProps}
        />
      </Card>
    </Container>
  );
};

GaduurListPage.displayName = "GaduurListPage";
export default GaduurListPage;
