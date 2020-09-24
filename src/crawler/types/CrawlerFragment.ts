/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CrawlerFragment
// ====================================================

export interface CrawlerFragment_shop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface CrawlerFragment {
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
  shop: CrawlerFragment_shop;
}
