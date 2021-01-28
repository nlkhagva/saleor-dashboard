/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WarehouseErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: WarehouseErrorFragment
// ====================================================

export interface WarehouseErrorFragment {
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
