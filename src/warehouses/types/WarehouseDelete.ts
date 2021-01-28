/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WarehouseErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: WarehouseDelete
// ====================================================

export interface WarehouseDelete_deleteWarehouse_errors {
  __typename: "WarehouseError";
  /**
   * The error code.
   */
  code: WarehouseErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
}

export interface WarehouseDelete_deleteWarehouse {
  __typename: "WarehouseDelete";
  errors: WarehouseDelete_deleteWarehouse_errors[];
}

export interface WarehouseDelete {
  /**
   * Deletes selected warehouse.
   */
  deleteWarehouse: WarehouseDelete_deleteWarehouse | null;
}

export interface WarehouseDeleteVariables {
  id: string;
}
