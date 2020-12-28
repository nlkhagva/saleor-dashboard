/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PackageNetOrGross, GaduurPackageUstatus } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: PackageDetailsFragment
// ====================================================

export interface PackageDetailsFragment_gaduur {
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

export interface PackageDetailsFragment_shippingAddress_country {
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

export interface PackageDetailsFragment_shippingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  /**
   * Shop's default country.
   */
  country: PackageDetailsFragment_shippingAddress_country;
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

export interface PackageDetailsFragment_senderAddress_country {
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

export interface PackageDetailsFragment_senderAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  /**
   * Shop's default country.
   */
  country: PackageDetailsFragment_senderAddress_country;
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

export interface PackageDetailsFragment_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface PackageDetailsFragment {
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
  gaduur: PackageDetailsFragment_gaduur | null;
  shippingAddress: PackageDetailsFragment_shippingAddress | null;
  senderAddress: PackageDetailsFragment_senderAddress | null;
  user: PackageDetailsFragment_user | null;
}
