/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ProductCreate2
// ====================================================

export interface ProductCreate2_productCreate_errors {
  __typename: "Error";
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface ProductCreate2_productCreate_product_productType_variantAttributes_values {
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

export interface ProductCreate2_productCreate_product_productType_variantAttributes {
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
  values: (ProductCreate2_productCreate_product_productType_variantAttributes_values | null)[] | null;
}

export interface ProductCreate2_productCreate_product_productType {
  __typename: "ProductType";
  /**
   * Variant attributes of that product type.
   */
  variantAttributes: (ProductCreate2_productCreate_product_productType_variantAttributes | null)[] | null;
}

export interface ProductCreate2_productCreate_product_ushop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface ProductCreate2_productCreate_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  productType: ProductCreate2_productCreate_product_productType;
  ushop: ProductCreate2_productCreate_product_ushop | null;
}

export interface ProductCreate2_productCreate {
  __typename: "ProductCreate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: ProductCreate2_productCreate_errors[];
  product: ProductCreate2_productCreate_product | null;
}

export interface ProductCreate2 {
  /**
   * Creates a new product.
   */
  productCreate: ProductCreate2_productCreate | null;
}

export interface ProductCreate2Variables {
  category: string;
  chargeTaxes: boolean;
  isPublished: boolean;
  name: string;
  basePrice?: any | null;
  productType: string;
  sku?: string | null;
  stockQuantity?: number | null;
  ushop?: string | null;
  linkImages?: any | null;
}
