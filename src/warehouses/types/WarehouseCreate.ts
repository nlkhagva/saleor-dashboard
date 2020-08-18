/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WarehouseCreateInput, WarehouseErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: WarehouseCreate
// ====================================================

export interface WarehouseCreate_createWarehouse_errors {
  __typename: "WarehouseError";
  /**
   * The error code.
   */
  code: WarehouseErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
}

export interface WarehouseCreate_createWarehouse_warehouse_shippingZones_edges_node {
  __typename: "ShippingZone";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface WarehouseCreate_createWarehouse_warehouse_shippingZones_edges {
  __typename: "ShippingZoneCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: WarehouseCreate_createWarehouse_warehouse_shippingZones_edges_node;
}

export interface WarehouseCreate_createWarehouse_warehouse_shippingZones {
  __typename: "ShippingZoneCountableConnection";
  edges: WarehouseCreate_createWarehouse_warehouse_shippingZones_edges[];
}

export interface WarehouseCreate_createWarehouse_warehouse_address_country {
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

export interface WarehouseCreate_createWarehouse_warehouse_address {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  /**
   * Shop's default country.
   */
  country: WarehouseCreate_createWarehouse_warehouse_address_country;
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

export interface WarehouseCreate_createWarehouse_warehouse {
  __typename: "Warehouse";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  shippingZones: WarehouseCreate_createWarehouse_warehouse_shippingZones;
  address: WarehouseCreate_createWarehouse_warehouse_address;
}

export interface WarehouseCreate_createWarehouse {
  __typename: "WarehouseCreate";
  errors: WarehouseCreate_createWarehouse_errors[];
  warehouse: WarehouseCreate_createWarehouse_warehouse | null;
}

export interface WarehouseCreate {
  /**
   * Creates new warehouse.
   */
  createWarehouse: WarehouseCreate_createWarehouse | null;
}

export interface WarehouseCreateVariables {
  input: WarehouseCreateInput;
}
