/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GaduurInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: GaduurUpdate
// ====================================================

export interface GaduurUpdate_gaduurUpdate_errors {
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

export interface GaduurUpdate_gaduurUpdate_gaduurPackage {
  __typename: "Gaduur";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  shippingType: string | null;
  isPublished: boolean;
  publicationDate: any | null;
}

export interface GaduurUpdate_gaduurUpdate {
  __typename: "GaduurUpdate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: GaduurUpdate_gaduurUpdate_errors[];
  gaduurPackage: GaduurUpdate_gaduurUpdate_gaduurPackage | null;
}

export interface GaduurUpdate {
  /**
   * Updates an existing Gaduur.
   */
  gaduurUpdate: GaduurUpdate_gaduurUpdate | null;
}

export interface GaduurUpdateVariables {
  id: string;
  input: GaduurInput;
}
