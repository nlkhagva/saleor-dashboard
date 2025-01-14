import ProductCreatePage, {
  ProductCreatePageSubmitData
} from "../components/ProductCreatePage";
import { decimal, weight } from "../../misc";
import { productListUrl, productUrl } from "../urls";
import {
  useMetadataUpdate,
  usePrivateMetadataUpdate
} from "@saleor/utils/metadata/updateMetadata";
import {
  useProductCreateMutation,
  useProductSetAvailabilityForPurchase
} from "../mutations";

import { DEFAULT_INITIAL_SEARCH_DATA } from "@saleor/config";
import React from "react";
import { WindowTitle } from "@saleor/components/WindowTitle";
import createMetadataCreateHandler from "@saleor/utils/handlers/metadataCreateHandler";
import { getProductAvailabilityVariables } from "@saleor/products/utils/handlers";
import useCategorySearch from "@saleor/searches/useCategorySearch";
import useCollectionSearch from "@saleor/searches/useCollectionSearch";
import { useIntl } from "react-intl";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import useProductTypeSearch from "@saleor/searches/useProductTypeSearch";
import useShop from "@saleor/hooks/useShop";
import { useTaxTypeList } from "@saleor/taxes/queries";
import useUshopSearch from "@saleor/searches/useUshopSearch";
import { useWarehouseList } from "@saleor/warehouses/queries";

export const ProductCreateView: React.FC = () => {
  const navigate = useNavigator();
  const notify = useNotifier();
  const shop = useShop();
  const intl = useIntl();
  const {
    loadMore: loadMoreCategories,
    search: searchCategory,
    result: searchCategoryOpts
  } = useCategorySearch({
    variables: DEFAULT_INITIAL_SEARCH_DATA
  });
  const {
    loadMore: loadMoreUshops,
    search: searchUshop,
    result: searchUshopOpts
  } = useUshopSearch({
    variables: DEFAULT_INITIAL_SEARCH_DATA
  });
  const {
    loadMore: loadMoreCollections,
    search: searchCollection,
    result: searchCollectionOpts
  } = useCollectionSearch({
    variables: DEFAULT_INITIAL_SEARCH_DATA
  });
  const {
    loadMore: loadMoreProductTypes,
    search: searchProductTypes,
    result: searchProductTypesOpts
  } = useProductTypeSearch({
    variables: DEFAULT_INITIAL_SEARCH_DATA
  });
  const warehouses = useWarehouseList({
    displayLoader: true,
    variables: {
      first: 50
    }
  });
  const [updateMetadata] = useMetadataUpdate({});
  const [updatePrivateMetadata] = usePrivateMetadataUpdate({});
  const taxTypes = useTaxTypeList({});

  const handleBack = () => navigate(productListUrl());

  const [
    setProductAvailability,
    productAvailabilityOpts
  ] = useProductSetAvailabilityForPurchase({
    onCompleted: data => {
      const errors = data?.productSetAvailabilityForPurchase?.errors;
      if (errors?.length === 0) {
        navigate(productUrl(data.productSetAvailabilityForPurchase.product.id));
      }
    }
  });

  const [productCreate, productCreateOpts] = useProductCreateMutation({
    onCompleted: data => {
      if (data.productCreate.errors.length === 0) {
        notify({
          status: "success",
          text: intl.formatMessage({
            defaultMessage: "Product created"
          })
        });
      }
    }
  });

  const handleCreate = async (formData: ProductCreatePageSubmitData) => {
    const result = await productCreate({
      variables: {
        input: {
          attributes: formData.attributes.map(attribute => ({
            id: attribute.id,
            values: attribute.value
          })),
          basePrice: decimal(formData.basePrice),
          category: formData.category,
          ushop: formData.ushop,
          chargeTaxes: formData.chargeTaxes,
          collections: formData.collections,
          descriptionJson: JSON.stringify(formData.description),
          isPublished: formData.isPublished,
          name: formData.name,
          productType: formData.productType,
          publicationDate:
            formData.publicationDate !== "" ? formData.publicationDate : null,
          seo: {
            description: formData.seoDescription,
            title: formData.seoTitle
          },
          sku: formData.sku,
          slug: formData.slug,
          stocks: formData.stocks.map(stock => ({
            quantity: parseInt(stock.value, 0),
            warehouse: stock.id
          })),
          taxCode: formData.changeTaxCode ? formData.taxCode : undefined,
          trackInventory: formData.trackInventory,
          visibleInListings: formData.visibleInListings,
          weight: weight(formData.weight)
        }
      }
    });

    const productId = result.data.productCreate?.product?.id;

    if (productId) {
      const { isAvailableForPurchase, availableForPurchase } = formData;

      const variables = getProductAvailabilityVariables({
        availableForPurchase,
        isAvailableForPurchase,
        productId
      });

      setProductAvailability({
        variables
      });
    }

    return productId || null;
  };
  const handleSubmit = createMetadataCreateHandler(
    handleCreate,
    updateMetadata,
    updatePrivateMetadata
  );

  return (
    <>
      <WindowTitle
        title={intl.formatMessage({
          defaultMessage: "Create Product",
          description: "window title"
        })}
      />
      <ProductCreatePage
        currency={shop?.defaultCurrency}
        categories={(searchCategoryOpts.data?.search.edges || []).map(
          edge => edge.node
        )}
        ushops={(searchUshopOpts.data?.search.edges || []).map(
          edge => edge.node
        )}
        collections={(searchCollectionOpts.data?.search.edges || []).map(
          edge => edge.node
        )}
        disabled={productCreateOpts.loading || productAvailabilityOpts.loading}
        errors={productCreateOpts.data?.productCreate.errors || []}
        fetchCategories={searchCategory}
        fetchUshops={searchUshop}
        fetchCollections={searchCollection}
        fetchProductTypes={searchProductTypes}
        header={intl.formatMessage({
          defaultMessage: "New Product",
          description: "page header"
        })}
        productTypes={searchProductTypesOpts.data?.search.edges.map(
          edge => edge.node
        )}
        onBack={handleBack}
        onSubmit={handleSubmit}
        saveButtonBarState={productCreateOpts.status}
        fetchMoreCategories={{
          hasMore: searchCategoryOpts.data?.search.pageInfo.hasNextPage,
          loading: searchCategoryOpts.loading,
          onFetchMore: loadMoreCategories
        }}
        fetchMoreUshops={{
          hasMore: searchUshopOpts.data?.search.pageInfo.hasNextPage,
          loading: searchUshopOpts.loading,
          onFetchMore: loadMoreUshops
        }}
        fetchMoreCollections={{
          hasMore: searchCollectionOpts.data?.search.pageInfo.hasNextPage,
          loading: searchCollectionOpts.loading,
          onFetchMore: loadMoreCollections
        }}
        fetchMoreProductTypes={{
          hasMore: searchProductTypesOpts.data?.search.pageInfo.hasNextPage,
          loading: searchProductTypesOpts.loading,
          onFetchMore: loadMoreProductTypes
        }}
        warehouses={
          warehouses.data?.warehouses.edges.map(edge => edge.node) || []
        }
        taxTypes={taxTypes.data?.taxTypes || []}
        weightUnit={shop?.defaultWeightUnit}
      />
    </>
  );
};
export default ProductCreateView;
