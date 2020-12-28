/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PackageFilterInput, PackageSortingInput, PackageNetOrGross, GaduurPackageUstatus } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: PackageList
// ====================================================

export interface PackageList_packages_edges_node_gaduur {
  __typename: "Gaduur";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  shippingType: string | null;
  isPublished: boolean;
  publicationDate: any | null;
  ustatus: GaduurPackageUstatus;
  startDate: any | null;
  endDate: any | null;
  receivedDate: any | null;
  trackingNumber: string | null;
}

export interface PackageList_packages_edges_node_shippingAddress_country {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface PackageList_packages_edges_node_shippingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  /**
   * Shop's default country.
   */
  country: PackageList_packages_edges_node_shippingAddress_country;
  countryArea: string;
  firstName: string;
  /**
   * The ID of the object.
   */
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface PackageList_packages_edges_node_senderAddress_country {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface PackageList_packages_edges_node_senderAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  /**
   * Shop's default country.
   */
  country: PackageList_packages_edges_node_senderAddress_country;
  countryArea: string;
  firstName: string;
  /**
   * The ID of the object.
   */
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface PackageList_packages_edges_node_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface PackageList_packages_edges_node {
  __typename: "Package";
  /**
   * The ID of the object.
   */
  id: string;
  name: string | null;
  width: number | null;
  length: number | null;
  height: number | null;
  netWeight: number | null;
  grossWeight: number | null;
  upostPK: string | null;
  netOrGross: PackageNetOrGross;
  perkgAmount: number;
  gaduur: PackageList_packages_edges_node_gaduur | null;
  shippingAddress: PackageList_packages_edges_node_shippingAddress | null;
  senderAddress: PackageList_packages_edges_node_senderAddress | null;
  user: PackageList_packages_edges_node_user | null;
}

export interface PackageList_packages_edges {
  __typename: "PackageCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: PackageList_packages_edges_node;
}

export interface PackageList_packages_pageInfo {
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

export interface PackageList_packages {
  __typename: "PackageCountableConnection";
  edges: PackageList_packages_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: PackageList_packages_pageInfo;
}

export interface PackageList {
  /**
   * List of the package
   */
  packages: PackageList_packages | null;
}

export interface PackageListVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
  filter?: PackageFilterInput | null;
  sort?: PackageSortingInput | null;
}
