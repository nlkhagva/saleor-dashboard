import { packageDetailsFragment } from "@saleor/fragments/package";
import makeMutation from "@saleor/hooks/makeMutation";
import gql from "graphql-tag";

import { PackageCreate, PackageCreateVariables } from "./types/PackageCreate";
import { PackageDelete, PackageDeleteVariables } from "./types/PackageDelete";
import { PackageUpdate, PackageUpdateVariables } from "./types/PackageUpdate";

const deletePackage = gql`
  mutation PackageDelete($id: ID!) {
    packageDelete(id: $id) {
      errors {
        message
        field
      }
    }
  }
`;
export const usePackageDelete = makeMutation<
  PackageDelete,
  PackageDeleteVariables
>(deletePackage);

const createPackage = gql`
  ${packageDetailsFragment}
  mutation PackageCreate($input: PackageInput!) {
    packageCreate(input: $input) {
      errors {
        message
        field
      }
      package {
        ...PackageDetailsFragment
      }
    }
  }
`;
export const usePackageCreate = makeMutation<
  PackageCreate,
  PackageCreateVariables
>(createPackage);

const updatePackage = gql`
  ${packageDetailsFragment}
  mutation PackageUpdate($id: ID!, $input: PackageInput!) {
    packageUpdate(id: $id, input: $input) {
      errors {
        message
        field
      }
      package {
        ...PackageDetailsFragment
      }
    }
  }
`;
export const usePackageUpdate = makeMutation<
  PackageUpdate,
  PackageUpdateVariables
>(updatePackage);
