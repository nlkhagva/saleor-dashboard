import { pageInfoFragment } from "@saleor/fragments/pageInfo";
import gql from "graphql-tag";

// import React from 'react';

export const CREATE_PRODUCT = gql`
  mutation ProductCreate(
    $category: ID!
    $chargeTaxes: Boolean!
    $isPublished: Boolean!
    $name: String!
    $basePrice: Decimal
    $uprice: Decimal
    $productType: ID!
    $sku: String
    $ulink: String
    $stockQuantity: Int
    $ushop: ID
    $linkImages: JSONString
  ) {
    productCreate(
      input: {
        ulink: $ulink
        name: $name
        ushop: $ushop
        basePrice: $basePrice
        uprice: $uprice
        productType: $productType
        category: $category
        chargeTaxes: $chargeTaxes
        isPublished: $isPublished
        sku: $sku
        quantity: $stockQuantity
        linkImages: $linkImages
      }
    ) {
      errors {
        field
        message
        __typename
      }
      product {
        id
        uprice
        ulink
        productType {
          variantAttributes {
            id
            name
            values {
              id
              name
              slug
            }
          }
        }
        ushop {
          id
          name
        }
        __typename
      }
      __typename
    }
  }
`;

export const CREATE_VARIANT = gql`
  mutation ProductVariantBulkCreate(
    $id: ID!
    $inputs: [ProductVariantBulkCreateInput]!
  ) {
    productVariantBulkCreate(product: $id, variants: $inputs) {
      bulkProductErrors {
        field
        message
        code
        index
        __typename
      }
      errors {
        field
        message
        __typename
      }
      __typename
    }
  }
`;

export const searchProductTypes = gql`
  ${pageInfoFragment}
  query SearchProductTypes($after: String, $first: Int!, $query: String!) {
    search: productTypes(
      after: $after
      first: $first
      filter: { search: $query }
    ) {
      edges {
        node {
          id
          name
          hasVariants
          productAttributes {
            id
            inputType
            slug
            name
            valueRequired
            values {
              id
              name
              slug
            }
          }
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`;

export const searchCategories = gql`
  ${pageInfoFragment}
  query SearchCategories($after: String, $first: Int!, $query: String!) {
    search: categories(after: $after, first: $first, query: $query) {
      edges {
        node {
          id
          name
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`;
