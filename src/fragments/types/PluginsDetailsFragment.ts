/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConfigurationTypeFieldEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: PluginsDetailsFragment
// ====================================================

export interface PluginsDetailsFragment_configuration {
  __typename: "ConfigurationItem";
  /**
   * Name of the field.
   */
  name: string;
  /**
   * Type of the field.
   */
  type: ConfigurationTypeFieldEnum | null;
  /**
   * Current value of the field.
   */
  value: string | null;
  /**
   * Help text for the field.
   */
  helpText: string | null;
  /**
   * Label for the field.
   */
  label: string | null;
}

export interface PluginsDetailsFragment {
  __typename: "Plugin";
  id: string;
  name: string;
  description: string;
  active: boolean;
  configuration: (PluginsDetailsFragment_configuration | null)[] | null;
}
