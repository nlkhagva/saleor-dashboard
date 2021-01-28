/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GaduurInput, GaduurPackageUstatus, PackageNetOrGross } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: GaduurUpdate
// ====================================================

export interface GaduurUpdate_gaduurUpdate_errors {
  __typename: "Error";
  /**
   * The error message.
   */
  message: string | null;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
}

export interface GaduurUpdate_gaduurUpdate_gaduurPackage_packages_edges_node_perkgPrice {
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

export interface GaduurUpdate_gaduurUpdate_gaduurPackage_packages_edges_node_user {
  __typename: "User";
  lastName: string;
  firstName: string;
  phone: string | null;
}

export interface GaduurUpdate_gaduurUpdate_gaduurPackage_packages_edges_node_shippingAddress {
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

export interface GaduurUpdate_gaduurUpdate_gaduurPackage_packages_edges_node_senderAddress {
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

export interface GaduurUpdate_gaduurUpdate_gaduurPackage_packages_edges_node {
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
  perkgPrice: GaduurUpdate_gaduurUpdate_gaduurPackage_packages_edges_node_perkgPrice | null;
  user: GaduurUpdate_gaduurUpdate_gaduurPackage_packages_edges_node_user | null;
  shippingAddress: GaduurUpdate_gaduurUpdate_gaduurPackage_packages_edges_node_shippingAddress | null;
  senderAddress: GaduurUpdate_gaduurUpdate_gaduurPackage_packages_edges_node_senderAddress | null;
}

export interface GaduurUpdate_gaduurUpdate_gaduurPackage_packages_edges {
  __typename: "PackageCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: GaduurUpdate_gaduurUpdate_gaduurPackage_packages_edges_node;
}

export interface GaduurUpdate_gaduurUpdate_gaduurPackage_packages {
  __typename: "PackageCountableConnection";
  edges: GaduurUpdate_gaduurUpdate_gaduurPackage_packages_edges[];
}

export interface GaduurUpdate_gaduurUpdate_gaduurPackage {
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
  packages: GaduurUpdate_gaduurUpdate_gaduurPackage_packages;
}

export interface GaduurUpdate_gaduurUpdate {
  __typename: "GaduurUpdate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: GaduurUpdate_gaduurUpdate_errors[];
  gaduurPackage: GaduurUpdate_gaduurUpdate_gaduurPackage | null;
}

export interface GaduurUpdate {
  /**
   * Updates an existing Gaduur.
   */
  gaduurUpdate: GaduurUpdate_gaduurUpdate | null;
}

export interface GaduurUpdateVariables {
  id: string;
  input: GaduurInput;
}
