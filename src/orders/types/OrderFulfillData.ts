/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OrderFulfillData
// ====================================================

export interface OrderFulfillData_order_lines_allocations_warehouse {
  __typename: "Warehouse";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface OrderFulfillData_order_lines_allocations {
  __typename: "Allocation";
  /**
   * The warehouse were items were allocated.
   */
  warehouse: OrderFulfillData_order_lines_allocations_warehouse;
  /**
   * Quantity allocated for orders.
   */
  quantity: number;
}

export interface OrderFulfillData_order_lines_variant_product_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface OrderFulfillData_order_lines_variant_product_ushop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface OrderFulfillData_order_lines_variant_product_metadata {
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

export interface OrderFulfillData_order_lines_variant_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  productType: OrderFulfillData_order_lines_variant_product_productType;
  ushop: OrderFulfillData_order_lines_variant_product_ushop | null;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (OrderFulfillData_order_lines_variant_product_metadata | null)[];
}

export interface OrderFulfillData_order_lines_variant_attributes_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
}

export interface OrderFulfillData_order_lines_variant_attributes {
  __typename: "SelectedAttribute";
  /**
   * Values of an attribute.
   */
  values: (OrderFulfillData_order_lines_variant_attributes_values | null)[];
}

export interface OrderFulfillData_order_lines_variant_stocks_warehouse {
  __typename: "Warehouse";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface OrderFulfillData_order_lines_variant_stocks {
  __typename: "Stock";
  /**
   * The ID of the object.
   */
  id: string;
  warehouse: OrderFulfillData_order_lines_variant_stocks_warehouse;
  /**
   * Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment.
   */
  quantity: number;
  /**
   * Quantity allocated for orders
   */
  quantityAllocated: number;
}

export interface OrderFulfillData_order_lines_variant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  sku: string;
  product: OrderFulfillData_order_lines_variant_product | null;
  /**
   * List of attributes assigned to this variant.
   */
  attributes: OrderFulfillData_order_lines_variant_attributes[];
  /**
   * Stocks for the product variant.
   */
  stocks: (OrderFulfillData_order_lines_variant_stocks | null)[] | null;
  trackInventory: boolean;
}

export interface OrderFulfillData_order_lines_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface OrderFulfillData_order_lines {
  __typename: "OrderLine";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of allocations across warehouses.
   */
  allocations: OrderFulfillData_order_lines_allocations[] | null;
  isShippingRequired: boolean;
  productName: string;
  quantity: number;
  quantityFulfilled: number;
  /**
   * A purchased product variant. Note: this field may be null if the variant has been removed from stock at all.
   */
  variant: OrderFulfillData_order_lines_variant | null;
  /**
   * The main thumbnail for the ordered product.
   */
  thumbnail: OrderFulfillData_order_lines_thumbnail | null;
}

export interface OrderFulfillData_order {
  __typename: "Order";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of order lines.
   */
  lines: (OrderFulfillData_order_lines | null)[];
  /**
   * User-friendly number of an order.
   */
  number: string | null;
}

export interface OrderFulfillData {
  /**
   * Look up an order by ID.
   */
  order: OrderFulfillData_order | null;
}

export interface OrderFulfillDataVariables {
  orderId: string;
}
