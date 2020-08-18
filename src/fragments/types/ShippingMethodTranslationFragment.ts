/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCodeEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: ShippingMethodTranslationFragment
// ====================================================

export interface ShippingMethodTranslationFragment_translation_language {
  __typename: "LanguageDisplay";
  /**
   * ISO 639 representation of the language name.
   */
  code: LanguageCodeEnum;
  /**
   * Full name of the language.
   */
  language: string;
}

export interface ShippingMethodTranslationFragment_translation {
  __typename: "ShippingMethodTranslation";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Translation language.
   */
  language: ShippingMethodTranslationFragment_translation_language;
  name: string | null;
}

export interface ShippingMethodTranslationFragment {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * Returns translated shipping method fields for the given language code.
   */
  translation: ShippingMethodTranslationFragment_translation | null;
}
