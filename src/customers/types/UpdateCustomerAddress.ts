/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AddressInput, AccountErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateCustomerAddress
// ====================================================

export interface UpdateCustomerAddress_addressUpdate_errors {
  __typename: "AccountError";
  /**
   * The error code.
   */
  code: AccountErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
}

export interface UpdateCustomerAddress_addressUpdate_address_country {
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

export interface UpdateCustomerAddress_addressUpdate_address {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  /**
   * Shop's default country.
   */
  country: UpdateCustomerAddress_addressUpdate_address_country;
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

export interface UpdateCustomerAddress_addressUpdate {
  __typename: "AddressUpdate";
  errors: UpdateCustomerAddress_addressUpdate_errors[];
  address: UpdateCustomerAddress_addressUpdate_address | null;
}

export interface UpdateCustomerAddress {
  /**
   * Updates an address.
   */
  addressUpdate: UpdateCustomerAddress_addressUpdate | null;
}

export interface UpdateCustomerAddressVariables {
  id: string;
  input: AddressInput;
}
