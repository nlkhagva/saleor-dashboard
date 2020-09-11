import gql from "graphql-tag";

import { fragmentAddress } from "./address";
import { customerFragment } from "./customers";
import { gaduurFragment } from "./gaduur";

export const packageFragment = gql`
  fragment PackageFragment on Package {
    id
    name
  }
`;

export const packageDetailsFragment = gql`
  ${fragmentAddress}
  ${gaduurFragment}
  ${customerFragment}
  fragment PackageDetailsFragment on Package {
    id
    name
    width
    length
    height
    netWeight
    grossWeight
    upostPK
    netWeight
    grossWeight
    totalGrossAmount
    gaduur {
      ...GaduurFragment
    }
    shippingAddress {
      ...AddressFragment
    }
    senderAddress {
      ...AddressFragment
    }
    user {
      ...CustomerFragment
    }
  }
`;
