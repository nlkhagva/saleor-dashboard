/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductVariantCreateInput, ProductErrorCode, WeightUnitsEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: VariantCreate
// ====================================================

export interface VariantCreate_productVariantCreate_errors {
  __typename: "ProductError";
  /**
   * The error code.
   */
  code: ProductErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
}

export interface VariantCreate_productVariantCreate_productVariant_metadata {
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

export interface VariantCreate_productVariantCreate_productVariant_privateMetadata {
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

export interface VariantCreate_productVariantCreate_productVariant_attributes_attribute_values {
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

export interface VariantCreate_productVariantCreate_productVariant_attributes_attribute {
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
  values: (VariantCreate_productVariantCreate_productVariant_attributes_attribute_values | null)[] | null;
}

export interface VariantCreate_productVariantCreate_productVariant_attributes_values {
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

export interface VariantCreate_productVariantCreate_productVariant_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: VariantCreate_productVariantCreate_productVariant_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (VariantCreate_productVariantCreate_productVariant_attributes_values | null)[];
}

export interface VariantCreate_productVariantCreate_productVariant_costPrice {
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

export interface VariantCreate_productVariantCreate_productVariant_images {
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

export interface VariantCreate_productVariantCreate_productVariant_price {
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

export interface VariantCreate_productVariantCreate_productVariant_product_images {
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

export interface VariantCreate_productVariantCreate_productVariant_product_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface VariantCreate_productVariantCreate_productVariant_product_variants_images {
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

export interface VariantCreate_productVariantCreate_productVariant_product_variants {
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
  images: (VariantCreate_productVariantCreate_productVariant_product_variants_images | null)[] | null;
}

export interface VariantCreate_productVariantCreate_productVariant_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of images for the product.
   */
  images: (VariantCreate_productVariantCreate_productVariant_product_images | null)[] | null;
  name: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: VariantCreate_productVariantCreate_productVariant_product_thumbnail | null;
  /**
   * List of variants for the product.
   */
  variants: (VariantCreate_productVariantCreate_productVariant_product_variants | null)[] | null;
}

export interface VariantCreate_productVariantCreate_productVariant_stocks_warehouse {
  __typename: "Warehouse";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface VariantCreate_productVariantCreate_productVariant_stocks {
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
  warehouse: VariantCreate_productVariantCreate_productVariant_stocks_warehouse;
}

export interface VariantCreate_productVariantCreate_productVariant_weight {
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

export interface VariantCreate_productVariantCreate_productVariant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (VariantCreate_productVariantCreate_productVariant_metadata | null)[];
  /**
   * List of private metadata items.Requires proper staff permissions to access.
   */
  privateMetadata: (VariantCreate_productVariantCreate_productVariant_privateMetadata | null)[];
  /**
   * List of attributes assigned to this variant.
   */
  attributes: VariantCreate_productVariantCreate_productVariant_attributes[];
  /**
   * Cost price of the variant.
   */
  costPrice: VariantCreate_productVariantCreate_productVariant_costPrice | null;
  /**
   * List of images for the product variant.
   */
  images: (VariantCreate_productVariantCreate_productVariant_images | null)[] | null;
  name: string;
  /**
   * Base price of a product variant. This field is restricted for admins. Use the pricing field to get the public price for customers.
   */
  price: VariantCreate_productVariantCreate_productVariant_price | null;
  product: VariantCreate_productVariantCreate_productVariant_product;
  sku: string;
  /**
   * Stocks for the product variant.
   */
  stocks: (VariantCreate_productVariantCreate_productVariant_stocks | null)[] | null;
  trackInventory: boolean;
  weight: VariantCreate_productVariantCreate_productVariant_weight | null;
}

export interface VariantCreate_productVariantCreate {
  __typename: "ProductVariantCreate";
  errors: VariantCreate_productVariantCreate_errors[];
  productVariant: VariantCreate_productVariantCreate_productVariant | null;
}

export interface VariantCreate {
  /**
   * Creates a new variant for a product.
   */
  productVariantCreate: VariantCreate_productVariantCreate | null;
}

export interface VariantCreateVariables {
  input: ProductVariantCreateInput;
}
