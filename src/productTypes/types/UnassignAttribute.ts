/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WeightUnitsEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: UnassignAttribute
// ====================================================

export interface UnassignAttribute_attributeUnassign_errors {
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

export interface UnassignAttribute_attributeUnassign_productType_taxType {
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

export interface UnassignAttribute_attributeUnassign_productType_productAttributes {
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

export interface UnassignAttribute_attributeUnassign_productType_variantAttributes {
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

export interface UnassignAttribute_attributeUnassign_productType_weight {
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

export interface UnassignAttribute_attributeUnassign_productType {
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
  taxType: UnassignAttribute_attributeUnassign_productType_taxType | null;
  /**
   * Product attributes of that product type.
   */
  productAttributes: (UnassignAttribute_attributeUnassign_productType_productAttributes | null)[] | null;
  /**
   * Variant attributes of that product type.
   */
  variantAttributes: (UnassignAttribute_attributeUnassign_productType_variantAttributes | null)[] | null;
  weight: UnassignAttribute_attributeUnassign_productType_weight | null;
}

export interface UnassignAttribute_attributeUnassign {
  __typename: "AttributeUnassign";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: UnassignAttribute_attributeUnassign_errors[];
  /**
   * The updated product type.
   */
  productType: UnassignAttribute_attributeUnassign_productType | null;
}

export interface UnassignAttribute {
  /**
   * Un-assign attributes from a given product type.
   */
  attributeUnassign: UnassignAttribute_attributeUnassign | null;
}

export interface UnassignAttributeVariables {
  id: string;
  ids: (string | null)[];
}
