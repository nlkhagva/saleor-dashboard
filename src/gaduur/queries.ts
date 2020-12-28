import {
  gaduurDetailsFragment,
  gaduurFragment} from "@saleor/fragments/gaduur";
import { pageInfoFragment } from "@saleor/fragments/pageInfo";
import makeQuery from "@saleor/hooks/makeQuery";
import gql from "graphql-tag";

import { GaduurDetails, GaduurDetailsVariables } from "./types/GaduurDetails";
import { GaduurList, GaduurListVariables } from "./types/GaduurList";

const gaduurList = gql`
  ${gaduurFragment}
  ${pageInfoFragment}
  query GaduurList(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $filter: GaduurFilterInput
    $sort: GaduurSortingInput
  ) {
    gaduurs(
      before: $before
      after: $after
      first: $first
      last: $last
      filter: $filter
      sortBy: $sort
    ) {
      edges {
        node {
          ...GaduurFragment
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`;
export const useGaduurList = makeQuery<GaduurList, GaduurListVariables>(
  gaduurList
);

const gaduurDetails = gql`
  ${gaduurDetailsFragment}
  query GaduurDetails($id: ID!) {
    gaduur(id: $id) {
      ...GaduurDetailsFragment
    }
  }
`;
export const useGaduurDetails = makeQuery<
  GaduurDetails,
  GaduurDetailsVariables
>(gaduurDetails);
