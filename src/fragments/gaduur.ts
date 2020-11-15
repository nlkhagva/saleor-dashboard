import gql from "graphql-tag";

export const gaduurFragment = gql`
  fragment GaduurFragment on Gaduur {
    id
    name
  }
`;

export const gaduurDetailsFragment = gql`
  fragment GaduurDetailsFragment on Gaduur {
    id
    name
    shippingType
    isPublished
    publicationDate
    status
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
