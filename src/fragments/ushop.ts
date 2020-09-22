import gql from "graphql-tag";

export const ushopFragment = gql`
  fragment UshopFragment on Ushop {
    id
    name
    url
    logoImage {
      alt
      url
    }
  }
`;

export const ushopDetailsFragment = gql`
  ${ushopFragment}
  fragment UshopDetailsFragment on Ushop {
    ...UshopFragment
    description
    descriptionJson
    isPublished
    publicationDate
    rank
    ratingMain
    ratingUkShipping
    ratingProductQuality
    ratingProductPrice
    ratingShuurhai
    ratingProductRank
    listSelection
    productSelection
  }
`;
