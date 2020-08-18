/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DiscountErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: VoucherDelete
// ====================================================

export interface VoucherDelete_voucherDelete_errors {
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

export interface VoucherDelete_voucherDelete {
  __typename: "VoucherDelete";
  errors: VoucherDelete_voucherDelete_errors[];
}

export interface VoucherDelete {
  /**
   * Deletes a voucher.
   */
  voucherDelete: VoucherDelete_voucherDelete | null;
}

export interface VoucherDeleteVariables {
  id: string;
}
