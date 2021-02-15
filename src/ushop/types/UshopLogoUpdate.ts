/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UshopInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: UshopLogoUpdate
// ====================================================

export interface UshopLogoUpdate_ushopUpdate_errors {
  __typename: "Error";
  /**
   * The error message.
   */
  message: string | null;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
}

export interface UshopLogoUpdate_ushopUpdate_shop_logoImage {
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

export interface UshopLogoUpdate_ushopUpdate_shop_shippingProduct {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface UshopLogoUpdate_ushopUpdate_shop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  url: string;
  logoImage: UshopLogoUpdate_ushopUpdate_shop_logoImage | null;
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
  shippingProduct: UshopLogoUpdate_ushopUpdate_shop_shippingProduct | null;
}

export interface UshopLogoUpdate_ushopUpdate {
  __typename: "UshopUpdate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: UshopLogoUpdate_ushopUpdate_errors[];
  shop: UshopLogoUpdate_ushopUpdate_shop | null;
}

export interface UshopLogoUpdate {
  /**
   * Updates an existing Ushop.
   */
  ushopUpdate: UshopLogoUpdate_ushopUpdate | null;
}

export interface UshopLogoUpdateVariables {
  id: string;
  input: UshopInput;
}
