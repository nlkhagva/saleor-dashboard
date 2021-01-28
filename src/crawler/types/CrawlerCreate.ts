/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CrawlerInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: CrawlerCreate
// ====================================================

export interface CrawlerCreate_crawlerCreate_errors {
  __typename: "Error";
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface CrawlerCreate_crawlerCreate_crawler_shop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface CrawlerCreate_crawlerCreate_crawler {
  __typename: "Crawler";
  /**
   * The ID of the object.
   */
  id: string;
  url: string;
  completed: boolean;
  productCount: number | null;
  jsonData: any;
  listSelection: string;
  productSelection: string;
  shop: CrawlerCreate_crawlerCreate_crawler_shop;
}

export interface CrawlerCreate_crawlerCreate {
  __typename: "CrawlerCreate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: CrawlerCreate_crawlerCreate_errors[];
  crawler: CrawlerCreate_crawlerCreate_crawler | null;
}

export interface CrawlerCreate {
  /**
   * create a new crawler
   */
  crawlerCreate: CrawlerCreate_crawlerCreate | null;
}

export interface CrawlerCreateVariables {
  input: CrawlerInput;
}
