/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SaleInput, DiscountErrorCode, SaleType } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: SaleUpdate
// ====================================================

export interface SaleUpdate_saleUpdate_errors {
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

export interface SaleUpdate_saleUpdate_sale {
  __typename: "Sale";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  type: SaleType;
  startDate: any;
  endDate: any | null;
  value: number;
}

export interface SaleUpdate_saleUpdate {
  __typename: "SaleUpdate";
  errors: SaleUpdate_saleUpdate_errors[];
  sale: SaleUpdate_saleUpdate_sale | null;
}

export interface SaleUpdate {
  /**
   * Updates a sale.
   */
  saleUpdate: SaleUpdate_saleUpdate | null;
}

export interface SaleUpdateVariables {
  input: SaleInput;
  id: string;
}
