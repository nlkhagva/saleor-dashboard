/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UshopDetails
// ====================================================

export interface UshopDetails_ushop_logoImage {
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

export interface UshopDetails_ushop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  url: string;
  logoImage: UshopDetails_ushop_logoImage | null;
  description: string;
  descriptionJson: any;
  isPublished: boolean;
  publicationDate: any | null;
  rank: number | null;
  ratingMain: number | null;
  ratingUkShipping: number | null;
  ratingProductQuality: number | null;
  ratingProductPrice: number | null;
  ratingShuurhai: number | null;
  ratingProductRank: number | null;
  listSelection: string | null;
  productSelection: string | null;
}

export interface UshopDetails {
  /**
   * Lookup a page by ID.
   */
  ushop: UshopDetails_ushop | null;
}

export interface UshopDetailsVariables {
  id: string;
}
