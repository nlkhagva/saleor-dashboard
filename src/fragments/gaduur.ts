import gql from "graphql-tag";

export const gaduurFragment = gql`
  fragment GaduurFragment on Gaduur {
    id
    name
  }
`;

export const gaduurDetailsFragment = gql`
  fragment GaduurDetailsFragment on Gaduur {
    ...GaduurFragment
  }
`;
