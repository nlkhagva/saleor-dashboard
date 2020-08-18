/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WebhookFilterInput, WebhookSortingInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: Webhooks
// ====================================================

export interface Webhooks_webhooks_edges_node_app {
  __typename: "App";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of the app.
   */
  name: string | null;
}

export interface Webhooks_webhooks_edges_node {
  __typename: "Webhook";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  isActive: boolean;
  app: Webhooks_webhooks_edges_node_app;
}

export interface Webhooks_webhooks_edges {
  __typename: "WebhookCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: Webhooks_webhooks_edges_node;
}

export interface Webhooks_webhooks_pageInfo {
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

export interface Webhooks_webhooks {
  __typename: "WebhookCountableConnection";
  edges: Webhooks_webhooks_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: Webhooks_webhooks_pageInfo;
}

export interface Webhooks {
  /**
   * List of webhooks.
   */
  webhooks: Webhooks_webhooks | null;
}

export interface WebhooksVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
  filter?: WebhookFilterInput | null;
  sort?: WebhookSortingInput | null;
}
