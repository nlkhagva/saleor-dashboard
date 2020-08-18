/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { VoucherInput, DiscountErrorCode, DiscountValueTypeEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: VoucherUpdate
// ====================================================

export interface VoucherUpdate_voucherUpdate_errors {
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

export interface VoucherUpdate_voucherUpdate_voucher_countries {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface VoucherUpdate_voucherUpdate_voucher_minSpent {
  __typename: "Money";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money.
   */
  amount: number;
}

export interface VoucherUpdate_voucherUpdate_voucher {
  __typename: "Voucher";
  /**
   * The ID of the object.
   */
  id: string;
  code: string;
  startDate: any;
  endDate: any | null;
  usageLimit: number | null;
  /**
   * Determines a type of discount for voucher - value or percentage
   */
  discountValueType: DiscountValueTypeEnum;
  discountValue: number;
  /**
   * List of countries available for the shipping voucher.
   */
  countries: (VoucherUpdate_voucherUpdate_voucher_countries | null)[] | null;
  minSpent: VoucherUpdate_voucherUpdate_voucher_minSpent | null;
  minCheckoutItemsQuantity: number | null;
}

export interface VoucherUpdate_voucherUpdate {
  __typename: "VoucherUpdate";
  errors: VoucherUpdate_voucherUpdate_errors[];
  voucher: VoucherUpdate_voucherUpdate_voucher | null;
}

export interface VoucherUpdate {
  /**
   * Updates a voucher.
   */
  voucherUpdate: VoucherUpdate_voucherUpdate | null;
}

export interface VoucherUpdateVariables {
  input: VoucherInput;
  id: string;
}
