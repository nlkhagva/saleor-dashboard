import gql from "graphql-tag";

export const gaduurFragment = gql`
  fragment GaduurFragment on Gaduur {
    id
    name
    ustatus
    startDate
    endDate
    receivedDate
    trackingNumber
  }
`;

export const gaduurDetailsFragment = gql`
  fragment GaduurDetailsFragment on Gaduur {
    id
    name
    shippingType
    isPublished
    publicationDate
    ustatus
    startDate
    endDate
    receivedDate
    trackingNumber
    packages(first: 100) {
      edges {
        node {
          id
          name
          netOrGross
          netWeight
          grossWeight
          created
          perkgPrice {
            amount
            currency
          }
          user {
            lastName
            firstName
            phone
          }
          shippingAddress {
            id
            lastName
            firstName
            companyName
            postalCode
            phone
          }
          senderAddress {
            id
            lastName
            firstName
            companyName
            postalCode
            city
            phone
          }
        }
      }
    }
  }
`;
