/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCodeEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: PageTranslationDetails
// ====================================================

export interface PageTranslationDetails_page_translation_language {
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

export interface PageTranslationDetails_page_translation {
  __typename: "PageTranslation";
  /**
   * The ID of the object.
   */
  id: string;
  contentJson: any;
  seoDescription: string | null;
  seoTitle: string | null;
  title: string;
  /**
   * Translation language.
   */
  language: PageTranslationDetails_page_translation_language;
}

export interface PageTranslationDetails_page {
  __typename: "Page";
  /**
   * The ID of the object.
   */
  id: string;
  contentJson: any;
  seoDescription: string | null;
  seoTitle: string | null;
  title: string;
  /**
   * Returns translated page fields for the given language code.
   */
  translation: PageTranslationDetails_page_translation | null;
}

export interface PageTranslationDetails {
  /**
   * Look up a page by ID or slug.
   */
  page: PageTranslationDetails_page | null;
}

export interface PageTranslationDetailsVariables {
  id: string;
  language: LanguageCodeEnum;
}
