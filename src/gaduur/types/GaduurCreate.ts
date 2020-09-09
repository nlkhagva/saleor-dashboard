/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GaduurInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: GaduurCreate
// ====================================================

export interface GaduurCreate_gaduurCreate_errors {
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

export interface GaduurCreate_gaduurCreate_gaduurPackage {
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

export interface GaduurCreate_gaduurCreate {
  __typename: "GaduurCreate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: GaduurCreate_gaduurCreate_errors[];
  gaduurPackage: GaduurCreate_gaduurCreate_gaduurPackage | null;
}

export interface GaduurCreate {
  /**
   * Creates a new Gaduur.
   */
  gaduurCreate: GaduurCreate_gaduurCreate | null;
}

export interface GaduurCreateVariables {
  input: GaduurInput;
}
