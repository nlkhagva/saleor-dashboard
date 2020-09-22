import { stringify as stringifyQs } from "qs";
import urlJoin from "url-join";

import {
  ActiveTab,
  Dialog,
  Filters,
  Pagination,
  SingleAction,
  Sort,
  TabActionDialog
} from "../types";

export const ushopSection = "/ushop/";

export const ushopListPath = ushopSection;
export enum UshopListUrlFiltersEnum {
  query = "query"
}
export type UshopListUrlFilters = Filters<UshopListUrlFiltersEnum>;
export type UshopListUrlDialog = "delete" | TabActionDialog;
export enum UshopListUrlSortField {
  name = "name"
}
export type UshopListUrlSort = Sort<UshopListUrlSortField>;
export type UshopListUrlQueryParams = ActiveTab &
  Dialog<UshopListUrlDialog> &
  Pagination &
  UshopListUrlFilters &
  UshopListUrlSort &
  SingleAction;
export const ushopListUrl = (params?: UshopListUrlQueryParams) =>
  ushopListPath + "?" + stringifyQs(params);

export const ushopPath = (id: string) => urlJoin(ushopSection, id);
export type UshopUrlDialog = "delete";
export type UshopUrlQueryParams = Dialog<UshopUrlDialog> & SingleAction;
export const ushopUrl = (id: string, params?: UshopUrlQueryParams) =>
  ushopPath(encodeURIComponent(id)) + "?" + stringifyQs(params);

export const ushopAddPath = urlJoin(ushopSection, "add");
export const ushopAddUrl = ushopAddPath;
