/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchAvailableAttributes
// ====================================================

export interface SearchAvailableAttributes_productType_availableAttributes_edges_node {
  __typename: "Attribute";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of an attribute name.
   */
  slug: string | null;
}

export interface SearchAvailableAttributes_productType_availableAttributes_edges {
  __typename: "AttributeCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: SearchAvailableAttributes_productType_availableAttributes_edges_node;
}

export interface SearchAvailableAttributes_productType_availableAttributes_pageInfo {
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

export interface SearchAvailableAttributes_productType_availableAttributes {
  __typename: "AttributeCountableConnection";
  edges: SearchAvailableAttributes_productType_availableAttributes_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: SearchAvailableAttributes_productType_availableAttributes_pageInfo;
}

export interface SearchAvailableAttributes_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  availableAttributes: SearchAvailableAttributes_productType_availableAttributes | null;
}

export interface SearchAvailableAttributes {
  /**
   * Look up a product type by ID.
   */
  productType: SearchAvailableAttributes_productType | null;
}

export interface SearchAvailableAttributesVariables {
  id: string;
  after?: string | null;
  first: number;
  query: string;
}
