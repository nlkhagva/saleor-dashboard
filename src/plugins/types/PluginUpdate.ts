/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PluginUpdateInput, PluginErrorCode, ConfigurationTypeFieldEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: PluginUpdate
// ====================================================

export interface PluginUpdate_pluginUpdate_errors {
  
  message: string | null;
  __typename: "PluginError";
  code: PluginErrorCode;
  field: string | null;
}

export interface PluginUpdate_pluginUpdate_plugin_configuration {
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

export interface PluginUpdate_pluginUpdate_plugin {
  __typename: "Plugin";
  id: string;
  name: string;
  description: string;
  active: boolean;
  configuration: (PluginUpdate_pluginUpdate_plugin_configuration | null)[] | null;
}

export interface PluginUpdate_pluginUpdate {
  __typename: "PluginUpdate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: PluginUpdate_pluginUpdate_errors[];
  plugin: PluginUpdate_pluginUpdate_plugin | null;
}

export interface PluginUpdate {
  /**
   * Update plugin configuration.
   */
  pluginUpdate: PluginUpdate_pluginUpdate | null;
}

export interface PluginUpdateVariables {
  id: string;
  input: PluginUpdateInput;
}
