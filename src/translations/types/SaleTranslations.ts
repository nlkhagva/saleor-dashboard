/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCodeEnum, SaleFilterInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: SaleTranslations
// ====================================================

export interface SaleTranslations_sales_edges_node_translation_language {
  __typename: "LanguageDisplay";
  /**
   * ISO 639 representation of the language name.
   */
  code: LanguageCodeEnum;
  /**
   * Full name of the language.
   */
  language: string;
}

export interface SaleTranslations_sales_edges_node_translation {
  __typename: "SaleTranslation";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Translation language.
   */
  language: SaleTranslations_sales_edges_node_translation_language;
  name: string | null;
}

export interface SaleTranslations_sales_edges_node {
  __typename: "Sale";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * Returns translated sale fields for the given language code.
   */
  translation: SaleTranslations_sales_edges_node_translation | null;
}

export interface SaleTranslations_sales_edges {
  __typename: "SaleCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: SaleTranslations_sales_edges_node;
}

export interface SaleTranslations_sales_pageInfo {
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

export interface SaleTranslations_sales {
  __typename: "SaleCountableConnection";
  edges: SaleTranslations_sales_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: SaleTranslations_sales_pageInfo;
}

export interface SaleTranslations {
  /**
   * List of the shop's sales.
   */
  sales: SaleTranslations_sales | null;
}

export interface SaleTranslationsVariables {
  language: LanguageCodeEnum;
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
  filter?: SaleFilterInput | null;
}
