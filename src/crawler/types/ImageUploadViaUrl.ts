/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ImageUploadViaUrl
// ====================================================

export interface ImageUploadViaUrl_productImageCreateViaUrl_product_images {
  __typename: "ProductImage";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The URL of the image.
   */
  url: string;
}

export interface ImageUploadViaUrl_productImageCreateViaUrl_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * List of images for the product.
   */
  images: (ImageUploadViaUrl_productImageCreateViaUrl_product_images | null)[] | null;
}

export interface ImageUploadViaUrl_productImageCreateViaUrl {
  __typename: "ProductImageCreateViaUrl";
  product: ImageUploadViaUrl_productImageCreateViaUrl_product | null;
}

export interface ImageUploadViaUrl {
  /**
   * Create a product image. This mutation must be sent as a `multipart` request.
   * More detailed specs of the upload format can be found here:
   * https: // github.com/jaydenseric/graphql-multipart-request-spec
   */
  productImageCreateViaUrl: ImageUploadViaUrl_productImageCreateViaUrl | null;
}

export interface ImageUploadViaUrlVariables {
  url: string;
  product: string;
}
