/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CrawlerDetails
// ====================================================

export interface CrawlerDetails_crawler_shop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface CrawlerDetails_crawler {
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
  shop: CrawlerDetails_crawler_shop;
}

export interface CrawlerDetails {
  crawler: CrawlerDetails_crawler | null;
}

export interface CrawlerDetailsVariables {
  id: string;
}
