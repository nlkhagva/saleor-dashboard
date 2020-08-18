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

export const gaduurSection = "/gaduur/";

export const gaduurListPath = gaduurSection;
export enum GaduurListUrlFiltersEnum {
  query = "query"
}
export type GaduurListUrlFilters = Filters<GaduurListUrlFiltersEnum>;
export type GaduurListUrlDialog = "delete" | TabActionDialog;
export enum GaduurListUrlSortField {
  name = "name"
}
export type GaduurListUrlSort = Sort<GaduurListUrlSortField>;
export type GaduurListUrlQueryParams = ActiveTab &
  Dialog<GaduurListUrlDialog> &
  Pagination &
  GaduurListUrlFilters &
  GaduurListUrlSort &
  SingleAction;
export const gaduurListUrl = (params?: GaduurListUrlQueryParams) =>
  gaduurListPath + "?" + stringifyQs(params);

export const gaduurPath = (id: string) => urlJoin(gaduurSection, id);
export type GaduurUrlDialog = "delete";
export type GaduurUrlQueryParams = Dialog<GaduurUrlDialog> & SingleAction;
export const gaduurUrl = (id: string, params?: GaduurUrlQueryParams) =>
  gaduurPath(encodeURIComponent(id)) + "?" + stringifyQs(params);

export const gaduurAddPath = urlJoin(gaduurSection, "add");
export const gaduurAddUrl = gaduurAddPath;
