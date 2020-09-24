import { stringify as stringifyQs } from "qs";
import urlJoin from "url-join";

import { BulkAction, Dialog, Pagination } from "../types";

export const crawlerSection = "/crawler/";

export const crawlerListPath = crawlerSection;
export type CrawlerListUrlDialog = "publish" | "unpublish" | "remove";
export type CrawlerListUrlQueryParams = BulkAction &
  Dialog<CrawlerListUrlDialog> &
  Pagination;
export const crawlerListUrl = (params?: CrawlerListUrlQueryParams) =>
  crawlerListPath + "?" + stringifyQs(params);

export const crawlerPath = (id: string) => urlJoin(crawlerSection, id);
export type CrawlerUrlDialog = "remove";
export type CrawlerUrlQueryParams = Dialog<CrawlerUrlDialog>;
export const crawlerUrl = (id: string, params?: CrawlerUrlQueryParams) =>
  crawlerPath(encodeURIComponent(id)) + "?" + stringifyQs(params);

export const crawlerCreatePath = urlJoin(crawlerSection, "add");
export const crawlerCreateUrl = crawlerCreatePath;
