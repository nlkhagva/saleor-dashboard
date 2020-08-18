/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: CollectionBulkPublish
// ====================================================

export interface CollectionBulkPublish_collectionBulkPublish_errors {
  __typename: "ProductError";
  /**
   * The error code.
   */
  code: ProductErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
}

export interface CollectionBulkPublish_collectionBulkPublish {
  __typename: "CollectionBulkPublish";
  errors: CollectionBulkPublish_collectionBulkPublish_errors[];
}

export interface CollectionBulkPublish {
  /**
   * Publish collections.
   */
  collectionBulkPublish: CollectionBulkPublish_collectionBulkPublish | null;
}

export interface CollectionBulkPublishVariables {
  ids: (string | null)[];
  isPublished: boolean;
}
