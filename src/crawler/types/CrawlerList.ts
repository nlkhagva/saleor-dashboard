/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CrawlerList
// ====================================================

export interface CrawlerList_crawlers_edges_node_shop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface CrawlerList_crawlers_edges_node {
  __typename: "Crawler";
  /**
   * The ID of the object.
   */
  id: string;
  url: string;
  completed: boolean;
  productCount: number | null;
  jsonData: any;
  listSelection: string;
  productSelection: string;
  shop: CrawlerList_crawlers_edges_node_shop;
}

export interface CrawlerList_crawlers_edges {
  __typename: "CrawlerCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: CrawlerList_crawlers_edges_node;
}

export interface CrawlerList_crawlers_pageInfo {
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

export interface CrawlerList_crawlers {
  __typename: "CrawlerCountableConnection";
  edges: CrawlerList_crawlers_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: CrawlerList_crawlers_pageInfo;
}

export interface CrawlerList {
  /**
   * List of the crawlers pages
   */
  crawlers: CrawlerList_crawlers | null;
}

export interface CrawlerListVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
