/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: RemoveCustomer
// ====================================================

export interface RemoveCustomer_customerDelete_errors {
  __typename: "AccountError";
  /**
   * The error code.
   */
  code: AccountErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
}

export interface RemoveCustomer_customerDelete {
  __typename: "CustomerDelete";
  errors: RemoveCustomer_customerDelete_errors[];
}

export interface RemoveCustomer {
  /**
   * Deletes a customer.
   */
  customerDelete: RemoveCustomer_customerDelete | null;
}

export interface RemoveCustomerVariables {
  id: string;
}
