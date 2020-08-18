/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WarehouseDetails
// ====================================================

export interface WarehouseDetails_warehouse_shippingZones_edges_node {
  __typename: "ShippingZone";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface WarehouseDetails_warehouse_shippingZones_edges {
  __typename: "ShippingZoneCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: WarehouseDetails_warehouse_shippingZones_edges_node;
}

export interface WarehouseDetails_warehouse_shippingZones {
  __typename: "ShippingZoneCountableConnection";
  edges: WarehouseDetails_warehouse_shippingZones_edges[];
}

export interface WarehouseDetails_warehouse_address_country {
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

export interface WarehouseDetails_warehouse_address {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  /**
   * Shop's default country.
   */
  country: WarehouseDetails_warehouse_address_country;
  countryArea: string;
  firstName: string;
  /**
   * The ID of the object.
   */
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface WarehouseDetails_warehouse {
  __typename: "Warehouse";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  shippingZones: WarehouseDetails_warehouse_shippingZones;
  address: WarehouseDetails_warehouse_address;
}

export interface WarehouseDetails {
  /**
   * Look up a warehouse by ID.
   */
  warehouse: WarehouseDetails_warehouse | null;
}

export interface WarehouseDetailsVariables {
  id: string;
}
