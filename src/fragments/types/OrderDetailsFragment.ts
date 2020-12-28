/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderEventsEmailsEnum, OrderEventsEnum, FulfillmentLineUstatus, FulfillmentStatus, PaymentChargeStatusEnum, OrderStatus, OrderAction, JobStatusEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: OrderDetailsFragment
// ====================================================

export interface OrderDetailsFragment_metadata {
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

export interface OrderDetailsFragment_privateMetadata {
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

export interface OrderDetailsFragment_billingAddress_country {
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

export interface OrderDetailsFragment_billingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  /**
   * Shop's default country.
   */
  country: OrderDetailsFragment_billingAddress_country;
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

export interface OrderDetailsFragment_events_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
}

export interface OrderDetailsFragment_events {
  __typename: "OrderEvent";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Amount of money.
   */
  amount: number | null;
  /**
   * Date when event happened at in ISO 8601 format.
   */
  date: any | null;
  /**
   * Email of the customer.
   */
  email: string | null;
  /**
   * Type of an email sent to the customer.
   */
  emailType: OrderEventsEmailsEnum | null;
  /**
   * Number of an invoice related to the order.
   */
  invoiceNumber: string | null;
  /**
   * Content of the event.
   */
  message: string | null;
  /**
   * Number of items.
   */
  quantity: number | null;
  /**
   * Order event type.
   */
  type: OrderEventsEnum | null;
  /**
   * User who performed the action.
   */
  user: OrderDetailsFragment_events_user | null;
}

export interface OrderDetailsFragment_fulfillments_lines_orderLine_variant_product_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface OrderDetailsFragment_fulfillments_lines_orderLine_variant_product_ushop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface OrderDetailsFragment_fulfillments_lines_orderLine_variant_product_metadata {
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

export interface OrderDetailsFragment_fulfillments_lines_orderLine_variant_product {
  __typename: "Product";
  /**
   * Whether the product is available for purchase.
   */
  isAvailableForPurchase: boolean | null;
  isPublished: boolean;
  /**
   * The ID of the object.
   */
  id: string;
  productType: OrderDetailsFragment_fulfillments_lines_orderLine_variant_product_productType;
  ushop: OrderDetailsFragment_fulfillments_lines_orderLine_variant_product_ushop | null;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (OrderDetailsFragment_fulfillments_lines_orderLine_variant_product_metadata | null)[];
}

export interface OrderDetailsFragment_fulfillments_lines_orderLine_variant {
  __typename: "ProductVariant";
  product: OrderDetailsFragment_fulfillments_lines_orderLine_variant_product;
  /**
   * Quantity of a product available for sale in one checkout.
   */
  quantityAvailable: number;
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface OrderDetailsFragment_fulfillments_lines_orderLine_unitPrice_gross {
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

export interface OrderDetailsFragment_fulfillments_lines_orderLine_unitPrice_net {
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

export interface OrderDetailsFragment_fulfillments_lines_orderLine_unitPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: OrderDetailsFragment_fulfillments_lines_orderLine_unitPrice_gross;
  /**
   * Amount of money without taxes.
   */
  net: OrderDetailsFragment_fulfillments_lines_orderLine_unitPrice_net;
}

export interface OrderDetailsFragment_fulfillments_lines_orderLine_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface OrderDetailsFragment_fulfillments_lines_orderLine {
  __typename: "OrderLine";
  /**
   * The ID of the object.
   */
  id: string;
  isShippingRequired: boolean;
  /**
   * A purchased product variant. Note: this field may be null if the variant has been removed from stock at all.
   */
  variant: OrderDetailsFragment_fulfillments_lines_orderLine_variant | null;
  productName: string;
  productSku: string;
  quantity: number;
  quantityFulfilled: number;
  /**
   * Price of the single item in the order line.
   */
  unitPrice: OrderDetailsFragment_fulfillments_lines_orderLine_unitPrice | null;
  /**
   * The main thumbnail for the ordered product.
   */
  thumbnail: OrderDetailsFragment_fulfillments_lines_orderLine_thumbnail | null;
}

export interface OrderDetailsFragment_fulfillments_lines {
  __typename: "FulfillmentLine";
  /**
   * The ID of the object.
   */
  id: string;
  quantity: number;
  orderLine: OrderDetailsFragment_fulfillments_lines_orderLine | null;
  changedDate: any | null;
  soonDate: any | null;
  ustatus: FulfillmentLineUstatus;
}

export interface OrderDetailsFragment_fulfillments_warehouse {
  __typename: "Warehouse";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface OrderDetailsFragment_fulfillments {
  __typename: "Fulfillment";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of lines for the fulfillment.
   */
  lines: (OrderDetailsFragment_fulfillments_lines | null)[] | null;
  fulfillmentOrder: number;
  status: FulfillmentStatus;
  trackingNumber: string;
  ukDate: any | null;
  /**
   * Warehouse from fulfillment was fulfilled.
   */
  warehouse: OrderDetailsFragment_fulfillments_warehouse | null;
}

export interface OrderDetailsFragment_lines_variant_product_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface OrderDetailsFragment_lines_variant_product_ushop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface OrderDetailsFragment_lines_variant_product_metadata {
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

export interface OrderDetailsFragment_lines_variant_product {
  __typename: "Product";
  /**
   * Whether the product is available for purchase.
   */
  isAvailableForPurchase: boolean | null;
  isPublished: boolean;
  /**
   * The ID of the object.
   */
  id: string;
  productType: OrderDetailsFragment_lines_variant_product_productType;
  ushop: OrderDetailsFragment_lines_variant_product_ushop | null;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (OrderDetailsFragment_lines_variant_product_metadata | null)[];
}

export interface OrderDetailsFragment_lines_variant {
  __typename: "ProductVariant";
  product: OrderDetailsFragment_lines_variant_product;
  /**
   * Quantity of a product available for sale in one checkout.
   */
  quantityAvailable: number;
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface OrderDetailsFragment_lines_unitPrice_gross {
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

export interface OrderDetailsFragment_lines_unitPrice_net {
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

export interface OrderDetailsFragment_lines_unitPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: OrderDetailsFragment_lines_unitPrice_gross;
  /**
   * Amount of money without taxes.
   */
  net: OrderDetailsFragment_lines_unitPrice_net;
}

export interface OrderDetailsFragment_lines_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface OrderDetailsFragment_lines {
  __typename: "OrderLine";
  /**
   * The ID of the object.
   */
  id: string;
  isShippingRequired: boolean;
  /**
   * A purchased product variant. Note: this field may be null if the variant has been removed from stock at all.
   */
  variant: OrderDetailsFragment_lines_variant | null;
  productName: string;
  productSku: string;
  quantity: number;
  quantityFulfilled: number;
  /**
   * Price of the single item in the order line.
   */
  unitPrice: OrderDetailsFragment_lines_unitPrice | null;
  /**
   * The main thumbnail for the ordered product.
   */
  thumbnail: OrderDetailsFragment_lines_thumbnail | null;
}

export interface OrderDetailsFragment_shippingAddress_country {
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

export interface OrderDetailsFragment_shippingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  /**
   * Shop's default country.
   */
  country: OrderDetailsFragment_shippingAddress_country;
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

export interface OrderDetailsFragment_shippingMethod {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface OrderDetailsFragment_shippingPrice_gross {
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

export interface OrderDetailsFragment_shippingPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: OrderDetailsFragment_shippingPrice_gross;
}

export interface OrderDetailsFragment_subtotal_gross {
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

export interface OrderDetailsFragment_subtotal {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: OrderDetailsFragment_subtotal_gross;
}

export interface OrderDetailsFragment_total_gross {
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

export interface OrderDetailsFragment_total_tax {
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

export interface OrderDetailsFragment_total {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: OrderDetailsFragment_total_gross;
  /**
   * Amount of taxes.
   */
  tax: OrderDetailsFragment_total_tax;
}

export interface OrderDetailsFragment_totalAuthorized {
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

export interface OrderDetailsFragment_totalCaptured {
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

export interface OrderDetailsFragment_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
}

export interface OrderDetailsFragment_availableShippingMethods_price {
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

export interface OrderDetailsFragment_availableShippingMethods {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  price: OrderDetailsFragment_availableShippingMethods_price | null;
}

export interface OrderDetailsFragment_discount {
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

export interface OrderDetailsFragment_invoices {
  __typename: "Invoice";
  /**
   * The ID of the object.
   */
  id: string;
  number: string | null;
  /**
   * Created date time of job in ISO 8601 format.
   */
  createdAt: any;
  /**
   * URL to download an invoice.
   */
  url: string | null;
  /**
   * Job status.
   */
  status: JobStatusEnum;
}

export interface OrderDetailsFragment {
  __typename: "Order";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (OrderDetailsFragment_metadata | null)[];
  /**
   * List of private metadata items.Requires proper staff permissions to access.
   */
  privateMetadata: (OrderDetailsFragment_privateMetadata | null)[];
  billingAddress: OrderDetailsFragment_billingAddress | null;
  /**
   * Informs whether a draft order can be finalized(turned into a regular order).
   */
  canFinalize: boolean;
  created: any;
  customerNote: string;
  /**
   * List of events associated with the order.
   */
  events: (OrderDetailsFragment_events | null)[] | null;
  /**
   * List of shipments for the order.
   */
  fulfillments: (OrderDetailsFragment_fulfillments | null)[];
  /**
   * List of order lines.
   */
  lines: (OrderDetailsFragment_lines | null)[];
  /**
   * User-friendly number of an order.
   */
  number: string | null;
  /**
   * Internal payment status.
   */
  paymentStatus: PaymentChargeStatusEnum | null;
  shippingAddress: OrderDetailsFragment_shippingAddress | null;
  shippingMethod: OrderDetailsFragment_shippingMethod | null;
  shippingMethodName: string | null;
  /**
   * Total price of shipping.
   */
  shippingPrice: OrderDetailsFragment_shippingPrice | null;
  status: OrderStatus;
  /**
   * The sum of line prices not including shipping.
   */
  subtotal: OrderDetailsFragment_subtotal | null;
  /**
   * Total amount of the order.
   */
  total: OrderDetailsFragment_total | null;
  /**
   * List of actions that can be performed in the current state of an order.
   */
  actions: (OrderAction | null)[];
  /**
   * Amount authorized for the order.
   */
  totalAuthorized: OrderDetailsFragment_totalAuthorized | null;
  /**
   * Amount captured by payment.
   */
  totalCaptured: OrderDetailsFragment_totalCaptured | null;
  user: OrderDetailsFragment_user | null;
  /**
   * Email address of the customer.
   */
  userEmail: string | null;
  /**
   * Shipping methods that can be used with this order.
   */
  availableShippingMethods: (OrderDetailsFragment_availableShippingMethods | null)[] | null;
  discount: OrderDetailsFragment_discount | null;
  /**
   * List of order invoices.
   */
  invoices: (OrderDetailsFragment_invoices | null)[] | null;
}
