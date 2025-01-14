import ProductUpdatePage, {
  ProductUpdatePageProps
} from "@saleor/products/components/ProductUpdatePage";
import { fetchMoreProps, listActionsProps } from "@saleor/fixtures";

import Decorator from "../../Decorator";
import { ProductErrorCode } from "@saleor/types/globalTypes";
import { ProductUpdatePageFormData } from "@saleor/products/utils/data";
import React from "react";
import { collections } from "@saleor/collections/fixtures";
import placeholderImage from "@assets/images/placeholder255x255.png";
import { product as productFixture } from "@saleor/products/fixtures";
import { storiesOf } from "@storybook/react";
import { taxTypes } from "../taxes/fixtures";
import { warehouseList } from "@saleor/warehouses/fixtures";

const product = productFixture(placeholderImage);

const props: ProductUpdatePageProps = {
  ...listActionsProps,
  categories: [product.category],
  ushops: [],
  collections,
  defaultWeightUnit: "kg",
  disabled: false,
  errors: [],
  fetchCategories: () => undefined,
  fetchUshops: () => undefined,
  fetchCollections: () => undefined,
  fetchMoreCategories: fetchMoreProps,
  fetchMoreUshops: fetchMoreProps,
  fetchMoreCollections: fetchMoreProps,
  header: product.name,
  images: product.images,
  onBack: () => undefined,
  onDelete: () => undefined,
  onImageDelete: () => undefined,
  onImageUpload: () => undefined,
  onSetDefaultVariant: () => undefined,
  onSubmit: () => undefined,
  onVariantAdd: () => undefined,
  onVariantReorder: () => undefined,
  onVariantShow: () => undefined,
  onVariantsAdd: () => undefined,
  placeholderImage,
  product,
  saveButtonBarState: "default",
  taxTypes,
  variants: product.variants,
  warehouses: warehouseList
};

storiesOf("Views / Products / Product edit", module)
  .addDecorator(Decorator)
  .add("when data is fully loaded", () => <ProductUpdatePage {...props} />)
  .add("when product has no images", () => (
    <ProductUpdatePage {...props} images={[]} />
  ))
  .add("when product has no variants", () => (
    <ProductUpdatePage
      {...props}
      product={{
        ...product,
        productType: { ...product.productType, hasVariants: false }
      }}
    />
  ))
  .add("when loading data", () => (
    <ProductUpdatePage
      {...props}
      disabled={true}
      header={undefined}
      categories={[]}
      variants={undefined}
      product={undefined}
      collections={undefined}
      images={undefined}
    />
  ))
  .add("no variants", () => (
    <ProductUpdatePage
      {...props}
      product={{
        ...props.product,
        productType: {
          ...product.productType,
          hasVariants: false
        }
      }}
    />
  ))
  .add("no stock and no variants", () => (
    <ProductUpdatePage
      {...props}
      product={{
        ...product,
        productType: {
          ...product.productType,
          hasVariants: false
        },
        variants: [
          {
            ...product.variants[0],
            stocks: []
          }
        ]
      }}
    />
  ))
  .add("no product attributes", () => (
    <ProductUpdatePage
      {...props}
      product={{
        ...props.product,
        attributes: []
      }}
    />
  ))
  .add("form errors", () => (
    <ProductUpdatePage
      {...props}
      errors={([
        "basePrice",
        "category",
        "chargeTaxes",
        "collections",
        "isPublished",
        "name",
        "publicationDate",
        "seoDescription",
        "seoTitle",
        "sku",
        "stockQuantity"
      ] as Array<keyof ProductUpdatePageFormData>).map(field => ({
        __typename: "ProductError",
        code: ProductErrorCode.INVALID,
        field
      }))}
    />
  ));
