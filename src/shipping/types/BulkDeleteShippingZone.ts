/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ShippingErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: BulkDeleteShippingZone
// ====================================================

export interface BulkDeleteShippingZone_shippingZoneBulkDelete_errors {
  __typename: "ShippingError";
  /**
   * The error code.
   */
  code: ShippingErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
}

export interface BulkDeleteShippingZone_shippingZoneBulkDelete {
  __typename: "ShippingZoneBulkDelete";
  errors: BulkDeleteShippingZone_shippingZoneBulkDelete_errors[];
}

export interface BulkDeleteShippingZone {
  /**
   * Deletes shipping zones.
   */
  shippingZoneBulkDelete: BulkDeleteShippingZone_shippingZoneBulkDelete | null;
}

export interface BulkDeleteShippingZoneVariables {
  ids: (string | null)[];
}
