import { SearchGaduurs, SearchGaduursVariables } from "./types/SearchGaduurs";

import gql from "graphql-tag";
import makeTopLevelSearch from "@saleor/hooks/makeTopLevelSearch";
import { pageInfoFragment } from "@saleor/fragments/pageInfo";

export const searchGaduurs = gql`
  ${pageInfoFragment}
  query SearchGaduurs($after: String, $first: Int!, $query: String!) {
    search: gaduurs(after: $after, first: $first, filter: { search: $query }) {
      edges {
        node {
          id
          name
          shippingType
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
