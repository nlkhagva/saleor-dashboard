/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { StockInput, AttributeValueInput, ProductErrorCode, WeightUnitsEnum, StockErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: VariantUpdate
// ====================================================

export interface VariantUpdate_productVariantUpdate_errors {
  __typename: "ProductError";
  /**
   * The error code.
   */
  code: ProductErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
}

export interface VariantUpdate_productVariantUpdate_productVariant_metadata {
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

export interface VariantUpdate_productVariantUpdate_productVariant_privateMetadata {
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

export interface VariantUpdate_productVariantUpdate_productVariant_attributes_attribute_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of a value (unique per attribute).
   */
  slug: string | null;
}

export interface VariantUpdate_productVariantUpdate_productVariant_attributes_attribute {
  __typename: "Attribute";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of an attribute name.
   */
  slug: string | null;
  /**
   * Whether the attribute requires values to be passed or not.
   */
  valueRequired: boolean;
  /**
   * List of attribute's values.
   */
  values: (VariantUpdate_productVariantUpdate_productVariant_attributes_attribute_values | null)[] | null;
}

export interface VariantUpdate_productVariantUpdate_productVariant_attributes_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of a value (unique per attribute).
   */
  slug: string | null;
}

export interface VariantUpdate_productVariantUpdate_productVariant_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: VariantUpdate_productVariantUpdate_productVariant_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (VariantUpdate_productVariantUpdate_productVariant_attributes_values | null)[];
}

export interface VariantUpdate_productVariantUpdate_productVariant_costPrice {
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

export interface VariantUpdate_productVariantUpdate_productVariant_images {
  __typename: "ProductImage";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The URL of the image.
   */
  url: string;
}

export interface VariantUpdate_productVariantUpdate_productVariant_price {
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

export interface VariantUpdate_productVariantUpdate_productVariant_product_images {
  __typename: "ProductImage";
  /**
   * The ID of the object.
   */
  id: string;
  alt: string;
  sortOrder: number | null;
  /**
   * The URL of the image.
   */
  url: string;
}

export interface VariantUpdate_productVariantUpdate_productVariant_product_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface VariantUpdate_productVariantUpdate_productVariant_product_variants_images {
  __typename: "ProductImage";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The URL of the image.
   */
  url: string;
}

export interface VariantUpdate_productVariantUpdate_productVariant_product_variants {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  sku: string;
  /**
   * List of images for the product variant.
   */
  images: (VariantUpdate_productVariantUpdate_productVariant_product_variants_images | null)[] | null;
}

export interface VariantUpdate_productVariantUpdate_productVariant_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of images for the product.
   */
  images: (VariantUpdate_productVariantUpdate_productVariant_product_images | null)[] | null;
  name: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: VariantUpdate_productVariantUpdate_productVariant_product_thumbnail | null;
  /**
   * List of variants for the product.
   */
  variants: (VariantUpdate_productVariantUpdate_productVariant_product_variants | null)[] | null;
}

export interface VariantUpdate_productVariantUpdate_productVariant_stocks_warehouse {
  __typename: "Warehouse";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface VariantUpdate_productVariantUpdate_productVariant_stocks {
  __typename: "Stock";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment.
   */
  quantity: number;
  /**
   * Quantity allocated for orders
   */
  quantityAllocated: number;
  warehouse: VariantUpdate_productVariantUpdate_productVariant_stocks_warehouse;
}

export interface VariantUpdate_productVariantUpdate_productVariant_weight {
  __typename: "Weight";
  /**
   * Weight unit.
   */
  unit: WeightUnitsEnum;
  /**
   * Weight value.
   */
  value: number;
}

export interface VariantUpdate_productVariantUpdate_productVariant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (VariantUpdate_productVariantUpdate_productVariant_metadata | null)[];
  /**
   * List of private metadata items.Requires proper staff permissions to access.
   */
  privateMetadata: (VariantUpdate_productVariantUpdate_productVariant_privateMetadata | null)[];
  /**
   * List of attributes assigned to this variant.
   */
  attributes: VariantUpdate_productVariantUpdate_productVariant_attributes[];
  /**
   * Cost price of the variant.
   */
  costPrice: VariantUpdate_productVariantUpdate_productVariant_costPrice | null;
  /**
   * List of images for the product variant.
   */
  images: (VariantUpdate_productVariantUpdate_productVariant_images | null)[] | null;
  name: string;
  /**
   * Base price of a product variant. This field is restricted for admins. Use the
   * pricing field to get the public price for customers.
   */
  price: VariantUpdate_productVariantUpdate_productVariant_price | null;
  product: VariantUpdate_productVariantUpdate_productVariant_product | null;
  sku: string;
  /**
   * Stocks for the product variant.
   */
  stocks: (VariantUpdate_productVariantUpdate_productVariant_stocks | null)[] | null;
  trackInventory: boolean;
  weight: VariantUpdate_productVariantUpdate_productVariant_weight | null;
}

export interface VariantUpdate_productVariantUpdate {
  __typename: "ProductVariantUpdate";
  errors: VariantUpdate_productVariantUpdate_errors[];
  productVariant: VariantUpdate_productVariantUpdate_productVariant | null;
}

export interface VariantUpdate_productVariantStocksUpdate_errors {
  __typename: "BulkStockError";
  /**
   * The error code.
   */
  code: ProductErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * Index of an input list item that caused the error.
   */
  index: number | null;
}

export interface VariantUpdate_productVariantStocksUpdate_productVariant_metadata {
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

export interface VariantUpdate_productVariantStocksUpdate_productVariant_privateMetadata {
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

export interface VariantUpdate_productVariantStocksUpdate_productVariant_attributes_attribute_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of a value (unique per attribute).
   */
  slug: string | null;
}

export interface VariantUpdate_productVariantStocksUpdate_productVariant_attributes_attribute {
  __typename: "Attribute";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of an attribute name.
   */
  slug: string | null;
  /**
   * Whether the attribute requires values to be passed or not.
   */
  valueRequired: boolean;
  /**
   * List of attribute's values.
   */
  values: (VariantUpdate_productVariantStocksUpdate_productVariant_attributes_attribute_values | null)[] | null;
}

export interface VariantUpdate_productVariantStocksUpdate_productVariant_attributes_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of a value (unique per attribute).
   */
  slug: string | null;
}

export interface VariantUpdate_productVariantStocksUpdate_productVariant_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: VariantUpdate_productVariantStocksUpdate_productVariant_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (VariantUpdate_productVariantStocksUpdate_productVariant_attributes_values | null)[];
}

export interface VariantUpdate_productVariantStocksUpdate_productVariant_costPrice {
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

export interface VariantUpdate_productVariantStocksUpdate_productVariant_images {
  __typename: "ProductImage";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The URL of the image.
   */
  url: string;
}

export interface VariantUpdate_productVariantStocksUpdate_productVariant_price {
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

export interface VariantUpdate_productVariantStocksUpdate_productVariant_product_images {
  __typename: "ProductImage";
  /**
   * The ID of the object.
   */
  id: string;
  alt: string;
  sortOrder: number | null;
  /**
   * The URL of the image.
   */
  url: string;
}

export interface VariantUpdate_productVariantStocksUpdate_productVariant_product_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface VariantUpdate_productVariantStocksUpdate_productVariant_product_variants_images {
  __typename: "ProductImage";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The URL of the image.
   */
  url: string;
}

export interface VariantUpdate_productVariantStocksUpdate_productVariant_product_variants {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  sku: string;
  /**
   * List of images for the product variant.
   */
  images: (VariantUpdate_productVariantStocksUpdate_productVariant_product_variants_images | null)[] | null;
}

export interface VariantUpdate_productVariantStocksUpdate_productVariant_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of images for the product.
   */
  images: (VariantUpdate_productVariantStocksUpdate_productVariant_product_images | null)[] | null;
  name: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: VariantUpdate_productVariantStocksUpdate_productVariant_product_thumbnail | null;
  /**
   * List of variants for the product.
   */
  variants: (VariantUpdate_productVariantStocksUpdate_productVariant_product_variants | null)[] | null;
}

export interface VariantUpdate_productVariantStocksUpdate_productVariant_stocks_warehouse {
  __typename: "Warehouse";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface VariantUpdate_productVariantStocksUpdate_productVariant_stocks {
  __typename: "Stock";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment.
   */
  quantity: number;
  /**
   * Quantity allocated for orders
   */
  quantityAllocated: number;
  warehouse: VariantUpdate_productVariantStocksUpdate_productVariant_stocks_warehouse;
}

export interface VariantUpdate_productVariantStocksUpdate_productVariant_weight {
  __typename: "Weight";
  /**
   * Weight unit.
   */
  unit: WeightUnitsEnum;
  /**
   * Weight value.
   */
  value: number;
}

export interface VariantUpdate_productVariantStocksUpdate_productVariant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (VariantUpdate_productVariantStocksUpdate_productVariant_metadata | null)[];
  /**
   * List of private metadata items.Requires proper staff permissions to access.
   */
  privateMetadata: (VariantUpdate_productVariantStocksUpdate_productVariant_privateMetadata | null)[];
  /**
   * List of attributes assigned to this variant.
   */
  attributes: VariantUpdate_productVariantStocksUpdate_productVariant_attributes[];
  /**
   * Cost price of the variant.
   */
  costPrice: VariantUpdate_productVariantStocksUpdate_productVariant_costPrice | null;
  /**
   * List of images for the product variant.
   */
  images: (VariantUpdate_productVariantStocksUpdate_productVariant_images | null)[] | null;
  name: string;
  /**
   * Base price of a product variant. This field is restricted for admins. Use the
   * pricing field to get the public price for customers.
   */
  price: VariantUpdate_productVariantStocksUpdate_productVariant_price | null;
  product: VariantUpdate_productVariantStocksUpdate_productVariant_product | null;
  sku: string;
  /**
   * Stocks for the product variant.
   */
  stocks: (VariantUpdate_productVariantStocksUpdate_productVariant_stocks | null)[] | null;
  trackInventory: boolean;
  weight: VariantUpdate_productVariantStocksUpdate_productVariant_weight | null;
}

export interface VariantUpdate_productVariantStocksUpdate {
  __typename: "ProductVariantStocksUpdate";
  errors: VariantUpdate_productVariantStocksUpdate_errors[];
  /**
   * Updated product variant.
   */
  productVariant: VariantUpdate_productVariantStocksUpdate_productVariant | null;
}

export interface VariantUpdate_productVariantStocksCreate_errors {
  __typename: "BulkStockError";
  /**
   * The error code.
   */
  code: ProductErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * Index of an input list item that caused the error.
   */
  index: number | null;
}

export interface VariantUpdate_productVariantStocksCreate_productVariant_stocks_warehouse {
  __typename: "Warehouse";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface VariantUpdate_productVariantStocksCreate_productVariant_stocks {
  __typename: "Stock";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment.
   */
  quantity: number;
  /**
   * Quantity allocated for orders
   */
  quantityAllocated: number;
  warehouse: VariantUpdate_productVariantStocksCreate_productVariant_stocks_warehouse;
}

export interface VariantUpdate_productVariantStocksCreate_productVariant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Stocks for the product variant.
   */
  stocks: (VariantUpdate_productVariantStocksCreate_productVariant_stocks | null)[] | null;
}

export interface VariantUpdate_productVariantStocksCreate {
  __typename: "ProductVariantStocksCreate";
  errors: VariantUpdate_productVariantStocksCreate_errors[];
  /**
   * Updated product variant.
   */
  productVariant: VariantUpdate_productVariantStocksCreate_productVariant | null;
}

export interface VariantUpdate_productVariantStocksDelete_errors {
  __typename: "StockError";
  /**
   * The error code.
   */
  code: StockErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
}

export interface VariantUpdate_productVariantStocksDelete_productVariant_stocks_warehouse {
  __typename: "Warehouse";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface VariantUpdate_productVariantStocksDelete_productVariant_stocks {
  __typename: "Stock";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment.
   */
  quantity: number;
  /**
   * Quantity allocated for orders
   */
  quantityAllocated: number;
  warehouse: VariantUpdate_productVariantStocksDelete_productVariant_stocks_warehouse;
}

export interface VariantUpdate_productVariantStocksDelete_productVariant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Stocks for the product variant.
   */
  stocks: (VariantUpdate_productVariantStocksDelete_productVariant_stocks | null)[] | null;
}

export interface VariantUpdate_productVariantStocksDelete {
  __typename: "ProductVariantStocksDelete";
  errors: VariantUpdate_productVariantStocksDelete_errors[];
  /**
   * Updated product variant.
   */
  productVariant: VariantUpdate_productVariantStocksDelete_productVariant | null;
}

export interface VariantUpdate {
  /**
   * Updates an existing variant for product.
   */
  productVariantUpdate: VariantUpdate_productVariantUpdate | null;
  /**
   * Update stocks for product variant.
   */
  productVariantStocksUpdate: VariantUpdate_productVariantStocksUpdate | null;
  /**
   * Creates stocks for product variant.
   */
  productVariantStocksCreate: VariantUpdate_productVariantStocksCreate | null;
  /**
   * Delete stocks from product variant.
   */
  productVariantStocksDelete: VariantUpdate_productVariantStocksDelete | null;
}

export interface VariantUpdateVariables {
  addStocks: StockInput[];
  removeStocks: string[];
  id: string;
  attributes?: (AttributeValueInput | null)[] | null;
  costPrice?: any | null;
  price?: any | null;
  sku?: string | null;
  trackInventory: boolean;
  stocks: StockInput[];
  weight?: any | null;
}
