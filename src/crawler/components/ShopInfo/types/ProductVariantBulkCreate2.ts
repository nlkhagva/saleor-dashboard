/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductVariantBulkCreateInput, ProductErrorCode } from "./../../../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: ProductVariantBulkCreate2
// ====================================================

export interface ProductVariantBulkCreate2_productVariantBulkCreate_bulkProductErrors {
  __typename: "BulkProductError";
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
  /**
   * The error code.
   */
  code: ProductErrorCode;
  /**
   * Index of an input list item that caused the error.
   */
  index: number | null;
}

export interface ProductVariantBulkCreate2_productVariantBulkCreate_errors {
  __typename: "Error";
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface ProductVariantBulkCreate2_productVariantBulkCreate {
  __typename: "ProductVariantBulkCreate";
  bulkProductErrors: ProductVariantBulkCreate2_productVariantBulkCreate_bulkProductErrors[];
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: ProductVariantBulkCreate2_productVariantBulkCreate_errors[];
}

export interface ProductVariantBulkCreate2 {
  /**
   * Creates product variants for a given product.
   */
  productVariantBulkCreate: ProductVariantBulkCreate2_productVariantBulkCreate | null;
}

export interface ProductVariantBulkCreate2Variables {
  id: string;
  inputs: (ProductVariantBulkCreateInput | null)[];
}
