/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GaduurFilterInput, GaduurSortingInput, GaduurPackageStatus, PackageNetOrGross } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: GaduurList
// ====================================================

export interface GaduurList_gaduurs_edges_node_packages_edges_node_perkgPrice {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface GaduurList_gaduurs_edges_node_packages_edges_node_shippingAddress {
  __typename: "Address";
  /**
   * The ID of the object.
   */
  id: string;
  lastName: string;
  firstName: string;
  companyName: string;
  postalCode: string;
  phone: string | null;
}

export interface GaduurList_gaduurs_edges_node_packages_edges_node_senderAddress {
  __typename: "Address";
  /**
   * The ID of the object.
   */
  id: string;
  lastName: string;
  firstName: string;
  companyName: string;
  postalCode: string;
  city: string;
  phone: string | null;
}

export interface GaduurList_gaduurs_edges_node_packages_edges_node {
  __typename: "Package";
  /**
   * The ID of the object.
   */
  id: string;
  name: string | null;
  netOrGross: PackageNetOrGross;
  netWeight: number | null;
  grossWeight: number | null;
  created: any;
  perkgPrice: GaduurList_gaduurs_edges_node_packages_edges_node_perkgPrice | null;
  shippingAddress: GaduurList_gaduurs_edges_node_packages_edges_node_shippingAddress | null;
  senderAddress: GaduurList_gaduurs_edges_node_packages_edges_node_senderAddress | null;
}

export interface GaduurList_gaduurs_edges_node_packages_edges {
  __typename: "PackageCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: GaduurList_gaduurs_edges_node_packages_edges_node;
}

export interface GaduurList_gaduurs_edges_node_packages {
  __typename: "PackageCountableConnection";
  edges: GaduurList_gaduurs_edges_node_packages_edges[];
}

export interface GaduurList_gaduurs_edges_node {
  __typename: "Gaduur";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  shippingType: string | null;
  isPublished: boolean;
  publicationDate: any | null;
  status: GaduurPackageStatus;
  startDate: any | null;
  endDate: any | null;
  receivedDate: any | null;
  trackingNumber: string | null;
  packages: GaduurList_gaduurs_edges_node_packages;
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
