/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CountAllProducts
// ====================================================

export interface CountAllProducts_products {
  __typename: "ProductCountableConnection";
  /**
   * A total count of items in the collection.
   */
  totalCount: number | null;
}

export interface CountAllProducts {
  /**
   * List of the shop's products.
   */
  products: CountAllProducts_products | null;
}
