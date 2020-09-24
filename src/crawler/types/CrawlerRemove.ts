/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CrawlerRemove
// ====================================================

export interface CrawlerRemove_crawlerDelete_errors {
  __typename: "Error";
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface CrawlerRemove_crawlerDelete {
  __typename: "CrawlerDelete";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: CrawlerRemove_crawlerDelete_errors[];
}

export interface CrawlerRemove {
  /**
   * deletes a crawler
   */
  crawlerDelete: CrawlerRemove_crawlerDelete | null;
}

export interface CrawlerRemoveVariables {
  id: string;
}
