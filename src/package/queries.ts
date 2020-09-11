import { packageDetailsFragment } from "@saleor/fragments/package";
import { pageInfoFragment } from "@saleor/fragments/pageInfo";
import makeQuery from "@saleor/hooks/makeQuery";
import gql from "graphql-tag";

import {
  PackageDetails,
  PackageDetailsVariables
} from "./types/PackageDetails";
import { PackageList, PackageListVariables } from "./types/PackageList";

const packageList = gql`
  ${packageDetailsFragment}
  ${pageInfoFragment}
  query PackageList(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $filter: PackageFilterInput
    $sort: PackageSortingInput
  ) {
    packages(
      before: $before
      after: $after
      first: $first
      last: $last
      filter: $filter
      sortBy: $sort
    ) {
      edges {
        node {
          ...PackageDetailsFragment
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`;
export const usePackageList = makeQuery<PackageList, PackageListVariables>(
  packageList
);

const packageDetails = gql`
  ${packageDetailsFragment}
  query PackageDetails($id: ID!) {
    package(id: $id) {
      ...PackageDetailsFragment
    }
  }
`;
export const usePackageDetails = makeQuery<
  PackageDetails,
  PackageDetailsVariables
>(packageDetails);
