import { pageInfoFragment } from "@saleor/fragments/pageInfo";
import gql from "graphql-tag";

// import React from 'react';

export const CREATE_PRODUCT = gql`
  mutation ProductCreate2(
    $category: ID!
    $chargeTaxes: Boolean!
    $isPublished: Boolean!
    $name: String!
    $basePrice: Decimal
    $productType: ID!
    $sku: String
    $stockQuantity: Int
    $ushop: ID
    $linkImages: JSONString
  ) {
    productCreate(
      input: {
        name: $name
        ushop: $ushop
        basePrice: $basePrice
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
  mutation ProductVariantBulkCreate2(
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
  query SearchProductTypes2($after: String, $first: Int!, $query: String!) {
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
  query SearchCategories2($after: String, $first: Int!, $query: String!) {
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
