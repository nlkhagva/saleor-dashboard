/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchGaduurs
// ====================================================

export interface SearchGaduurs_search_edges_node {
  __typename: "Gaduur";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  shippingType: string | null;
}

export interface SearchGaduurs_search_edges {
  __typename: "GaduurCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: SearchGaduurs_search_edges_node;
}

export interface SearchGaduurs_search_pageInfo {
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

export interface SearchGaduurs_search {
  __typename: "GaduurCountableConnection";
  edges: SearchGaduurs_search_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: SearchGaduurs_search_pageInfo;
}

export interface SearchGaduurs {
  /**
   * List of the gaduur's.
   */
  search: SearchGaduurs_search | null;
}

export interface SearchGaduursVariables {
  after?: string | null;
  first: number;
  query: string;
}
