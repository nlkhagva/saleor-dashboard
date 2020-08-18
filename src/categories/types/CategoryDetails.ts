/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoryDetails
// ====================================================

export interface CategoryDetails_category_backgroundImage {
  __typename: "Image";
  /**
   * Alt text for an image.
   */
  alt: string | null;
  /**
   * The URL of the image.
   */
  url: string;
}

export interface CategoryDetails_category_parent {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface CategoryDetails_category_children_edges_node_children {
  __typename: "CategoryCountableConnection";
  /**
   * A total count of items in the collection.
   */
  totalCount: number | null;
}

export interface CategoryDetails_category_children_edges_node_products {
  __typename: "ProductCountableConnection";
  /**
   * A total count of items in the collection.
   */
  totalCount: number | null;
}

export interface CategoryDetails_category_children_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * List of children of the category.
   */
  children: CategoryDetails_category_children_edges_node_children | null;
  /**
   * List of products in the category.
   */
  products: CategoryDetails_category_children_edges_node_products | null;
}

export interface CategoryDetails_category_children_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: CategoryDetails_category_children_edges_node;
}

export interface CategoryDetails_category_children_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
}

export interface CategoryDetails_category_children {
  __typename: "CategoryCountableConnection";
  edges: CategoryDetails_category_children_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: CategoryDetails_category_children_pageInfo;
}

export interface CategoryDetails_category_products_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
}

export interface CategoryDetails_category_products_edges_node_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface CategoryDetails_category_products_edges_node_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface CategoryDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
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

export interface CategoryDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CategoryDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
}

export interface CategoryDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
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

export interface CategoryDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CategoryDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
}

export interface CategoryDetails_category_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: CategoryDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: CategoryDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface CategoryDetails_category_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: CategoryDetails_category_products_edges_node_pricing_priceRangeUndiscounted | null;
}

export interface CategoryDetails_category_products_edges_node {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * Whether the product is in stock and visible or not.
   */
  isAvailable: boolean | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: CategoryDetails_category_products_edges_node_thumbnail | null;
  productType: CategoryDetails_category_products_edges_node_productType;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: CategoryDetails_category_products_edges_node_pricing | null;
}

export interface CategoryDetails_category_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of the edge.
   */
  node: CategoryDetails_category_products_edges_node;
}

export interface CategoryDetails_category_products {
  __typename: "ProductCountableConnection";
  /**
   * Pagination data for this connection.
   */
  pageInfo: CategoryDetails_category_products_pageInfo;
  edges: CategoryDetails_category_products_edges[];
}

export interface CategoryDetails_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  backgroundImage: CategoryDetails_category_backgroundImage | null;
  name: string;
  descriptionJson: any;
  seoDescription: string | null;
  seoTitle: string | null;
  parent: CategoryDetails_category_parent | null;
  /**
   * List of children of the category.
   */
  children: CategoryDetails_category_children | null;
  /**
   * List of products in the category.
   */
  products: CategoryDetails_category_products | null;
}

export interface CategoryDetails {
  /**
   * Look up a category by ID or slug.
   */
  category: CategoryDetails_category | null;
}

export interface CategoryDetailsVariables {
  id: string;
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
