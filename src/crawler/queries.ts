import gql from "graphql-tag";

import { TypedQuery } from "../queries";
import {
  CrawlerDetails,
  CrawlerDetailsVariables
} from "./types/CrawlerDetails";
import { CrawlerList, CrawlerListVariables } from "./types/CrawlerList";

export const crawlerFragment = gql`
  fragment CrawlerFragment on Crawler {
    id
    url
    completed
    productCount
    jsonData
    listSelection
    productSelection
    shop {
      id
      name
    }
  }
`;

const crawlerList = gql`
  ${crawlerFragment}
  query CrawlerList($first: Int, $after: String, $last: Int, $before: String) {
    crawlers(before: $before, after: $after, first: $first, last: $last) {
      edges {
        node {
          ...CrawlerFragment
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;

export const TypedCrawlerListQuery = TypedQuery<
  CrawlerList,
  CrawlerListVariables
>(crawlerList);

const crawlerDetails = gql`
  ${crawlerFragment}
  query CrawlerDetails($id: ID!) {
    crawler(id: $id) {
      ...CrawlerFragment
    }
  }
`;
export const TypedCrawlerDetailsQuery = TypedQuery<
  CrawlerDetails,
  CrawlerDetailsVariables
>(crawlerDetails);
