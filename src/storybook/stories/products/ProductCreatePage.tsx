import ProductCreatePage, {
  ProductCreatePageSubmitData
} from "../../../products/components/ProductCreatePage";

import Decorator from "../../Decorator";
import { ProductErrorCode } from "@saleor/types/globalTypes";
import React from "react";
import { fetchMoreProps } from "@saleor/fixtures";
import { product as productFixture } from "../../../products/fixtures";
import { productTypes } from "../../../productTypes/fixtures";
import { storiesOf } from "@storybook/react";
import { taxTypes } from "../taxes/fixtures";
import { warehouseList } from "@saleor/warehouses/fixtures";

const product = productFixture("");

storiesOf("Views / Products / Create product", module)
  .addDecorator(Decorator)
  .add("default", () => (
    <ProductCreatePage
      currency="USD"
      disabled={false}
      errors={[]}
      header="Add product"
      collections={product.collections}
      fetchCategories={() => undefined}
      fetchCollections={() => undefined}
      fetchProductTypes={() => undefined}
      fetchMoreCategories={fetchMoreProps}
      fetchMoreCollections={fetchMoreProps}
      fetchMoreProductTypes={fetchMoreProps}
      productTypes={productTypes}
      categories={[product.category]}
      fetchUshops={() => undefined}
      fetchMoreUshops={fetchMoreProps}
      ushops={[]}
      onBack={() => undefined}
      onSubmit={() => undefined}
      saveButtonBarState="default"
      warehouses={warehouseList}
      taxTypes={taxTypes}
      weightUnit="kg"
    />
  ))
  .add("When loading", () => (
    <ProductCreatePage
      currency="USD"
      disabled={true}
      errors={[]}
      header="Add product"
      collections={product.collections}
      fetchCategories={() => undefined}
      fetchCollections={() => undefined}
      fetchProductTypes={() => undefined}
      fetchMoreCategories={fetchMoreProps}
      fetchMoreCollections={fetchMoreProps}
      fetchMoreProductTypes={fetchMoreProps}
      productTypes={productTypes}
      categories={[product.category]}
      fetchUshops={() => undefined}
      fetchMoreUshops={fetchMoreProps}
      ushops={[]}
      onBack={() => undefined}
      onSubmit={() => undefined}
      saveButtonBarState="default"
      warehouses={undefined}
      taxTypes={taxTypes}
      weightUnit="kg"
    />
  ))
  .add("form errors", () => (
    <ProductCreatePage
      fetchUshops={() => undefined}
      fetchMoreUshops={fetchMoreProps}
      ushops={[]}
      currency="USD"
      disabled={false}
      errors={(["name", "productType", "category", "sku"] as Array<
        keyof ProductCreatePageSubmitData
      >).map(field => ({
        __typename: "ProductError",
        code: ProductErrorCode.INVALID,
        field
      }))}
      header="Add product"
      collections={product.collections}
      fetchCategories={() => undefined}
      fetchCollections={() => undefined}
      fetchProductTypes={() => undefined}
      fetchMoreCategories={fetchMoreProps}
      fetchMoreCollections={fetchMoreProps}
      fetchMoreProductTypes={fetchMoreProps}
      productTypes={productTypes}
      categories={[product.category]}
      onBack={() => undefined}
      onSubmit={() => undefined}
      saveButtonBarState="default"
      warehouses={warehouseList}
      taxTypes={taxTypes}
      weightUnit="kg"
    />
  ));
