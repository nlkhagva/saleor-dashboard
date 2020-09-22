import { Button, Card } from "@material-ui/core";
import Container from "@saleor/components/Container";
import PageHeader from "@saleor/components/PageHeader";
import SearchBar from "@saleor/components/SearchBar";
import { sectionNames } from "@saleor/intl";
import {
  PageListProps,
  SearchPageProps,
  SortPage,
  TabPageProps
} from "@saleor/types";
import UshopList from "@saleor/ushop/components/UshopList";
import { UshopListUrlSortField } from "@saleor/ushop/urls";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

export interface UshopListPageProps
  extends PageListProps,
    SearchPageProps,
    SortPage<UshopListUrlSortField>,
    TabPageProps {
  ushops: any[];
  onRemove: (id: string) => void;
}

export const UshopListPage: React.FC<UshopListPageProps> = ({
  ushops,
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
      <PageHeader title={intl.formatMessage(sectionNames.ushop)}>
        <Button color="primary" variant="contained" onClick={onAdd}>
          <FormattedMessage
            defaultMessage="Англи дэлгүүр үүсгэх"
            description="button"
          />
        </Button>
      </PageHeader>
      <Card>
        <SearchBar
          allTabLabel={intl.formatMessage({
            defaultMessage: "Бүх англи дэлгүүр",
            description: "tab name"
          })}
          currentTab={currentTab}
          initialSearch={initialSearch}
          searchPlaceholder={intl.formatMessage({
            defaultMessage: "Англи дэлгүүр хайх"
          })}
          tabs={tabs}
          onAll={onAll}
          onSearchChange={onSearchChange}
          onTabChange={onTabChange}
          onTabDelete={onTabDelete}
          onTabSave={onTabSave}
        />
        <UshopList
          ushops={ushops}
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

UshopListPage.displayName = "UshopListPage";
export default UshopListPage;
