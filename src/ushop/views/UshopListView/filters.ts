import { UshopFilterInput } from "@saleor/types/globalTypes";
import {
  UshopListUrlFilters,
  UshopListUrlFiltersEnum,
  UshopListUrlQueryParams
} from "@saleor/ushop/urls";
import { createFilterTabUtils, createFilterUtils } from "@saleor/utils/filters";

export const GADUUR_FILTER_KEY = "ushopFilters";

export function getFilterVariables(
  params: UshopListUrlFilters
): UshopFilterInput {
  return {
    search: params.query
  };
}

export const {
  deleteFilterTab,
  getFilterTabs,
  saveFilterTab
} = createFilterTabUtils<UshopListUrlFilters>(GADUUR_FILTER_KEY);

export const { areFiltersApplied, getActiveFilters } = createFilterUtils<
  UshopListUrlQueryParams,
  UshopListUrlFilters
>(UshopListUrlFiltersEnum);
