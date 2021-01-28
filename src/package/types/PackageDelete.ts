/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PackageDelete
// ====================================================

export interface PackageDelete_packageDelete_errors {
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

export interface PackageDelete_packageDelete {
  __typename: "PackageDelete";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: PackageDelete_packageDelete_errors[];
}

export interface PackageDelete {
  /**
   * delete package
   */
  packageDelete: PackageDelete_packageDelete | null;
}

export interface PackageDeleteVariables {
  id: string;
}
