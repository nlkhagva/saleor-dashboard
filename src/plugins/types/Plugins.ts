/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PluginFilterInput, PluginSortingInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: Plugins
// ====================================================

export interface Plugins_plugins_edges_node {
  __typename: "Plugin";
  id: string;
  name: string;
  description: string;
  active: boolean;
}

export interface Plugins_plugins_edges {
  __typename: "PluginCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: Plugins_plugins_edges_node;
}

export interface Plugins_plugins_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface Plugins_plugins {
  __typename: "PluginCountableConnection";
  edges: Plugins_plugins_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: Plugins_plugins_pageInfo;
}

export interface Plugins {
  /**
   * List of plugins.
   */
  plugins: Plugins_plugins | null;
}

export interface PluginsVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
  filter?: PluginFilterInput | null;
  sort?: PluginSortingInput | null;
}
