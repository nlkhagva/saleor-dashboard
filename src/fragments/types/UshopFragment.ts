/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UshopFragment
// ====================================================

export interface UshopFragment_logoImage {
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

export interface UshopFragment {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  url: string;
  logoImage: UshopFragment_logoImage | null;
}
