/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CategoryDetailsFragment
// ====================================================

export interface CategoryDetailsFragment_metadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface CategoryDetailsFragment_privateMetadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface CategoryDetailsFragment_backgroundImage {
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

export interface CategoryDetailsFragment_parent {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface CategoryDetailsFragment {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  metadata: (CategoryDetailsFragment_metadata | null)[];
  privateMetadata: (CategoryDetailsFragment_privateMetadata | null)[];
  backgroundImage: CategoryDetailsFragment_backgroundImage | null;
  name: string;
  descriptionJson: any;
  seoDescription: string | null;
  seoTitle: string | null;
  parent: CategoryDetailsFragment_parent | null;
}
