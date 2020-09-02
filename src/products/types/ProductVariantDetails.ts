/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WeightUnitsEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: ProductVariantDetails
// ====================================================

export interface ProductVariantDetails_productVariant_metadata {
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

export interface ProductVariantDetails_productVariant_privateMetadata {
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

export interface ProductVariantDetails_productVariant_attributes_attribute_values {
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

export interface ProductVariantDetails_productVariant_attributes_attribute {
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
  values: (ProductVariantDetails_productVariant_attributes_attribute_values | null)[] | null;
}

export interface ProductVariantDetails_productVariant_attributes_values {
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

export interface ProductVariantDetails_productVariant_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: ProductVariantDetails_productVariant_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (ProductVariantDetails_productVariant_attributes_values | null)[];
}

export interface ProductVariantDetails_productVariant_costPrice {
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

export interface ProductVariantDetails_productVariant_images {
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

export interface ProductVariantDetails_productVariant_price {
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

export interface ProductVariantDetails_productVariant_product_images {
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

export interface ProductVariantDetails_productVariant_product_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface ProductVariantDetails_productVariant_product_variants_images {
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

export interface ProductVariantDetails_productVariant_product_variants {
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
  images: (ProductVariantDetails_productVariant_product_variants_images | null)[] | null;
}

export interface ProductVariantDetails_productVariant_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of images for the product.
   */
  images: (ProductVariantDetails_productVariant_product_images | null)[] | null;
  name: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: ProductVariantDetails_productVariant_product_thumbnail | null;
  /**
   * List of variants for the product.
   */
  variants: (ProductVariantDetails_productVariant_product_variants | null)[] | null;
}

export interface ProductVariantDetails_productVariant_stocks_warehouse {
  __typename: "Warehouse";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface ProductVariantDetails_productVariant_stocks {
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
  warehouse: ProductVariantDetails_productVariant_stocks_warehouse;
}

export interface ProductVariantDetails_productVariant_weight {
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

export interface ProductVariantDetails_productVariant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (ProductVariantDetails_productVariant_metadata | null)[];
  /**
   * List of private metadata items.Requires proper staff permissions to access.
   */
  privateMetadata: (ProductVariantDetails_productVariant_privateMetadata | null)[];
  /**
   * List of attributes assigned to this variant.
   */
  attributes: ProductVariantDetails_productVariant_attributes[];
  /**
   * Cost price of the variant.
   */
  costPrice: ProductVariantDetails_productVariant_costPrice | null;
  /**
   * List of images for the product variant.
   */
  images: (ProductVariantDetails_productVariant_images | null)[] | null;
  name: string;
  /**
   * Base price of a product variant. This field is restricted for admins. Use the pricing field to get the public price for customers.
   */
  price: ProductVariantDetails_productVariant_price | null;
  product: ProductVariantDetails_productVariant_product;
  sku: string;
  /**
   * Stocks for the product variant.
   */
  stocks: (ProductVariantDetails_productVariant_stocks | null)[] | null;
  trackInventory: boolean;
  weight: ProductVariantDetails_productVariant_weight | null;
}

export interface ProductVariantDetails {
  /**
   * Look up a product variant by ID.
   */
  productVariant: ProductVariantDetails_productVariant | null;
}

export interface ProductVariantDetailsVariables {
  id: string;
}
