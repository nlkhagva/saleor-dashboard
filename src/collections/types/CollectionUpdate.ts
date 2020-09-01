/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CollectionInput, ProductErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: CollectionUpdate
// ====================================================

export interface CollectionUpdate_collectionUpdate_collection_metadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface CollectionUpdate_collectionUpdate_collection_privateMetadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface CollectionUpdate_collectionUpdate_collection_backgroundImage {
  __typename: "Image";
  /**
   * Alt text for an image.
   */
  alt: string | null;
  /**
   * The URL of the image.
   */
  url: string;
}

export interface CollectionUpdate_collectionUpdate_collection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  isPublished: boolean;
  name: string;
  metadata: (CollectionUpdate_collectionUpdate_collection_metadata | null)[];
  privateMetadata: (CollectionUpdate_collectionUpdate_collection_privateMetadata | null)[];
  backgroundImage: CollectionUpdate_collectionUpdate_collection_backgroundImage | null;
  descriptionJson: any;
  publicationDate: any | null;
  seoDescription: string | null;
  seoTitle: string | null;
}

export interface CollectionUpdate_collectionUpdate_errors {
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

export interface CollectionUpdate_collectionUpdate {
  __typename: "CollectionUpdate";
  collection: CollectionUpdate_collectionUpdate_collection | null;
  errors: CollectionUpdate_collectionUpdate_errors[];
}

export interface CollectionUpdate {
  /**
   * Updates a collection.
   */
  collectionUpdate: CollectionUpdate_collectionUpdate | null;
}

export interface CollectionUpdateVariables {
  id: string;
  input: CollectionInput;
}
