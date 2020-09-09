import {
  GaduurListUrlFilters,
  GaduurListUrlFiltersEnum,
  GaduurListUrlQueryParams
} from "@saleor/gaduur/urls";
import { GaduurFilterInput } from "@saleor/types/globalTypes";
import { createFilterTabUtils, createFilterUtils } from "@saleor/utils/filters";

export const GADUUR_FILTER_KEY = "gaduurFilters";

export function getFilterVariables(
  params: GaduurListUrlFilters
): GaduurFilterInput {
  return {
    search: params.query
  };
}

export const {
  deleteFilterTab,
  getFilterTabs,
  saveFilterTab
} = createFilterTabUtils<GaduurListUrlFilters>(GADUUR_FILTER_KEY);

export const { areFiltersApplied, getActiveFilters } = createFilterUtils<
  GaduurListUrlQueryParams,
  GaduurListUrlFilters
>(GaduurListUrlFiltersEnum);
