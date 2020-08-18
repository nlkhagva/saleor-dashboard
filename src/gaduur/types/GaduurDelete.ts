/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GaduurDelete
// ====================================================

export interface GaduurDelete_gaduurDelete_errors {
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

export interface GaduurDelete_gaduurDelete {
  __typename: "GaduurDelete";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: GaduurDelete_gaduurDelete_errors[];
}

export interface GaduurDelete {
  /**
   * Deletes a Gaduur.
   */
  gaduurDelete: GaduurDelete_gaduurDelete | null;
}

export interface GaduurDeleteVariables {
  id: string;
}
