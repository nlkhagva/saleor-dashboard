import { packageDetailsFragment } from "@saleor/fragments/package";
import { pageInfoFragment } from "@saleor/fragments/pageInfo";
import makeQuery from "@saleor/hooks/makeQuery";
import gql from "graphql-tag";

import {
  PackageDetails,
  PackageDetailsVariables
} from "./types/PackageDetails";
import { PackageList, PackageListVariables } from "./types/PackageList";
import {
  Ready2Shipping,
  Ready2ShippingVariables
} from "./types/Ready2Shipping";

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
      lines {
        id
        name
        quantity
        unitPriceAmount
        currency
        fulfillmentline {
          id
          quantity
          ushopStatus
          changedDate
          soonDate
          orderLine {
            id
            productName
            orderId
            thumbnail {
              url
              alt
            }
            variant {
              id
              name
              product {
                id
                productType {
                  id
                  name
                }
                ushop {
                  id
                  name
                }
                metadata {
                  key
                  value
                }
              }
            }

            unitPrice {
              gross {
                amount
                currency
              }
            }
          }
        }
      }
    }
  }
`;
export const usePackageDetails = makeQuery<
  PackageDetails,
  PackageDetailsVariables
>(packageDetails);

const fulfillOrdernumber = gql`
  query Ready2Shipping($ordernumber: String!) {
    ready2shipping(ordernumber: $ordernumber) {
      order {
        id
        number
        shippingAddress {
          id
          lastName
          firstName
          companyName
          phone
          streetAddress1
          streetAddress2
          city
          cityArea
          countryArea
          country {
            country
            code
          }
          postalCode
        }
      }
      id
      status
      trackingNumber
      ushopStatus
      ukDate
      lines {
        id
        quantity
        ushopStatus
        changedDate
        soonDate
        orderLine {
          id
          productName
          orderId
          thumbnail {
            url
            alt
          }
          variant {
            id
            name
            product {
              id
              productType {
                id
                name
              }
              ushop {
                id
                name
              }
              metadata {
                key
                value
              }
            }
          }

          unitPrice {
            gross {
              amount
              currency
            }
          }
        }
      }
      others2shipping {
        order {
          id
          number
          shippingAddress {
            id
            lastName
            firstName
          }
        }
        id
        status
        trackingNumber
        ushopStatus
        ukDate
        lines {
          id
          quantity
          ushopStatus
          changedDate
          soonDate
          orderLine {
            id
            productName
            orderId
            thumbnail {
              url
              alt
            }
            variant {
              id
              name
              product {
                id
                productType {
                  id
                  name
                }
                ushop {
                  id
                  name
                }
                metadata {
                  key
                  value
                }
              }
            }
            unitPrice {
              gross {
                amount
                currency
              }
            }
          }
        }
      }
    }
  }
`;

export const useOrdernumber = makeQuery<
  Ready2Shipping,
  Ready2ShippingVariables
>(fulfillOrdernumber);
