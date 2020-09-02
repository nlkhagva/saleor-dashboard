/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AttributeAssignInput, WeightUnitsEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: AssignAttribute
// ====================================================

export interface AssignAttribute_attributeAssign_errors {
  __typename: "Error";
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface AssignAttribute_attributeAssign_productType_taxType {
  __typename: "TaxType";
  /**
   * Description of the tax type.
   */
  description: string | null;
  /**
   * External tax code used to identify given tax group.
   */
  taxCode: string | null;
}

export interface AssignAttribute_attributeAssign_productType_metadata {
  __typename: "MetadataItem";
  /**
   * Key of a metadata item.
   */
  key: string;
  /**
   * Value of a metadata item.
   */
  value: string;
}

export interface AssignAttribute_attributeAssign_productType_privateMetadata {
  __typename: "MetadataItem";
  /**
   * Key of a metadata item.
   */
  key: string;
  /**
   * Value of a metadata item.
   */
  value: string;
}

export interface AssignAttribute_attributeAssign_productType_productAttributes {
  __typename: "Attribute";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of an attribute name.
   */
  slug: string | null;
  /**
   * Whether the attribute should be visible or not in storefront.
   */
  visibleInStorefront: boolean;
  /**
   * Whether the attribute can be filtered in dashboard.
   */
  filterableInDashboard: boolean;
  /**
   * Whether the attribute can be filtered in storefront.
   */
  filterableInStorefront: boolean;
}

export interface AssignAttribute_attributeAssign_productType_variantAttributes {
  __typename: "Attribute";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of an attribute name.
   */
  slug: string | null;
  /**
   * Whether the attribute should be visible or not in storefront.
   */
  visibleInStorefront: boolean;
  /**
   * Whether the attribute can be filtered in dashboard.
   */
  filterableInDashboard: boolean;
  /**
   * Whether the attribute can be filtered in storefront.
   */
  filterableInStorefront: boolean;
}

export interface AssignAttribute_attributeAssign_productType_weight {
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

export interface AssignAttribute_attributeAssign_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  hasVariants: boolean;
  isShippingRequired: boolean;
  /**
   * A type of tax. Assigned by enabled tax gateway
   */
  taxType: AssignAttribute_attributeAssign_productType_taxType | null;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (AssignAttribute_attributeAssign_productType_metadata | null)[];
  /**
   * List of private metadata items.Requires proper staff permissions to access.
   */
  privateMetadata: (AssignAttribute_attributeAssign_productType_privateMetadata | null)[];
  /**
   * Product attributes of that product type.
   */
  productAttributes: (AssignAttribute_attributeAssign_productType_productAttributes | null)[] | null;
  /**
   * Variant attributes of that product type.
   */
  variantAttributes: (AssignAttribute_attributeAssign_productType_variantAttributes | null)[] | null;
  weight: AssignAttribute_attributeAssign_productType_weight | null;
}

export interface AssignAttribute_attributeAssign {
  __typename: "AttributeAssign";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: AssignAttribute_attributeAssign_errors[];
  /**
   * The updated product type.
   */
  productType: AssignAttribute_attributeAssign_productType | null;
}

export interface AssignAttribute {
  /**
   * Assign attributes to a given product type.
   */
  attributeAssign: AssignAttribute_attributeAssign | null;
}

export interface AssignAttributeVariables {
  id: string;
  operations: AttributeAssignInput[];
}
