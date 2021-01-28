/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ShippingErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteShippingZone
// ====================================================

export interface DeleteShippingZone_shippingZoneDelete_errors {
  __typename: "ShippingError";
  /**
   * The error code.
   */
  code: ShippingErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
}

export interface DeleteShippingZone_shippingZoneDelete {
  __typename: "ShippingZoneDelete";
  errors: DeleteShippingZone_shippingZoneDelete_errors[];
}

export interface DeleteShippingZone {
  /**
   * Deletes a shipping zone.
   */
  shippingZoneDelete: DeleteShippingZone_shippingZoneDelete | null;
}

export interface DeleteShippingZoneVariables {
  id: string;
}
