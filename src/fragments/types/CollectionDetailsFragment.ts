/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CollectionDetailsFragment
// ====================================================

export interface CollectionDetailsFragment_metadata {
  __typename: "MetadataItem";
  /**
   * Key of a metadata item.
   */
  key: string;
  /**
   * Value of a metadata item.
   */
  value: string;
}

export interface CollectionDetailsFragment_privateMetadata {
  __typename: "MetadataItem";
  /**
   * Key of a metadata item.
   */
  key: string;
  /**
   * Value of a metadata item.
   */
  value: string;
}

export interface CollectionDetailsFragment_backgroundImage {
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

export interface CollectionDetailsFragment {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  isPublished: boolean;
  name: string;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (CollectionDetailsFragment_metadata | null)[];
  /**
   * List of private metadata items.Requires proper staff permissions to access.
   */
  privateMetadata: (CollectionDetailsFragment_privateMetadata | null)[];
  backgroundImage: CollectionDetailsFragment_backgroundImage | null;
  slug: string;
  descriptionJson: any;
  publicationDate: any | null;
  seoDescription: string | null;
  seoTitle: string | null;
}
