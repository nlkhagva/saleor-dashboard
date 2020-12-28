import { pageInfoFragment } from "@saleor/fragments/pageInfo";
import makeTopLevelSearch from "@saleor/hooks/makeTopLevelSearch";
import gql from "graphql-tag";

import { SearchGaduurs, SearchGaduursVariables } from "./types/SearchGaduurs";

export const searchGaduurs = gql`
  ${pageInfoFragment}
  query SearchGaduurs($after: String, $first: Int!, $query: String!) {
    search: gaduurs(after: $after, first: $first, filter: { search: $query }) {
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

export default makeTopLevelSearch<SearchGaduurs, SearchGaduursVariables>(
  searchGaduurs
);
