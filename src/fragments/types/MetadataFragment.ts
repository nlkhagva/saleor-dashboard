/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MetadataFragment
// ====================================================

export interface MetadataFragment_metadata {
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

export interface MetadataFragment_privateMetadata {
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

export interface MetadataFragment {
  __typename: "Product" | "ProductType" | "Attribute" | "Category" | "ProductVariant" | "DigitalContent" | "Collection" | "User" | "Checkout" | "Order" | "Fulfillment" | "Invoice" | "ServiceAccount" | "App";
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (MetadataFragment_metadata | null)[];
  /**
   * List of private metadata items.Requires proper staff permissions to access.
   */
  privateMetadata: (MetadataFragment_privateMetadata | null)[];
}
