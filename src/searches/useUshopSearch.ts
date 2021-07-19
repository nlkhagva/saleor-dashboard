import { SearchUshops, SearchUshopsVariables } from "./types/SearchUshops";

import gql from "graphql-tag";
import makeTopLevelSearch from "@saleor/hooks/makeTopLevelSearch";
import { pageInfoFragment } from "@saleor/fragments/pageInfo";

export const searchUshops = gql`
  ${pageInfoFragment}
  query SearchUshops($after: String, $first: Int!, $query: String!) {
    search: ushops(after: $after, first: $first, filter: { search: $query }) {
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

export default makeTopLevelSearch<SearchUshops, SearchUshopsVariables>(
  searchUshops
);
