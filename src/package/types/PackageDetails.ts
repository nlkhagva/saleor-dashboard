/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PackageNetOrGross, FulfillmentLineUshopStatus } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: PackageDetails
// ====================================================

export interface PackageDetails_package_gaduur {
  __typename: "Gaduur";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface PackageDetails_package_shippingAddress_country {
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

export interface PackageDetails_package_shippingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  /**
   * Shop's default country.
   */
  country: PackageDetails_package_shippingAddress_country;
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

export interface PackageDetails_package_senderAddress_country {
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

export interface PackageDetails_package_senderAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  /**
   * Shop's default country.
   */
  country: PackageDetails_package_senderAddress_country;
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

export interface PackageDetails_package_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface PackageDetails_package_lines_fulfillmentline_orderLine_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Alt text for an image.
   */
  alt: string | null;
}

export interface PackageDetails_package_lines_fulfillmentline_orderLine_variant_product_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface PackageDetails_package_lines_fulfillmentline_orderLine_variant_product_ushop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface PackageDetails_package_lines_fulfillmentline_orderLine_variant_product_metadata {
  __typename: "MetadataItem";
  /**
   * Key of a metadata item.
   */
  key: string;
  /**
   * Value of a metadata item.
   */
  value: string;
}

export interface PackageDetails_package_lines_fulfillmentline_orderLine_variant_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  productType: PackageDetails_package_lines_fulfillmentline_orderLine_variant_product_productType;
  ushop: PackageDetails_package_lines_fulfillmentline_orderLine_variant_product_ushop | null;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (PackageDetails_package_lines_fulfillmentline_orderLine_variant_product_metadata | null)[];
}

export interface PackageDetails_package_lines_fulfillmentline_orderLine_variant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  product: PackageDetails_package_lines_fulfillmentline_orderLine_variant_product;
}

export interface PackageDetails_package_lines_fulfillmentline_orderLine_unitPrice_gross {
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

export interface PackageDetails_package_lines_fulfillmentline_orderLine_unitPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: PackageDetails_package_lines_fulfillmentline_orderLine_unitPrice_gross;
}

export interface PackageDetails_package_lines_fulfillmentline_orderLine {
  __typename: "OrderLine";
  /**
   * The ID of the object.
   */
  id: string;
  productName: string;
  /**
   * orderid_integer
   */
  orderId: number | null;
  /**
   * The main thumbnail for the ordered product.
   */
  thumbnail: PackageDetails_package_lines_fulfillmentline_orderLine_thumbnail | null;
  /**
   * A purchased product variant. Note: this field may be null if the variant has been removed from stock at all.
   */
  variant: PackageDetails_package_lines_fulfillmentline_orderLine_variant | null;
  /**
   * Price of the single item in the order line.
   */
  unitPrice: PackageDetails_package_lines_fulfillmentline_orderLine_unitPrice | null;
}

export interface PackageDetails_package_lines_fulfillmentline {
  __typename: "FulfillmentLine";
  /**
   * The ID of the object.
   */
  id: string;
  quantity: number;
  ushopStatus: FulfillmentLineUshopStatus;
  changedDate: any | null;
  soonDate: any | null;
  orderLine: PackageDetails_package_lines_fulfillmentline_orderLine | null;
}

export interface PackageDetails_package_lines {
  __typename: "PackageLine";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  quantity: number;
  unitPriceAmount: number;
  currency: string;
  fulfillmentline: PackageDetails_package_lines_fulfillmentline | null;
}

export interface PackageDetails_package {
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
  gaduur: PackageDetails_package_gaduur | null;
  shippingAddress: PackageDetails_package_shippingAddress | null;
  senderAddress: PackageDetails_package_senderAddress | null;
  user: PackageDetails_package_user | null;
  /**
   * List of lines for the fulfillment.
   */
  lines: (PackageDetails_package_lines | null)[] | null;
}

export interface PackageDetails {
  /**
   * Look up a page by ID
   */
  package: PackageDetails_package | null;
}

export interface PackageDetailsVariables {
  id: string;
}
