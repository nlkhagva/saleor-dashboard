/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CrawlerBulkRemove
// ====================================================

export interface CrawlerBulkRemove_crawlerBulkDelete_errors {
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

export interface CrawlerBulkRemove_crawlerBulkDelete {
  __typename: "CrawlerBulkDelete";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: CrawlerBulkRemove_crawlerBulkDelete_errors[];
}

export interface CrawlerBulkRemove {
  /**
   * Deletes pages.
   */
  crawlerBulkDelete: CrawlerBulkRemove_crawlerBulkDelete | null;
}

export interface CrawlerBulkRemoveVariables {
  ids: (string | null)[];
}
