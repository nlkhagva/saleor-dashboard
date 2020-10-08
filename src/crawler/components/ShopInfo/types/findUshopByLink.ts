/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: findUshopByLink
// ====================================================

export interface findUshopByLink_ushopByLink {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  listSelection: string | null;
  productSelection: string | null;
}

export interface findUshopByLink {
  ushopByLink: findUshopByLink_ushopByLink | null;
}

export interface findUshopByLinkVariables {
  url: string;
}
