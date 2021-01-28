/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UshopFilterInput, UshopSortingInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: UshopList
// ====================================================

export interface UshopList_ushops_edges_node_logoImage {
  __typename: "Image";
  /**
   * Alt text for an image.
   */
  alt: string | null;
  /**
   * The URL of the image.
   */
  url: string;
}

export interface UshopList_ushops_edges_node_shippingProduct {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface UshopList_ushops_edges_node {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  url: string;
  logoImage: UshopList_ushops_edges_node_logoImage | null;
  description: string;
  descriptionJson: any;
  isPublished: boolean;
  publicationDate: any | null;
  rank: number | null;
  ratingMain: number | null;
  ratingUkShipping: number | null;
  ratingProductQuality: number | null;
  ratingProductPrice: number | null;
  ratingShuurhai: number | null;
  ratingProductRank: number | null;
  listSelection: string | null;
  productSelection: string | null;
  shippingProduct: UshopList_ushops_edges_node_shippingProduct | null;
}

export interface UshopList_ushops_edges {
  __typename: "UshopCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: UshopList_ushops_edges_node;
}

export interface UshopList_ushops_pageInfo {
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

export interface UshopList_ushops {
  __typename: "UshopCountableConnection";
  edges: UshopList_ushops_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: UshopList_ushops_pageInfo;
}

export interface UshopList {
  /**
   * List of the ushop's.
   */
  ushops: UshopList_ushops | null;
}

export interface UshopListVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
  filter?: UshopFilterInput | null;
  sort?: UshopSortingInput | null;
}
