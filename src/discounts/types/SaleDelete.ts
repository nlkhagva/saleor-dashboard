/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DiscountErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: SaleDelete
// ====================================================

export interface SaleDelete_saleDelete_errors {
  __typename: "DiscountError";
  /**
   * The error code.
   */
  code: DiscountErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
}

export interface SaleDelete_saleDelete {
  __typename: "SaleDelete";
  errors: SaleDelete_saleDelete_errors[];
}

export interface SaleDelete {
  /**
   * Deletes a sale.
   */
  saleDelete: SaleDelete_saleDelete | null;
}

export interface SaleDeleteVariables {
  id: string;
}
