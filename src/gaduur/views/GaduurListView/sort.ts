import { GaduurListUrlSortField } from "@saleor/gaduur/urls";
import { GaduurSortField } from "@saleor/types/globalTypes";
import { createGetSortQueryVariables } from "@saleor/utils/sort";

export function getSortQueryField(
  sort: GaduurListUrlSortField
): GaduurSortField {
  switch (sort) {
    case GaduurListUrlSortField.name:
      return GaduurSortField.NAME;
    default:
      return undefined;
  }
}

export const getSortQueryVariables = createGetSortQueryVariables(
  getSortQueryField
);
