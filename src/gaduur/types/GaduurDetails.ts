/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GaduurPackageUstatus, PackageNetOrGross } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: GaduurDetails
// ====================================================

export interface GaduurDetails_gaduur_packages_edges_node_perkgPrice {
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

export interface GaduurDetails_gaduur_packages_edges_node_user {
  __typename: "User";
  lastName: string;
  firstName: string;
  phone: string | null;
}

export interface GaduurDetails_gaduur_packages_edges_node_shippingAddress {
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

export interface GaduurDetails_gaduur_packages_edges_node_senderAddress {
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

export interface GaduurDetails_gaduur_packages_edges_node {
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
  perkgPrice: GaduurDetails_gaduur_packages_edges_node_perkgPrice | null;
  user: GaduurDetails_gaduur_packages_edges_node_user | null;
  shippingAddress: GaduurDetails_gaduur_packages_edges_node_shippingAddress | null;
  senderAddress: GaduurDetails_gaduur_packages_edges_node_senderAddress | null;
}

export interface GaduurDetails_gaduur_packages_edges {
  __typename: "PackageCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: GaduurDetails_gaduur_packages_edges_node;
}

export interface GaduurDetails_gaduur_packages {
  __typename: "PackageCountableConnection";
  edges: GaduurDetails_gaduur_packages_edges[];
}

export interface GaduurDetails_gaduur {
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
  packages: GaduurDetails_gaduur_packages;
}

export interface GaduurDetails {
  /**
   * Lookup a page by ID.
   */
  gaduur: GaduurDetails_gaduur | null;
}

export interface GaduurDetailsVariables {
  id: string;
}
