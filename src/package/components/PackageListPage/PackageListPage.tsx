import { Button, Card } from "@material-ui/core";
import Container from "@saleor/components/Container";
import PageHeader from "@saleor/components/PageHeader";
import SearchBar from "@saleor/components/SearchBar";
import { sectionNames } from "@saleor/intl";
import { PackageListUrlSortField } from "@saleor/package/urls";
import {
  PageListProps,
  SearchPageProps,
  SortPage,
  TabPageProps
} from "@saleor/types";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import PackageList from "../PackageList";

export interface PackageListPageProps
  extends PageListProps,
    SearchPageProps,
    SortPage<PackageListUrlSortField>,
    TabPageProps {
  packages: any[];
  onRemove: (id: string) => void;
}

export const PackageListPage: React.FC<PackageListPageProps> = ({
  packages,
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
      <PageHeader title={intl.formatMessage(sectionNames.package)}>
        <Button color="primary" variant="contained" onClick={onAdd}>
          <FormattedMessage
            defaultMessage="Илгээмж үүсгэх"
            description="button"
          />
        </Button>
      </PageHeader>
      <Card>
        <SearchBar
          allTabLabel={intl.formatMessage({
            defaultMessage: "Бүх илгээмж",
            description: "tab name"
          })}
          currentTab={currentTab}
          initialSearch={initialSearch}
          searchPlaceholder={intl.formatMessage({
            defaultMessage: "Илгээмж хайх"
          })}
          tabs={tabs}
          onAll={onAll}
          onSearchChange={onSearchChange}
          onTabChange={onTabChange}
          onTabDelete={onTabDelete}
          onTabSave={onTabSave}
        />
        <PackageList
          packages={packages}
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

PackageListPage.displayName = "PackageListPage";
export default PackageListPage;
