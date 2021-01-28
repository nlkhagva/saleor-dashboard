/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UshopDetailsFragment
// ====================================================

export interface UshopDetailsFragment_logoImage {
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

export interface UshopDetailsFragment_shippingProduct {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface UshopDetailsFragment {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  url: string;
  logoImage: UshopDetailsFragment_logoImage | null;
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
  shippingProduct: UshopDetailsFragment_shippingProduct | null;
}
