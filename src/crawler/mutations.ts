import gql from 'graphql-tag';

import { TypedMutation } from '../mutations';
import { crawlerFragment } from './queries';
import { CrawlerBulkRemove, CrawlerBulkRemoveVariables } from './types/CrawlerBulkRemove';
import { CrawlerCreate, CrawlerCreateVariables } from './types/CrawlerCreate';
import { CrawlerRemove, CrawlerRemoveVariables } from './types/CrawlerRemove';
import { CrawlerUpdate, CrawlerUpdateVariables } from './types/CrawlerUpdate';

const crawlerCreate = gql`
  ${crawlerFragment}
  mutation CrawlerCreate($input: CrawlerInput!) {
    crawlerCreate(input: $input) {
      errors {
        field
        message
        __typename
      }
      crawler {
        ...CrawlerFragment
      }
      __typename
    }
  }
`;
export const TypedCrawlerCreate = TypedMutation<
  CrawlerCreate,
  CrawlerCreateVariables
>(crawlerCreate);

export const crawlerUpdate = gql`
  ${crawlerFragment}
  mutation CrawlerUpdate($id: ID!, $input: CrawlerInput!) {
    crawlerUpdate(id: $id, input: $input) {
      errors {
        field
        message
      }
      crawler {
        ...CrawlerFragment
      }
    }
  }
`;
export const TypedCrawlerUpdate = TypedMutation<
  CrawlerUpdate,
  CrawlerUpdateVariables
>(crawlerUpdate);

const crawlerRemove = gql`
  mutation CrawlerRemove($id: ID!) {
    crawlerDelete(id: $id) {
      errors {
        field
        message
      }
    }
  }
`;
export const TypedCrawlerRemove = TypedMutation<
  CrawlerRemove,
  CrawlerRemoveVariables
>(crawlerRemove);

const crawlerBulkRemove = gql`
  mutation CrawlerBulkRemove($ids: [ID]!) {
    crawlerBulkDelete(ids: $ids) {
      errors {
        field
        message
      }
    }
  }
`;
export const TypedCrawlerBulkRemove = TypedMutation<
  CrawlerBulkRemove,
  CrawlerBulkRemoveVariables
>(crawlerBulkRemove);
