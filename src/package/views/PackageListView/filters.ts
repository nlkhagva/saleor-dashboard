import {
  PackageListUrlFilters,
  PackageListUrlFiltersEnum,
  PackageListUrlQueryParams
} from "@saleor/package/urls";
import { PackageFilterInput } from "@saleor/types/globalTypes";
import { createFilterTabUtils, createFilterUtils } from "@saleor/utils/filters";

export const PACKAGE_FILTER_KEY = "packageFilters";

export function getFilterVariables(
  params: PackageListUrlFilters
): PackageFilterInput {
  return {
    search: params.query
  };
}

export const {
  deleteFilterTab,
  getFilterTabs,
  saveFilterTab
} = createFilterTabUtils<PackageListUrlFilters>(PACKAGE_FILTER_KEY);

export const { areFiltersApplied, getActiveFilters } = createFilterUtils<
  PackageListUrlQueryParams,
  PackageListUrlFilters
>(PackageListUrlFiltersEnum);
