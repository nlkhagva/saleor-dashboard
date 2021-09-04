/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CrawlerLineInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: CrawlerLineCreate
// ====================================================

export interface CrawlerLineCreate_crawlerLineCreate_crawlerLine_crawler_shop {
  __typename: "Ushop";
  name: string;
}

export interface CrawlerLineCreate_crawlerLineCreate_crawlerLine_crawler {
  __typename: "Crawler";
  shop: CrawlerLineCreate_crawlerLineCreate_crawlerLine_crawler_shop;
}

export interface CrawlerLineCreate_crawlerLineCreate_crawlerLine {
  __typename: "CrawlerLine";
  /**
   * The ID of the object.
   */
  id: string;
  crawler: CrawlerLineCreate_crawlerLineCreate_crawlerLine_crawler | null;
}

export interface CrawlerLineCreate_crawlerLineCreate {
  __typename: "CrawlerLineCreate";
  crawlerLine: CrawlerLineCreate_crawlerLineCreate_crawlerLine | null;
}

export interface CrawlerLineCreate {
  /**
   * Create a new crawler item
   */
  crawlerLineCreate: CrawlerLineCreate_crawlerLineCreate | null;
}

export interface CrawlerLineCreateVariables {
  input?: CrawlerLineInput | null;
}
