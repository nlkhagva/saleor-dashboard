/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ShippingZoneUpdateInput, ShippingErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateShippingZone
// ====================================================

export interface UpdateShippingZone_shippingZoneUpdate_errors {
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

export interface UpdateShippingZone_shippingZoneUpdate_shippingZone_countries {
  __typename: "CountryDisplay";
  /**
   * Country name.
   */
  country: string;
  /**
   * Country code.
   */
  code: string;
}

export interface UpdateShippingZone_shippingZoneUpdate_shippingZone {
  __typename: "ShippingZone";
  /**
   * List of countries available for the method.
   */
  countries: (UpdateShippingZone_shippingZoneUpdate_shippingZone_countries | null)[] | null;
  default: boolean;
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface UpdateShippingZone_shippingZoneUpdate {
  __typename: "ShippingZoneUpdate";
  errors: UpdateShippingZone_shippingZoneUpdate_errors[];
  shippingZone: UpdateShippingZone_shippingZoneUpdate_shippingZone | null;
}

export interface UpdateShippingZone {
  /**
   * Updates a new shipping zone.
   */
  shippingZoneUpdate: UpdateShippingZone_shippingZoneUpdate | null;
}

export interface UpdateShippingZoneVariables {
  id: string;
  input: ShippingZoneUpdateInput;
}
