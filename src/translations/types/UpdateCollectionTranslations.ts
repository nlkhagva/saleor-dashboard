/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TranslationInput, LanguageCodeEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateCollectionTranslations
// ====================================================

export interface UpdateCollectionTranslations_collectionTranslate_errors {
  __typename: "Error";
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface UpdateCollectionTranslations_collectionTranslate_collection_translation_language {
  __typename: "LanguageDisplay";
  /**
   * Full name of the language.
   */
  language: string;
}

export interface UpdateCollectionTranslations_collectionTranslate_collection_translation {
  __typename: "CollectionTranslation";
  /**
   * The ID of the object.
   */
  id: string;
  descriptionJson: any;
  /**
   * Translation language.
   */
  language: UpdateCollectionTranslations_collectionTranslate_collection_translation_language;
  name: string;
  seoDescription: string | null;
  seoTitle: string | null;
}

export interface UpdateCollectionTranslations_collectionTranslate_collection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  descriptionJson: any;
  seoDescription: string | null;
  seoTitle: string | null;
  /**
   * Returns translated collection fields for the given language code.
   */
  translation: UpdateCollectionTranslations_collectionTranslate_collection_translation | null;
}

export interface UpdateCollectionTranslations_collectionTranslate {
  __typename: "CollectionTranslate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: UpdateCollectionTranslations_collectionTranslate_errors[];
  collection: UpdateCollectionTranslations_collectionTranslate_collection | null;
}

export interface UpdateCollectionTranslations {
  /**
   * Creates/Updates translations for collection.
   */
  collectionTranslate: UpdateCollectionTranslations_collectionTranslate | null;
}

export interface UpdateCollectionTranslationsVariables {
  id: string;
  input: TranslationInput;
  language: LanguageCodeEnum;
}
