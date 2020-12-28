/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PackageInput, PackageNetOrGross, GaduurPackageUstatus } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: PackageCreate
// ====================================================

export interface PackageCreate_packageCreate_errors {
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

export interface PackageCreate_packageCreate_package_gaduur {
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

export interface PackageCreate_packageCreate_package_shippingAddress_country {
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

export interface PackageCreate_packageCreate_package_shippingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  /**
   * Shop's default country.
   */
  country: PackageCreate_packageCreate_package_shippingAddress_country;
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

export interface PackageCreate_packageCreate_package_senderAddress_country {
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

export interface PackageCreate_packageCreate_package_senderAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  /**
   * Shop's default country.
   */
  country: PackageCreate_packageCreate_package_senderAddress_country;
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

export interface PackageCreate_packageCreate_package_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface PackageCreate_packageCreate_package {
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
  gaduur: PackageCreate_packageCreate_package_gaduur | null;
  shippingAddress: PackageCreate_packageCreate_package_shippingAddress | null;
  senderAddress: PackageCreate_packageCreate_package_senderAddress | null;
  user: PackageCreate_packageCreate_package_user | null;
}

export interface PackageCreate_packageCreate {
  __typename: "PackageCreate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: PackageCreate_packageCreate_errors[];
  package: PackageCreate_packageCreate_package | null;
}

export interface PackageCreate {
  /**
   * Create a new package
   */
  packageCreate: PackageCreate_packageCreate | null;
}

export interface PackageCreateVariables {
  input: PackageInput;
}
