import { pageInfoFragment } from "@saleor/fragments/pageInfo";
import { ushopDetailsFragment } from "@saleor/fragments/ushop";
import makeQuery from "@saleor/hooks/makeQuery";
import gql from "graphql-tag";

import { UshopDetails, UshopDetailsVariables } from "./types/UshopDetails";
import { UshopList, UshopListVariables } from "./types/UshopList";

const ushopList = gql`
  ${ushopDetailsFragment}
  ${pageInfoFragment}
  query UshopList(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $filter: UshopFilterInput
    $sort: UshopSortingInput
  ) {
    ushops(
      before: $before
      after: $after
      first: $first
      last: $last
      filter: $filter
      sortBy: $sort
    ) {
      edges {
        node {
          ...UshopDetailsFragment
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`;
export const useUshopList = makeQuery<UshopList, UshopListVariables>(ushopList);

const ushopDetails = gql`
  ${ushopDetailsFragment}
  query UshopDetails($id: ID!) {
    ushop(id: $id) {
      ...UshopDetailsFragment
    }
  }
`;
export const useUshopDetails = makeQuery<UshopDetails, UshopDetailsVariables>(
  ushopDetails
);
