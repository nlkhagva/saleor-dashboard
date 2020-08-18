/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GaduurDetails
// ====================================================

export interface GaduurDetails_gaduur {
  __typename: "Gaduur";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface GaduurDetails {
  /**
   * Lookup a page by ID.
   */
  gaduur: GaduurDetails_gaduur | null;
}

export interface GaduurDetailsVariables {
  id: string;
}
