/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PackageLinesByFlineIds
// ====================================================

export interface PackageLinesByFlineIds_packageLines_edges_node_fulfillmentline {
  __typename: "FulfillmentLine";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface PackageLinesByFlineIds_packageLines_edges_node_package {
  __typename: "Package";
  /**
   * The ID of the object.
   */
  id: string;
  name: string | null;
}

export interface PackageLinesByFlineIds_packageLines_edges_node {
  __typename: "PackageLine";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  fulfillmentline: PackageLinesByFlineIds_packageLines_edges_node_fulfillmentline | null;
  package: PackageLinesByFlineIds_packageLines_edges_node_package | null;
}

export interface PackageLinesByFlineIds_packageLines_edges {
  __typename: "PackageLineCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: PackageLinesByFlineIds_packageLines_edges_node;
}

export interface PackageLinesByFlineIds_packageLines {
  __typename: "PackageLineCountableConnection";
  edges: PackageLinesByFlineIds_packageLines_edges[];
}

export interface PackageLinesByFlineIds {
  /**
   * list of packageLine
   */
  packageLines: PackageLinesByFlineIds_packageLines | null;
}

export interface PackageLinesByFlineIdsVariables {
  ids?: (string | null)[] | null;
}
