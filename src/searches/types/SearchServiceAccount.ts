/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchServiceAccount
// ====================================================

export interface SearchServiceAccount_search_edges_node {
  __typename: "ServiceAccount";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of the service account.
   */
  name: string | null;
}

export interface SearchServiceAccount_search_edges {
  __typename: "ServiceAccountCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: SearchServiceAccount_search_edges_node;
}

export interface SearchServiceAccount_search_pageInfo {
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

export interface SearchServiceAccount_search {
  __typename: "ServiceAccountCountableConnection";
  edges: SearchServiceAccount_search_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: SearchServiceAccount_search_pageInfo;
}

export interface SearchServiceAccount {
  /**
   * List of the service accounts.
   */
  search: SearchServiceAccount_search | null;
}

export interface SearchServiceAccountVariables {
  after?: string | null;
  first: number;
  query: string;
}
