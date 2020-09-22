import { UshopSortField } from "@saleor/types/globalTypes";
import { UshopListUrlSortField } from "@saleor/ushop/urls";
import { createGetSortQueryVariables } from "@saleor/utils/sort";

export function getSortQueryField(sort: UshopListUrlSortField): UshopSortField {
  switch (sort) {
    case UshopListUrlSortField.name:
      return UshopSortField.NAME;
    default:
      return undefined;
  }
}

export const getSortQueryVariables = createGetSortQueryVariables(
  getSortQueryField
);
