/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WeightUnitsEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: ProductVariant
// ====================================================

export interface ProductVariant_metadata {
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

export interface ProductVariant_privateMetadata {
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

export interface ProductVariant_attributes_attribute_values {
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

export interface ProductVariant_attributes_attribute {
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
  values: (ProductVariant_attributes_attribute_values | null)[] | null;
}

export interface ProductVariant_attributes_values {
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

export interface ProductVariant_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: ProductVariant_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (ProductVariant_attributes_values | null)[];
}

export interface ProductVariant_costPrice {
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

export interface ProductVariant_images {
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

export interface ProductVariant_price {
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

export interface ProductVariant_product_images {
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

export interface ProductVariant_product_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface ProductVariant_product_variants_images {
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

export interface ProductVariant_product_variants {
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
  images: (ProductVariant_product_variants_images | null)[] | null;
}

export interface ProductVariant_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of images for the product.
   */
  images: (ProductVariant_product_images | null)[] | null;
  name: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: ProductVariant_product_thumbnail | null;
  /**
   * List of variants for the product.
   */
  variants: (ProductVariant_product_variants | null)[] | null;
}

export interface ProductVariant_stocks_warehouse {
  __typename: "Warehouse";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface ProductVariant_stocks {
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
  warehouse: ProductVariant_stocks_warehouse;
}

export interface ProductVariant_weight {
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

export interface ProductVariant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (ProductVariant_metadata | null)[];
  /**
   * List of private metadata items.Requires proper staff permissions to access.
   */
  privateMetadata: (ProductVariant_privateMetadata | null)[];
  /**
   * List of attributes assigned to this variant.
   */
  attributes: ProductVariant_attributes[];
  /**
   * Cost price of the variant.
   */
  costPrice: ProductVariant_costPrice | null;
  /**
   * List of images for the product variant.
   */
  images: (ProductVariant_images | null)[] | null;
  name: string;
  /**
   * Base price of a product variant. This field is restricted for admins. Use the pricing field to get the public price for customers.
   */
  price: ProductVariant_price | null;
  product: ProductVariant_product;
  sku: string;
  /**
   * Stocks for the product variant.
   */
  stocks: (ProductVariant_stocks | null)[] | null;
  trackInventory: boolean;
  weight: ProductVariant_weight | null;
}
