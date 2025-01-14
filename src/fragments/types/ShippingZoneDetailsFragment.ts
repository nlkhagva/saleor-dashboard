/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WeightUnitsEnum, ShippingMethodTypeEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: ShippingZoneDetailsFragment
// ====================================================

export interface ShippingZoneDetailsFragment_countries {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface ShippingZoneDetailsFragment_shippingMethods_minimumOrderPrice {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ShippingZoneDetailsFragment_shippingMethods_minimumOrderWeight {
  __typename: "Weight";
  /**
   * Weight unit.
   */
  unit: WeightUnitsEnum;
  /**
   * Weight value.
   */
  value: number;
}

export interface ShippingZoneDetailsFragment_shippingMethods_maximumOrderPrice {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ShippingZoneDetailsFragment_shippingMethods_maximumOrderWeight {
  __typename: "Weight";
  /**
   * Weight unit.
   */
  unit: WeightUnitsEnum;
  /**
   * Weight value.
   */
  value: number;
}

export interface ShippingZoneDetailsFragment_shippingMethods_price {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ShippingZoneDetailsFragment_shippingMethods {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  minimumOrderPrice: ShippingZoneDetailsFragment_shippingMethods_minimumOrderPrice | null;
  minimumOrderWeight: ShippingZoneDetailsFragment_shippingMethods_minimumOrderWeight | null;
  maximumOrderPrice: ShippingZoneDetailsFragment_shippingMethods_maximumOrderPrice | null;
  maximumOrderWeight: ShippingZoneDetailsFragment_shippingMethods_maximumOrderWeight | null;
  name: string;
  price: ShippingZoneDetailsFragment_shippingMethods_price | null;
  /**
   * Type of the shipping method.
   */
  type: ShippingMethodTypeEnum | null;
}

export interface ShippingZoneDetailsFragment_warehouses {
  __typename: "Warehouse";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface ShippingZoneDetailsFragment {
  __typename: "ShippingZone";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of countries available for the method.
   */
  countries: (ShippingZoneDetailsFragment_countries | null)[] | null;
  name: string;
  default: boolean;
  /**
   * List of shipping methods available for orders shipped to countries within this shipping zone.
   */
  shippingMethods: (ShippingZoneDetailsFragment_shippingMethods | null)[] | null;
  /**
   * List of warehouses for shipping zone.
   */
  warehouses: (ShippingZoneDetailsFragment_warehouses | null)[] | null;
}
