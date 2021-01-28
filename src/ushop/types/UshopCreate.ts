/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UshopInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: UshopCreate
// ====================================================

export interface UshopCreate_ushopCreate_errors {
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

export interface UshopCreate_ushopCreate_shop_logoImage {
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

export interface UshopCreate_ushopCreate_shop_shippingProduct {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface UshopCreate_ushopCreate_shop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  url: string;
  logoImage: UshopCreate_ushopCreate_shop_logoImage | null;
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
  shippingProduct: UshopCreate_ushopCreate_shop_shippingProduct | null;
}

export interface UshopCreate_ushopCreate {
  __typename: "UshopCreate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: UshopCreate_ushopCreate_errors[];
  shop: UshopCreate_ushopCreate_shop | null;
}

export interface UshopCreate {
  /**
   * Creates a new Ushop.
   */
  ushopCreate: UshopCreate_ushopCreate | null;
}

export interface UshopCreateVariables {
  input: UshopInput;
}
