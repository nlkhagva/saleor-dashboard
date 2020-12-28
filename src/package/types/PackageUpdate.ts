/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PackageInput, PackageNetOrGross, GaduurPackageUstatus } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: PackageUpdate
// ====================================================

export interface PackageUpdate_packageUpdate_errors {
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

export interface PackageUpdate_packageUpdate_package_gaduur {
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

export interface PackageUpdate_packageUpdate_package_shippingAddress_country {
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

export interface PackageUpdate_packageUpdate_package_shippingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  /**
   * Shop's default country.
   */
  country: PackageUpdate_packageUpdate_package_shippingAddress_country;
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

export interface PackageUpdate_packageUpdate_package_senderAddress_country {
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

export interface PackageUpdate_packageUpdate_package_senderAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  /**
   * Shop's default country.
   */
  country: PackageUpdate_packageUpdate_package_senderAddress_country;
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

export interface PackageUpdate_packageUpdate_package_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface PackageUpdate_packageUpdate_package {
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
  gaduur: PackageUpdate_packageUpdate_package_gaduur | null;
  shippingAddress: PackageUpdate_packageUpdate_package_shippingAddress | null;
  senderAddress: PackageUpdate_packageUpdate_package_senderAddress | null;
  user: PackageUpdate_packageUpdate_package_user | null;
}

export interface PackageUpdate_packageUpdate {
  __typename: "PackageUpdate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: PackageUpdate_packageUpdate_errors[];
  package: PackageUpdate_packageUpdate_package | null;
}

export interface PackageUpdate {
  /**
   * updates an existing package
   */
  packageUpdate: PackageUpdate_packageUpdate | null;
}

export interface PackageUpdateVariables {
  id: string;
  input: PackageInput;
}
