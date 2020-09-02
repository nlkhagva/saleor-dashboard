/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AttributeInputTypeEnum, AttributeValueType } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: AttributeDetails
// ====================================================

export interface AttributeDetails_attribute_metadata {
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

export interface AttributeDetails_attribute_privateMetadata {
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

export interface AttributeDetails_attribute_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of a value (unique per attribute).
   */
  slug: string | null;
  /**
   * Type of value (used only when `value` field is set).
   */
  type: AttributeValueType | null;
}

export interface AttributeDetails_attribute {
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
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (AttributeDetails_attribute_metadata | null)[];
  /**
   * List of private metadata items.Requires proper staff permissions to access.
   */
  privateMetadata: (AttributeDetails_attribute_privateMetadata | null)[];
  /**
   * Whether the attribute can be displayed in the admin product list.
   */
  availableInGrid: boolean;
  /**
   * The input type to use for entering attribute values in the dashboard.
   */
  inputType: AttributeInputTypeEnum | null;
  /**
   * The position of the attribute in the storefront navigation (0 by default).
   */
  storefrontSearchPosition: number;
  /**
   * Whether the attribute requires values to be passed or not.
   */
  valueRequired: boolean;
  /**
   * List of attribute's values.
   */
  values: (AttributeDetails_attribute_values | null)[] | null;
}

export interface AttributeDetails {
  /**
   * Look up an attribute by ID.
   */
  attribute: AttributeDetails_attribute | null;
}

export interface AttributeDetailsVariables {
  id: string;
}
