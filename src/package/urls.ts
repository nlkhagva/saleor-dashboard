import {
  ActiveTab,
  Dialog,
  Filters,
  Pagination,
  SingleAction,
  Sort,
  TabActionDialog
} from "../types";

import { stringify as stringifyQs } from "qs";
import urlJoin from "url-join";

export type ordernumber = Partial<{
  ordernumber: string;
}>;

export const packageSection = "/package/";

export const packageListPath = packageSection;
export enum PackageListUrlFiltersEnum {
  query = "query"
}
export type PackageListUrlFilters = Filters<PackageListUrlFiltersEnum>;
export type PackageListUrlDialog = "delete" | TabActionDialog;
export enum PackageListUrlSortField {
  name = "name"
}
export type PackageListUrlSort = Sort<PackageListUrlSortField>;
export type PackageListUrlQueryParams = ActiveTab &
  Dialog<PackageListUrlDialog> &
  Pagination &
  PackageListUrlFilters &
  PackageListUrlSort &
  SingleAction;
export type PackageAddParams = ordernumber;

export const packageListUrl = (params?: PackageListUrlQueryParams) =>
  packageListPath + "?" + stringifyQs(params);

export const packagePath = (id: string) => urlJoin(packageSection, id);
export type PackageUrlDialog = "delete";
export type PackageUrlQueryParams = Dialog<PackageUrlDialog> &
  SingleAction &
  ordernumber;
export const packageUrl = (id: string, params?: PackageUrlQueryParams) =>
  packagePath(encodeURIComponent(id)) + "?" + stringifyQs(params);

export const packageAddPath = urlJoin(packageSection, "add");
export const packageAddUrl = (params?: PackageAddParams) =>
  packageAddPath + "?" + stringifyQs(params);
// export const packageAddUrlWithONum = (id: string) =>
//   urlJoin(packageAddPath, encodeURIComponent(id));

export const packageFulfill = urlJoin(packageSection, "fulfill");
