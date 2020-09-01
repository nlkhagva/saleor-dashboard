/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CollectionInput, ShopErrorCode, ProductErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: CollectionUpdateWithHomepage
// ====================================================

export interface CollectionUpdateWithHomepage_homepageCollectionUpdate_errors {
  __typename: "ShopError";
  /**
   * The error code.
   */
  code: ShopErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
}

export interface CollectionUpdateWithHomepage_homepageCollectionUpdate_shop_homepageCollection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface CollectionUpdateWithHomepage_homepageCollectionUpdate_shop {
  __typename: "Shop";
  /**
   * Collection displayed on homepage.
   */
  homepageCollection: CollectionUpdateWithHomepage_homepageCollectionUpdate_shop_homepageCollection | null;
}

export interface CollectionUpdateWithHomepage_homepageCollectionUpdate {
  __typename: "HomepageCollectionUpdate";
  errors: CollectionUpdateWithHomepage_homepageCollectionUpdate_errors[];
  /**
   * Updated shop.
   */
  shop: CollectionUpdateWithHomepage_homepageCollectionUpdate_shop | null;
}

export interface CollectionUpdateWithHomepage_collectionUpdate_collection_metadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface CollectionUpdateWithHomepage_collectionUpdate_collection_privateMetadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface CollectionUpdateWithHomepage_collectionUpdate_collection_backgroundImage {
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

export interface CollectionUpdateWithHomepage_collectionUpdate_collection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  isPublished: boolean;
  name: string;
  metadata: (CollectionUpdateWithHomepage_collectionUpdate_collection_metadata | null)[];
  privateMetadata: (CollectionUpdateWithHomepage_collectionUpdate_collection_privateMetadata | null)[];
  backgroundImage: CollectionUpdateWithHomepage_collectionUpdate_collection_backgroundImage | null;
  descriptionJson: any;
  publicationDate: any | null;
  seoDescription: string | null;
  seoTitle: string | null;
}

export interface CollectionUpdateWithHomepage_collectionUpdate_errors {
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

export interface CollectionUpdateWithHomepage_collectionUpdate {
  __typename: "CollectionUpdate";
  collection: CollectionUpdateWithHomepage_collectionUpdate_collection | null;
  errors: CollectionUpdateWithHomepage_collectionUpdate_errors[];
}

export interface CollectionUpdateWithHomepage {
  /**
   * Updates homepage collection of the shop.
   */
  homepageCollectionUpdate: CollectionUpdateWithHomepage_homepageCollectionUpdate | null;
  /**
   * Updates a collection.
   */
  collectionUpdate: CollectionUpdateWithHomepage_collectionUpdate | null;
}

export interface CollectionUpdateWithHomepageVariables {
  id: string;
  input: CollectionInput;
  homepageId?: string | null;
}
