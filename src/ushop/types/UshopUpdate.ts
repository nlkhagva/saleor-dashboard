/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UshopInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: UshopUpdate
// ====================================================

export interface UshopUpdate_ushopUpdate_errors {
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

export interface UshopUpdate_ushopUpdate_shop_logoImage {
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

export interface UshopUpdate_ushopUpdate_shop_shippingProduct {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface UshopUpdate_ushopUpdate_shop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  url: string;
  logoImage: UshopUpdate_ushopUpdate_shop_logoImage | null;
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
  shippingProduct: UshopUpdate_ushopUpdate_shop_shippingProduct | null;
}

export interface UshopUpdate_ushopUpdate {
  __typename: "UshopUpdate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: UshopUpdate_ushopUpdate_errors[];
  shop: UshopUpdate_ushopUpdate_shop | null;
}

export interface UshopUpdate {
  /**
   * Updates an existing Ushop.
   */
  ushopUpdate: UshopUpdate_ushopUpdate | null;
}

export interface UshopUpdateVariables {
  id: string;
  input: UshopInput;
}
