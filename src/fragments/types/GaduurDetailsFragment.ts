/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GaduurPackageStatus, PackageNetOrGross } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: GaduurDetailsFragment
// ====================================================

export interface GaduurDetailsFragment_packages_edges_node_perkgPrice {
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

export interface GaduurDetailsFragment_packages_edges_node_shippingAddress {
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

export interface GaduurDetailsFragment_packages_edges_node_senderAddress {
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

export interface GaduurDetailsFragment_packages_edges_node {
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
  perkgPrice: GaduurDetailsFragment_packages_edges_node_perkgPrice | null;
  shippingAddress: GaduurDetailsFragment_packages_edges_node_shippingAddress | null;
  senderAddress: GaduurDetailsFragment_packages_edges_node_senderAddress | null;
}

export interface GaduurDetailsFragment_packages_edges {
  __typename: "PackageCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: GaduurDetailsFragment_packages_edges_node;
}

export interface GaduurDetailsFragment_packages {
  __typename: "PackageCountableConnection";
  edges: GaduurDetailsFragment_packages_edges[];
}

export interface GaduurDetailsFragment {
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
  packages: GaduurDetailsFragment_packages;
}
