import { PackageListUrlSortField } from "@saleor/package/urls";
import { PackageSortField } from "@saleor/types/globalTypes";
import { createGetSortQueryVariables } from "@saleor/utils/sort";

export function getSortQueryField(
  sort: PackageListUrlSortField
): PackageSortField {
  switch (sort) {
    case PackageListUrlSortField.name:
      return PackageSortField.NAME;
    default:
      return undefined;
  }
}

export const getSortQueryVariables = createGetSortQueryVariables(
  getSortQueryField
);
