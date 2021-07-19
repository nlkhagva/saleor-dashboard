/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductErrorCode, AttributeInputTypeEnum, WeightUnitsEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: ProductImageCreate
// ====================================================

export interface ProductImageCreate_productImageCreate_errors {
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

export interface ProductImageCreate_productImageCreate_product_attributes_attribute_values {
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

export interface ProductImageCreate_productImageCreate_product_attributes_attribute {
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
  values: (ProductImageCreate_productImageCreate_product_attributes_attribute_values | null)[] | null;
}

export interface ProductImageCreate_productImageCreate_product_attributes_values {
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

export interface ProductImageCreate_productImageCreate_product_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: ProductImageCreate_productImageCreate_product_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (ProductImageCreate_productImageCreate_product_attributes_values | null)[];
}

export interface ProductImageCreate_productImageCreate_product_productType_variantAttributes_values {
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

export interface ProductImageCreate_productImageCreate_product_productType_variantAttributes {
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
  values: (ProductImageCreate_productImageCreate_product_productType_variantAttributes_values | null)[] | null;
}

export interface ProductImageCreate_productImageCreate_product_productType_taxType {
  __typename: "TaxType";
  /**
   * Description of the tax type.
   */
  description: string | null;
  /**
   * External tax code used to identify given tax group.
   */
  taxCode: string | null;
}

export interface ProductImageCreate_productImageCreate_product_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Variant attributes of that product type.
   */
  variantAttributes: (ProductImageCreate_productImageCreate_product_productType_variantAttributes | null)[] | null;
  name: string;
  hasVariants: boolean;
  /**
   * A type of tax. Assigned by enabled tax gateway
   */
  taxType: ProductImageCreate_productImageCreate_product_productType_taxType | null;
}

export interface ProductImageCreate_productImageCreate_product_pricing_priceRangeUndiscounted_start_gross {
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

export interface ProductImageCreate_productImageCreate_product_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductImageCreate_productImageCreate_product_pricing_priceRangeUndiscounted_start_gross;
}

export interface ProductImageCreate_productImageCreate_product_pricing_priceRangeUndiscounted_stop_gross {
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

export interface ProductImageCreate_productImageCreate_product_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductImageCreate_productImageCreate_product_pricing_priceRangeUndiscounted_stop_gross;
}

export interface ProductImageCreate_productImageCreate_product_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductImageCreate_productImageCreate_product_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductImageCreate_productImageCreate_product_pricing_priceRangeUndiscounted_stop | null;
}

export interface ProductImageCreate_productImageCreate_product_pricing {
  __typename: "ProductPricingInfo";
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: ProductImageCreate_productImageCreate_product_pricing_priceRangeUndiscounted | null;
}

export interface ProductImageCreate_productImageCreate_product_metadata {
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

export interface ProductImageCreate_productImageCreate_product_privateMetadata {
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

export interface ProductImageCreate_productImageCreate_product_defaultVariant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface ProductImageCreate_productImageCreate_product_category_parent_parent_parent {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface ProductImageCreate_productImageCreate_product_category_parent_parent {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  parent: ProductImageCreate_productImageCreate_product_category_parent_parent_parent | null;
}

export interface ProductImageCreate_productImageCreate_product_category_parent {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  parent: ProductImageCreate_productImageCreate_product_category_parent_parent | null;
}

export interface ProductImageCreate_productImageCreate_product_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  parent: ProductImageCreate_productImageCreate_product_category_parent | null;
}

export interface ProductImageCreate_productImageCreate_product_ushop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface ProductImageCreate_productImageCreate_product_collections {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface ProductImageCreate_productImageCreate_product_margin {
  __typename: "Margin";
  start: number | null;
  stop: number | null;
}

export interface ProductImageCreate_productImageCreate_product_purchaseCost_start {
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

export interface ProductImageCreate_productImageCreate_product_purchaseCost_stop {
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

export interface ProductImageCreate_productImageCreate_product_purchaseCost {
  __typename: "MoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductImageCreate_productImageCreate_product_purchaseCost_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductImageCreate_productImageCreate_product_purchaseCost_stop | null;
}

export interface ProductImageCreate_productImageCreate_product_images {
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

export interface ProductImageCreate_productImageCreate_product_variants_price {
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

export interface ProductImageCreate_productImageCreate_product_variants_stocks_warehouse {
  __typename: "Warehouse";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface ProductImageCreate_productImageCreate_product_variants_stocks {
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
  warehouse: ProductImageCreate_productImageCreate_product_variants_stocks_warehouse;
}

export interface ProductImageCreate_productImageCreate_product_variants {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  sku: string;
  name: string;
  /**
   * Base price of a product variant. This field is restricted for admins. Use the
   * pricing field to get the public price for customers.
   */
  price: ProductImageCreate_productImageCreate_product_variants_price | null;
  /**
   * Gross margin percentage value.
   */
  margin: number | null;
  /**
   * Stocks for the product variant.
   */
  stocks: (ProductImageCreate_productImageCreate_product_variants_stocks | null)[] | null;
  trackInventory: boolean;
}

export interface ProductImageCreate_productImageCreate_product_weight {
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

export interface ProductImageCreate_productImageCreate_product_taxType {
  __typename: "TaxType";
  /**
   * Description of the tax type.
   */
  description: string | null;
  /**
   * External tax code used to identify given tax group.
   */
  taxCode: string | null;
}

export interface ProductImageCreate_productImageCreate_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of attributes assigned to this product.
   */
  attributes: ProductImageCreate_productImageCreate_product_attributes[];
  productType: ProductImageCreate_productImageCreate_product_productType;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: ProductImageCreate_productImageCreate_product_pricing | null;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (ProductImageCreate_productImageCreate_product_metadata | null)[];
  /**
   * List of private metadata items.Requires proper staff permissions to access.
   */
  privateMetadata: (ProductImageCreate_productImageCreate_product_privateMetadata | null)[];
  name: string;
  slug: string;
  descriptionJson: any;
  seoTitle: string | null;
  seoDescription: string | null;
  defaultVariant: ProductImageCreate_productImageCreate_product_defaultVariant | null;
  category: ProductImageCreate_productImageCreate_product_category | null;
  ushop: ProductImageCreate_productImageCreate_product_ushop | null;
  /**
   * List of collections for the product.
   */
  collections: (ProductImageCreate_productImageCreate_product_collections | null)[] | null;
  margin: ProductImageCreate_productImageCreate_product_margin | null;
  purchaseCost: ProductImageCreate_productImageCreate_product_purchaseCost | null;
  /**
   * Whether the product is available for purchase.
   */
  isAvailableForPurchase: boolean | null;
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
  images: (ProductImageCreate_productImageCreate_product_images | null)[] | null;
  /**
   * List of variants for the product.
   */
  variants: (ProductImageCreate_productImageCreate_product_variants | null)[] | null;
  weight: ProductImageCreate_productImageCreate_product_weight | null;
  /**
   * A type of tax. Assigned by enabled tax gateway
   */
  taxType: ProductImageCreate_productImageCreate_product_taxType | null;
  availableForPurchase: any | null;
  visibleInListings: boolean;
  wasPrice: number | null;
  usale: number | null;
}

export interface ProductImageCreate_productImageCreate {
  __typename: "ProductImageCreate";
  errors: ProductImageCreate_productImageCreate_errors[];
  product: ProductImageCreate_productImageCreate_product | null;
}

export interface ProductImageCreate {
  /**
   * Create a product image. This mutation must be sent as a `multipart` request.
   * More detailed specs of the upload format can be found here:
   * https: // github.com/jaydenseric/graphql-multipart-request-spec
   */
  productImageCreate: ProductImageCreate_productImageCreate | null;
}

export interface ProductImageCreateVariables {
  product: string;
  image: any;
  alt?: string | null;
}
