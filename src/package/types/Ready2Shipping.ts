/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FulfillmentStatus, FulfillmentUstatus, FulfillmentLineUstatus } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: Ready2Shipping
// ====================================================

export interface Ready2Shipping_ready2shipping_order_shippingAddress_country {
  __typename: "CountryDisplay";
  /**
   * Country name.
   */
  country: string;
  /**
   * Country code.
   */
  code: string;
}

export interface Ready2Shipping_ready2shipping_order_shippingAddress {
  __typename: "Address";
  /**
   * The ID of the object.
   */
  id: string;
  lastName: string;
  firstName: string;
  companyName: string;
  phone: string | null;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  cityArea: string;
  countryArea: string;
  /**
   * Shop's default country.
   */
  country: Ready2Shipping_ready2shipping_order_shippingAddress_country;
  postalCode: string;
}

export interface Ready2Shipping_ready2shipping_order {
  __typename: "Order";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * User-friendly number of an order.
   */
  number: string | null;
  shippingAddress: Ready2Shipping_ready2shipping_order_shippingAddress | null;
}

export interface Ready2Shipping_ready2shipping_lines_orderLine_thumbnail {
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

export interface Ready2Shipping_ready2shipping_lines_orderLine_variant_product_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface Ready2Shipping_ready2shipping_lines_orderLine_variant_product_ushop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface Ready2Shipping_ready2shipping_lines_orderLine_variant_product_metadata {
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

export interface Ready2Shipping_ready2shipping_lines_orderLine_variant_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  productType: Ready2Shipping_ready2shipping_lines_orderLine_variant_product_productType;
  ushop: Ready2Shipping_ready2shipping_lines_orderLine_variant_product_ushop | null;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (Ready2Shipping_ready2shipping_lines_orderLine_variant_product_metadata | null)[];
}

export interface Ready2Shipping_ready2shipping_lines_orderLine_variant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  product: Ready2Shipping_ready2shipping_lines_orderLine_variant_product;
}

export interface Ready2Shipping_ready2shipping_lines_orderLine_unitPrice_gross {
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

export interface Ready2Shipping_ready2shipping_lines_orderLine_unitPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: Ready2Shipping_ready2shipping_lines_orderLine_unitPrice_gross;
}

export interface Ready2Shipping_ready2shipping_lines_orderLine {
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
  thumbnail: Ready2Shipping_ready2shipping_lines_orderLine_thumbnail | null;
  /**
   * A purchased product variant. Note: this field may be null if the variant has been removed from stock at all.
   */
  variant: Ready2Shipping_ready2shipping_lines_orderLine_variant | null;
  /**
   * Price of the single item in the order line.
   */
  unitPrice: Ready2Shipping_ready2shipping_lines_orderLine_unitPrice | null;
}

export interface Ready2Shipping_ready2shipping_lines {
  __typename: "FulfillmentLine";
  /**
   * The ID of the object.
   */
  id: string;
  quantity: number;
  ustatus: FulfillmentLineUstatus;
  changedDate: any | null;
  soonDate: any | null;
  orderLine: Ready2Shipping_ready2shipping_lines_orderLine | null;
}

export interface Ready2Shipping_ready2shipping_others2shipping_order_shippingAddress {
  __typename: "Address";
  /**
   * The ID of the object.
   */
  id: string;
  lastName: string;
  firstName: string;
}

export interface Ready2Shipping_ready2shipping_others2shipping_order {
  __typename: "Order";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * User-friendly number of an order.
   */
  number: string | null;
  shippingAddress: Ready2Shipping_ready2shipping_others2shipping_order_shippingAddress | null;
}

export interface Ready2Shipping_ready2shipping_others2shipping_lines_orderLine_thumbnail {
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

export interface Ready2Shipping_ready2shipping_others2shipping_lines_orderLine_variant_product_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface Ready2Shipping_ready2shipping_others2shipping_lines_orderLine_variant_product_ushop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface Ready2Shipping_ready2shipping_others2shipping_lines_orderLine_variant_product_metadata {
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

export interface Ready2Shipping_ready2shipping_others2shipping_lines_orderLine_variant_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  productType: Ready2Shipping_ready2shipping_others2shipping_lines_orderLine_variant_product_productType;
  ushop: Ready2Shipping_ready2shipping_others2shipping_lines_orderLine_variant_product_ushop | null;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (Ready2Shipping_ready2shipping_others2shipping_lines_orderLine_variant_product_metadata | null)[];
}

export interface Ready2Shipping_ready2shipping_others2shipping_lines_orderLine_variant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  product: Ready2Shipping_ready2shipping_others2shipping_lines_orderLine_variant_product;
}

export interface Ready2Shipping_ready2shipping_others2shipping_lines_orderLine_unitPrice_gross {
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

export interface Ready2Shipping_ready2shipping_others2shipping_lines_orderLine_unitPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: Ready2Shipping_ready2shipping_others2shipping_lines_orderLine_unitPrice_gross;
}

export interface Ready2Shipping_ready2shipping_others2shipping_lines_orderLine {
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
  thumbnail: Ready2Shipping_ready2shipping_others2shipping_lines_orderLine_thumbnail | null;
  /**
   * A purchased product variant. Note: this field may be null if the variant has been removed from stock at all.
   */
  variant: Ready2Shipping_ready2shipping_others2shipping_lines_orderLine_variant | null;
  /**
   * Price of the single item in the order line.
   */
  unitPrice: Ready2Shipping_ready2shipping_others2shipping_lines_orderLine_unitPrice | null;
}

export interface Ready2Shipping_ready2shipping_others2shipping_lines {
  __typename: "FulfillmentLine";
  /**
   * The ID of the object.
   */
  id: string;
  quantity: number;
  ustatus: FulfillmentLineUstatus;
  changedDate: any | null;
  soonDate: any | null;
  orderLine: Ready2Shipping_ready2shipping_others2shipping_lines_orderLine | null;
}

export interface Ready2Shipping_ready2shipping_others2shipping {
  __typename: "Fulfillment";
  order: Ready2Shipping_ready2shipping_others2shipping_order;
  /**
   * The ID of the object.
   */
  id: string;
  trackingNumber: string;
  status: FulfillmentStatus;
  ustatus: FulfillmentUstatus;
  ukDate: any | null;
  /**
   * List of lines for the fulfillment.
   */
  lines: (Ready2Shipping_ready2shipping_others2shipping_lines | null)[] | null;
}

export interface Ready2Shipping_ready2shipping {
  __typename: "Fulfillment";
  order: Ready2Shipping_ready2shipping_order;
  /**
   * The ID of the object.
   */
  id: string;
  trackingNumber: string;
  status: FulfillmentStatus;
  ustatus: FulfillmentUstatus;
  ukDate: any | null;
  /**
   * List of lines for the fulfillment.
   */
  lines: (Ready2Shipping_ready2shipping_lines | null)[] | null;
  /**
   * list of other fullfilment
   */
  others2shipping: (Ready2Shipping_ready2shipping_others2shipping | null)[] | null;
}

export interface Ready2Shipping {
  /**
   * shipping ready
   */
  ready2shipping: Ready2Shipping_ready2shipping | null;
}

export interface Ready2ShippingVariables {
  ordernumber: string;
}
