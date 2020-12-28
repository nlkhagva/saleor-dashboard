/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GaduurInput, GaduurPackageUstatus, PackageNetOrGross } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: GaduurCreate
// ====================================================

export interface GaduurCreate_gaduurCreate_errors {
  __typename: "Error";
  /**
   * The error message.
   */
  message: string | null;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
}

export interface GaduurCreate_gaduurCreate_gaduurPackage_packages_edges_node_perkgPrice {
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

export interface GaduurCreate_gaduurCreate_gaduurPackage_packages_edges_node_user {
  __typename: "User";
  lastName: string;
  firstName: string;
  phone: string | null;
}

export interface GaduurCreate_gaduurCreate_gaduurPackage_packages_edges_node_shippingAddress {
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

export interface GaduurCreate_gaduurCreate_gaduurPackage_packages_edges_node_senderAddress {
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

export interface GaduurCreate_gaduurCreate_gaduurPackage_packages_edges_node {
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
  perkgPrice: GaduurCreate_gaduurCreate_gaduurPackage_packages_edges_node_perkgPrice | null;
  user: GaduurCreate_gaduurCreate_gaduurPackage_packages_edges_node_user | null;
  shippingAddress: GaduurCreate_gaduurCreate_gaduurPackage_packages_edges_node_shippingAddress | null;
  senderAddress: GaduurCreate_gaduurCreate_gaduurPackage_packages_edges_node_senderAddress | null;
}

export interface GaduurCreate_gaduurCreate_gaduurPackage_packages_edges {
  __typename: "PackageCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: GaduurCreate_gaduurCreate_gaduurPackage_packages_edges_node;
}

export interface GaduurCreate_gaduurCreate_gaduurPackage_packages {
  __typename: "PackageCountableConnection";
  edges: GaduurCreate_gaduurCreate_gaduurPackage_packages_edges[];
}

export interface GaduurCreate_gaduurCreate_gaduurPackage {
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
  packages: GaduurCreate_gaduurCreate_gaduurPackage_packages;
}

export interface GaduurCreate_gaduurCreate {
  __typename: "GaduurCreate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: GaduurCreate_gaduurCreate_errors[];
  gaduurPackage: GaduurCreate_gaduurCreate_gaduurPackage | null;
}

export interface GaduurCreate {
  /**
   * Creates a new Gaduur.
   */
  gaduurCreate: GaduurCreate_gaduurCreate | null;
}

export interface GaduurCreateVariables {
  input: GaduurInput;
}
