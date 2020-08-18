import { gaduurDetailsFragment } from "@saleor/fragments/gaduur";
import makeMutation from "@saleor/hooks/makeMutation";
import gql from "graphql-tag";

import { GaduurCreate, GaduurCreateVariables } from "./types/GaduurCreate";
import { GaduurDelete, GaduurDeleteVariables } from "./types/GaduurDelete";
import { GaduurUpdate, GaduurUpdateVariables } from "./types/GaduurUpdate";

const deleteGaduur = gql`
  mutation GaduurDelete($id: ID!) {
    gaduurDelete(id: $id) {
      errors {
        message
        field
      }
    }
  }
`;
export const useGaduurDelete = makeMutation<
  GaduurDelete,
  GaduurDeleteVariables
>(deleteGaduur);

const createGaduur = gql`
  ${gaduurDetailsFragment}
  mutation GaduurCreate($input: GaduurInput!) {
    gaduurCreate(input: $input) {
      errors {
        message
        field
      }
      gaduurPackage {
        ...GaduurDetailsFragment
      }
    }
  }
`;
export const useGaduurCreate = makeMutation<
  GaduurCreate,
  GaduurCreateVariables
>(createGaduur);

const updateGaduur = gql`
  ${gaduurDetailsFragment}
  mutation GaduurUpdate($id: ID!, $input: GaduurInput!) {
    gaduurUpdate(id: $id, input: $input) {
      errors {
        message
        field
      }
      gaduurPackage {
        ...GaduurDetailsFragment
      }
    }
  }
`;
export const useGaduurUpdate = makeMutation<
  GaduurUpdate,
  GaduurUpdateVariables
>(updateGaduur);
