import { ushopDetailsFragment } from "@saleor/fragments/ushop";
import makeMutation from "@saleor/hooks/makeMutation";
import gql from "graphql-tag";

import { UshopCreate, UshopCreateVariables } from "./types/UshopCreate";
import { UshopDelete, UshopDeleteVariables } from "./types/UshopDelete";
import { UshopUpdate, UshopUpdateVariables } from "./types/UshopUpdate";

const deleteUshop = gql`
  mutation UshopDelete($id: ID!) {
    ushopDelete(id: $id) {
      errors {
        message
        field
      }
    }
  }
`;
export const useUshopDelete = makeMutation<UshopDelete, UshopDeleteVariables>(
  deleteUshop
);

const createUshop = gql`
  ${ushopDetailsFragment}
  mutation UshopCreate($input: UshopInput!) {
    ushopCreate(input: $input) {
      errors {
        message
        field
      }
      shop {
        ...UshopDetailsFragment
      }
    }
  }
`;
export const useUshopCreate = makeMutation<UshopCreate, UshopCreateVariables>(
  createUshop
);

const updateUshop = gql`
  ${ushopDetailsFragment}
  mutation UshopUpdate($id: ID!, $input: UshopInput!) {
    ushopUpdate(id: $id, input: $input) {
      errors {
        message
        field
      }
      shop {
        ...UshopDetailsFragment
      }
    }
  }
`;
export const useUshopUpdate = makeMutation<UshopUpdate, UshopUpdateVariables>(
  updateUshop
);

const logoUshop = gql`
  ${ushopDetailsFragment}
  mutation UshopUpdate($id: ID!, $input: UshopInput!) {
    ushopUpdate(id: $id, input: $input) {
      errors {
        message
        field
      }
      shop {
        ...UshopDetailsFragment
      }
    }
  }
`;
export const useLogoUshop = makeMutation<UshopUpdate, UshopUpdateVariables>(
  logoUshop
);