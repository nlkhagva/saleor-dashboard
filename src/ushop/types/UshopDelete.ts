/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UshopDelete
// ====================================================

export interface UshopDelete_ushopDelete_errors {
  __typename: "Error";
  /**
   * The error message.
   */
  message: string | null;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
}

export interface UshopDelete_ushopDelete {
  __typename: "UshopDelete";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: UshopDelete_ushopDelete_errors[];
}

export interface UshopDelete {
  /**
   * Deletes a Ushop.
   */
  ushopDelete: UshopDelete_ushopDelete | null;
}

export interface UshopDeleteVariables {
  id: string;
}
