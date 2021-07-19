/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchUshops
// ====================================================

export interface SearchUshops_search_edges_node {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface SearchUshops_search_edges {
  __typename: "UshopCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: SearchUshops_search_edges_node;
}

export interface SearchUshops_search_pageInfo {
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

export interface SearchUshops_search {
  __typename: "UshopCountableConnection";
  edges: SearchUshops_search_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: SearchUshops_search_pageInfo;
}

export interface SearchUshops {
  /**
   * List of the ushop's.
   */
  search: SearchUshops_search | null;
}

export interface SearchUshopsVariables {
  after?: string | null;
  first: number;
  query: string;
}
