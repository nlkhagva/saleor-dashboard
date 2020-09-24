/* tslint:disable */
/* eslint-disable */
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
  listSelection: string;
  productSelection: string;
}

export interface findUshopByLink {
  ushopByLink: findUshopByLink_ushopByLink | null;
}

export interface findUshopByLinkVariables {
  url: string;
}
