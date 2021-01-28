/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CrawlerInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: CrawlerUpdate
// ====================================================

export interface CrawlerUpdate_crawlerUpdate_errors {
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

export interface CrawlerUpdate_crawlerUpdate_crawler_shop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface CrawlerUpdate_crawlerUpdate_crawler {
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
  shop: CrawlerUpdate_crawlerUpdate_crawler_shop;
}

export interface CrawlerUpdate_crawlerUpdate {
  __typename: "CrawlerUpdate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: CrawlerUpdate_crawlerUpdate_errors[];
  crawler: CrawlerUpdate_crawlerUpdate_crawler | null;
}

export interface CrawlerUpdate {
  /**
   * updates an existing crawler
   */
  crawlerUpdate: CrawlerUpdate_crawlerUpdate | null;
}

export interface CrawlerUpdateVariables {
  id: string;
  input: CrawlerInput;
}
