/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GaduurFilterInput, GaduurSortingInput, GaduurPackageUstatus } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: GaduurList
// ====================================================

export interface GaduurList_gaduurs_edges_node {
  __typename: "Gaduur";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  ustatus: GaduurPackageUstatus;
  startDate: any | null;
  endDate: any | null;
  receivedDate: any | null;
  trackingNumber: string | null;
}

export interface GaduurList_gaduurs_edges {
  __typename: "GaduurCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: GaduurList_gaduurs_edges_node;
}

export interface GaduurList_gaduurs_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
}

export interface GaduurList_gaduurs {
  __typename: "GaduurCountableConnection";
  edges: GaduurList_gaduurs_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: GaduurList_gaduurs_pageInfo;
}

export interface GaduurList {
  /**
   * List of the gaduur's.
   */
  gaduurs: GaduurList_gaduurs | null;
}

export interface GaduurListVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
  filter?: GaduurFilterInput | null;
  sort?: GaduurSortingInput | null;
}
