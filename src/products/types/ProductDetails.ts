/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AttributeInputTypeEnum, WeightUnitsEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: ProductDetails
// ====================================================

export interface ProductDetails_product_attributes_attribute_values {
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

export interface ProductDetails_product_attributes_attribute {
  __typename: "Attribute";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Internal representation of an attribute name.
   */
  slug: string | null;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
  /**
   * The input type to use for entering attribute values in the dashboard.
   */
  inputType: AttributeInputTypeEnum | null;
  /**
   * Whether the attribute requires values to be passed or not.
   */
  valueRequired: boolean;
  /**
   * List of attribute's values.
   */
  values: (ProductDetails_product_attributes_attribute_values | null)[] | null;
}

export interface ProductDetails_product_attributes_values {
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

export interface ProductDetails_product_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: ProductDetails_product_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (ProductDetails_product_attributes_values | null)[];
}

export interface ProductDetails_product_productType_variantAttributes_values {
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

export interface ProductDetails_product_productType_variantAttributes {
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
   * List of attribute's values.
   */
  values: (ProductDetails_product_productType_variantAttributes_values | null)[] | null;
}

export interface ProductDetails_product_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Variant attributes of that product type.
   */
  variantAttributes: (ProductDetails_product_productType_variantAttributes | null)[] | null;
  name: string;
  hasVariants: boolean;
}

export interface ProductDetails_product_pricing_priceRangeUndiscounted_start_gross {
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

export interface ProductDetails_product_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_product_pricing_priceRangeUndiscounted_start_gross;
}

export interface ProductDetails_product_pricing_priceRangeUndiscounted_stop_gross {
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

export interface ProductDetails_product_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_product_pricing_priceRangeUndiscounted_stop_gross;
}

export interface ProductDetails_product_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductDetails_product_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductDetails_product_pricing_priceRangeUndiscounted_stop | null;
}

export interface ProductDetails_product_pricing {
  __typename: "ProductPricingInfo";
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: ProductDetails_product_pricing_priceRangeUndiscounted | null;
}

export interface ProductDetails_product_metadata {
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

export interface ProductDetails_product_privateMetadata {
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

export interface ProductDetails_product_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface ProductDetails_product_collections {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface ProductDetails_product_margin {
  __typename: "Margin";
  start: number | null;
  stop: number | null;
}

export interface ProductDetails_product_purchaseCost_start {
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

export interface ProductDetails_product_purchaseCost_stop {
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

export interface ProductDetails_product_purchaseCost {
  __typename: "MoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductDetails_product_purchaseCost_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductDetails_product_purchaseCost_stop | null;
}

export interface ProductDetails_product_images {
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

export interface ProductDetails_product_variants_price {
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

export interface ProductDetails_product_variants_stocks_warehouse {
  __typename: "Warehouse";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface ProductDetails_product_variants_stocks {
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
  warehouse: ProductDetails_product_variants_stocks_warehouse;
}

export interface ProductDetails_product_variants {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  sku: string;
  name: string;
  /**
   * Base price of a product variant. This field is restricted for admins. Use the pricing field to get the public price for customers.
   */
  price: ProductDetails_product_variants_price | null;
  /**
   * Gross margin percentage value.
   */
  margin: number | null;
  /**
   * Stocks for the product variant.
   */
  stocks: (ProductDetails_product_variants_stocks | null)[] | null;
  trackInventory: boolean;
}

export interface ProductDetails_product_weight {
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

export interface ProductDetails_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of attributes assigned to this product.
   */
  attributes: ProductDetails_product_attributes[];
  productType: ProductDetails_product_productType;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: ProductDetails_product_pricing | null;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (ProductDetails_product_metadata | null)[];
  /**
   * List of private metadata items.Requires proper staff permissions to access.
   */
  privateMetadata: (ProductDetails_product_privateMetadata | null)[];
  name: string;
  descriptionJson: any;
  seoTitle: string | null;
  seoDescription: string | null;
  category: ProductDetails_product_category | null;
  /**
   * List of collections for the product.
   */
  collections: (ProductDetails_product_collections | null)[] | null;
  margin: ProductDetails_product_margin | null;
  purchaseCost: ProductDetails_product_purchaseCost | null;
  /**
   * Whether the product is in stock and visible or not.
   */
  isAvailable: boolean | null;
  isPublished: boolean;
  chargeTaxes: boolean;
  publicationDate: any | null;
  /**
   * List of images for the product.
   */
  images: (ProductDetails_product_images | null)[] | null;
  /**
   * List of variants for the product.
   */
  variants: (ProductDetails_product_variants | null)[] | null;
  weight: ProductDetails_product_weight | null;
}

export interface ProductDetails {
  /**
   * Look up a product by ID.
   */
  product: ProductDetails_product | null;
}

export interface ProductDetailsVariables {
  id: string;
}
