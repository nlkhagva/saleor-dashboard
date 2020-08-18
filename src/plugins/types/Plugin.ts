/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConfigurationTypeFieldEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: Plugin
// ====================================================

export interface Plugin_plugin_configuration {
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

export interface Plugin_plugin {
  __typename: "Plugin";
  id: string;
  name: string;
  description: string;
  active: boolean;
  configuration: (Plugin_plugin_configuration | null)[] | null;
}

export interface Plugin {
  /**
   * Look up a plugin by ID.
   */
  plugin: Plugin_plugin | null;
}

export interface PluginVariables {
  id: string;
}
