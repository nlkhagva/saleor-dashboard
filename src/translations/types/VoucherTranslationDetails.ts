/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCodeEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: VoucherTranslationDetails
// ====================================================

export interface VoucherTranslationDetails_voucher_translation_language {
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

export interface VoucherTranslationDetails_voucher_translation {
  __typename: "VoucherTranslation";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Translation language.
   */
  language: VoucherTranslationDetails_voucher_translation_language;
  name: string | null;
}

export interface VoucherTranslationDetails_voucher {
  __typename: "Voucher";
  /**
   * The ID of the object.
   */
  id: string;
  name: string | null;
  /**
   * Returns translated voucher fields for the given language code.
   */
  translation: VoucherTranslationDetails_voucher_translation | null;
}

export interface VoucherTranslationDetails {
  /**
   * Look up a voucher by ID.
   */
  voucher: VoucherTranslationDetails_voucher | null;
}

export interface VoucherTranslationDetailsVariables {
  id: string;
  language: LanguageCodeEnum;
}
