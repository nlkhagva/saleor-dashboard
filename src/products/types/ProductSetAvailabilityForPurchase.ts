/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: ProductSetAvailabilityForPurchase
// ====================================================

export interface ProductSetAvailabilityForPurchase_productSetAvailabilityForPurchase_product {
  __typename: "Product";
  id: string;
  availableForPurchase: any | null;
  isAvailableForPurchase: boolean | null;
}

export interface ProductSetAvailabilityForPurchase_productSetAvailabilityForPurchase_errors {
  __typename: "ProductError";
  /**
   * The error code.
   */
  code: ProductErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface ProductSetAvailabilityForPurchase_productSetAvailabilityForPurchase {
  __typename: "ProductSetAvailabilityForPurchase";
  product: ProductSetAvailabilityForPurchase_productSetAvailabilityForPurchase_product | null;
  errors: ProductSetAvailabilityForPurchase_productSetAvailabilityForPurchase_errors[];
}

export interface ProductSetAvailabilityForPurchase {
  /**
   * Set product availability for purchase date.
   */
  productSetAvailabilityForPurchase: ProductSetAvailabilityForPurchase_productSetAvailabilityForPurchase | null;
}

export interface ProductSetAvailabilityForPurchaseVariables {
  isAvailable: boolean;
  productId: string;
  startDate?: any | null;
}
