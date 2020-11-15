/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FulfillmentLineUshopStatus, FulfillmentStatus } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: FulfillmentFragment
// ====================================================

export interface FulfillmentFragment_lines_orderLine_variant_product_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface FulfillmentFragment_lines_orderLine_variant_product_ushop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface FulfillmentFragment_lines_orderLine_variant_product_metadata {
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

export interface FulfillmentFragment_lines_orderLine_variant_product {
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
  productType: FulfillmentFragment_lines_orderLine_variant_product_productType;
  ushop: FulfillmentFragment_lines_orderLine_variant_product_ushop | null;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (FulfillmentFragment_lines_orderLine_variant_product_metadata | null)[];
}

export interface FulfillmentFragment_lines_orderLine_variant {
  __typename: "ProductVariant";
  product: FulfillmentFragment_lines_orderLine_variant_product;
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

export interface FulfillmentFragment_lines_orderLine_unitPrice_gross {
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

export interface FulfillmentFragment_lines_orderLine_unitPrice_net {
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

export interface FulfillmentFragment_lines_orderLine_unitPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: FulfillmentFragment_lines_orderLine_unitPrice_gross;
  /**
   * Amount of money without taxes.
   */
  net: FulfillmentFragment_lines_orderLine_unitPrice_net;
}

export interface FulfillmentFragment_lines_orderLine_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface FulfillmentFragment_lines_orderLine {
  __typename: "OrderLine";
  /**
   * The ID of the object.
   */
  id: string;
  isShippingRequired: boolean;
  /**
   * A purchased product variant. Note: this field may be null if the variant has been removed from stock at all.
   */
  variant: FulfillmentFragment_lines_orderLine_variant | null;
  productName: string;
  productSku: string;
  quantity: number;
  quantityFulfilled: number;
  /**
   * Price of the single item in the order line.
   */
  unitPrice: FulfillmentFragment_lines_orderLine_unitPrice | null;
  /**
   * The main thumbnail for the ordered product.
   */
  thumbnail: FulfillmentFragment_lines_orderLine_thumbnail | null;
}

export interface FulfillmentFragment_lines {
  __typename: "FulfillmentLine";
  /**
   * The ID of the object.
   */
  id: string;
  quantity: number;
  orderLine: FulfillmentFragment_lines_orderLine | null;
  changedDate: any | null;
  soonDate: any | null;
  ushopStatus: FulfillmentLineUshopStatus;
}

export interface FulfillmentFragment_warehouse {
  __typename: "Warehouse";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface FulfillmentFragment {
  __typename: "Fulfillment";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of lines for the fulfillment.
   */
  lines: (FulfillmentFragment_lines | null)[] | null;
  fulfillmentOrder: number;
  status: FulfillmentStatus;
  trackingNumber: string;
  ukDate: any | null;
  /**
   * Warehouse from fulfillment was fulfilled.
   */
  warehouse: FulfillmentFragment_warehouse | null;
}
