/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchCategories2
// ====================================================

export interface SearchCategories2_search_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface SearchCategories2_search_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: SearchCategories2_search_edges_node;
}

export interface SearchCategories2_search_pageInfo {
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

export interface SearchCategories2_search {
  __typename: "CategoryCountableConnection";
  edges: SearchCategories2_search_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: SearchCategories2_search_pageInfo;
}

export interface SearchCategories2 {
  /**
   * List of the shop's categories.
   */
  search: SearchCategories2_search | null;
}

export interface SearchCategories2Variables {
  after?: string | null;
  first: number;
  query: string;
}
