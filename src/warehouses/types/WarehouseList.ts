/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WarehouseFilterInput, WarehouseSortingInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: WarehouseList
// ====================================================

export interface WarehouseList_warehouses_edges_node_shippingZones_edges_node {
  __typename: "ShippingZone";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface WarehouseList_warehouses_edges_node_shippingZones_edges {
  __typename: "ShippingZoneCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: WarehouseList_warehouses_edges_node_shippingZones_edges_node;
}

export interface WarehouseList_warehouses_edges_node_shippingZones {
  __typename: "ShippingZoneCountableConnection";
  edges: WarehouseList_warehouses_edges_node_shippingZones_edges[];
}

export interface WarehouseList_warehouses_edges_node {
  __typename: "Warehouse";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  shippingZones: WarehouseList_warehouses_edges_node_shippingZones;
}

export interface WarehouseList_warehouses_edges {
  __typename: "WarehouseCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: WarehouseList_warehouses_edges_node;
}

export interface WarehouseList_warehouses_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
}

export interface WarehouseList_warehouses {
  __typename: "WarehouseCountableConnection";
  edges: WarehouseList_warehouses_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: WarehouseList_warehouses_pageInfo;
}

export interface WarehouseList {
  /**
   * List of warehouses.
   */
  warehouses: WarehouseList_warehouses | null;
}

export interface WarehouseListVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
  filter?: WarehouseFilterInput | null;
  sort?: WarehouseSortingInput | null;
}
