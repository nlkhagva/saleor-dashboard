import { FetchMoreProps, ListActions, ReorderAction } from "@saleor/types";
import {
  ProductAttributeValueChoices,
  ProductUpdatePageFormData,
  getAttributeInputFromProduct,
  getChoices,
  getProductUpdatePageFormData,
  getSelectedAttributesFromProduct,
  getStockInputFromProduct
} from "../../utils/data";
import ProductAttributes, { ProductAttributeInput } from "../ProductAttributes";
import {
  ProductDetails_product,
  ProductDetails_product_images,
  ProductDetails_product_variants
} from "../../types/ProductDetails";
import ProductStocks, { ProductStockInput } from "../ProductStocks";
import { RawDraftContentState, convertFromRaw } from "draft-js";
import {
  createAttributeChangeHandler,
  createAttributeMultiChangeHandler
} from "../../utils/handlers";

import AppHeader from "@saleor/components/AppHeader";
import AvailabilityCard from "@saleor/components/AvailabilityCard";
import CardSpacer from "@saleor/components/CardSpacer";
import { ConfirmButtonTransitionState } from "@saleor/components/ConfirmButton";
import Container from "@saleor/components/Container";
import Form from "@saleor/components/Form";
import Grid from "@saleor/components/Grid";
import Metadata from "@saleor/components/Metadata/Metadata";
import PageHeader from "@saleor/components/PageHeader";
import ProductDetailsForm from "../ProductDetailsForm";
import { ProductErrorFragment } from "@saleor/fragments/types/ProductErrorFragment";
import ProductImages from "../ProductImages";
import ProductMetaImages from "../ProductMetaImages";
import ProductOrganization from "../ProductOrganization";
import ProductPricing from "../ProductPricing";
import ProductShipping from "../ProductShipping/ProductShipping";
import ProductTaxes from "../ProductTaxes";
import ProductVariants from "../ProductVariants";
import React from "react";
import SaveButtonBar from "@saleor/components/SaveButtonBar";
import { SearchCategories_search_edges_node } from "@saleor/searches/types/SearchCategories";
import { SearchCollections_search_edges_node } from "@saleor/searches/types/SearchCollections";
import { SearchUshops_search_edges_node } from "@saleor/searches/types/SearchUshops";
import SeoForm from "@saleor/components/SeoForm";
import { TaxTypeFragment } from "@saleor/fragments/types/TaxTypeFragment";
import { WarehouseFragment } from "@saleor/fragments/types/WarehouseFragment";
import createMultiAutocompleteSelectHandler from "@saleor/utils/handlers/multiAutocompleteSelectChangeHandler";
import createSingleAutocompleteSelectHandler from "@saleor/utils/handlers/singleAutocompleteSelectChangeHandler";
import { diff } from "fast-array-diff";
import { maybe } from "@saleor/misc";
import { sectionNames } from "@saleor/intl";
import useDateLocalize from "@saleor/hooks/useDateLocalize";
import useFormset from "@saleor/hooks/useFormset";
import { useIntl } from "react-intl";
import useMetadataChangeTrigger from "@saleor/utils/metadata/useMetadataChangeTrigger";
import useStateFromProps from "@saleor/hooks/useStateFromProps";

export interface ProductUpdatePageProps extends ListActions {
  defaultWeightUnit: string;
  errors: ProductErrorFragment[];
  placeholderImage: string;
  collections: SearchCollections_search_edges_node[];
  categories: SearchCategories_search_edges_node[];
  ushops: SearchUshops_search_edges_node[];
  disabled: boolean;
  fetchMoreCategories: FetchMoreProps;
  fetchMoreUshops: FetchMoreProps;
  fetchMoreCollections: FetchMoreProps;
  variants: ProductDetails_product_variants[];
  images: ProductDetails_product_images[];
  product: ProductDetails_product;
  header: string;
  saveButtonBarState: ConfirmButtonTransitionState;
  warehouses: WarehouseFragment[];
  taxTypes: TaxTypeFragment[];
  fetchCategories: (query: string) => void;
  fetchUshops: (query: string) => void;
  fetchCollections: (query: string) => void;
  onVariantsAdd: () => void;
  onVariantShow: (id: string) => () => void;
  onVariantReorder: ReorderAction;
  onImageDelete: (id: string) => () => void;
  onBack?();
  onDelete();
  onImageEdit?(id: string);
  onImageReorder?(event: { oldIndex: number; newIndex: number });
  onImageUpload(file: File);
  onSeoClick?();
  onSubmit?(data: ProductUpdatePageSubmitData);
  onVariantAdd?();
  onSetDefaultVariant();
}

export interface ProductUpdatePageSubmitData extends ProductUpdatePageFormData {
  attributes: ProductAttributeInput[];
  collections: string[];
  addStocks: ProductStockInput[];
  updateStocks: ProductStockInput[];
  removeStocks: string[];
}

export const ProductUpdatePage: React.FC<ProductUpdatePageProps> = ({
  defaultWeightUnit,
  disabled,
  categories: categoryChoiceList,
  ushops: ushopChoiceList,
  collections: collectionChoiceList,
  errors,
  fetchCategories,
  fetchUshops,
  fetchCollections,
  fetchMoreCategories,
  fetchMoreUshops,
  fetchMoreCollections,
  images,
  header,
  placeholderImage,
  product,
  saveButtonBarState,
  variants,
  warehouses,
  taxTypes,
  onBack,
  onDelete,
  onImageDelete,
  onImageEdit,
  onImageReorder,
  onImageUpload,
  onSeoClick,
  onSubmit,
  onVariantAdd,
  onVariantsAdd,
  onSetDefaultVariant,
  onVariantShow,
  onVariantReorder,
  isChecked,
  selected,
  toggle,
  toggleAll,
  toolbar
}) => {
  const intl = useIntl();
  const localizeDate = useDateLocalize();
  const attributeInput = React.useMemo(
    () => getAttributeInputFromProduct(product),
    [product]
  );
  const stockInput = React.useMemo(() => getStockInputFromProduct(product), [
    product
  ]);
  const { change: changeAttributeData, data: attributes } = useFormset(
    attributeInput
  );
  const {
    add: addStock,
    change: changeStockData,
    data: stocks,
    remove: removeStock
  } = useFormset(stockInput);

  const [selectedAttributes, setSelectedAttributes] = useStateFromProps<
    ProductAttributeValueChoices[]
  >(getSelectedAttributesFromProduct(product));

  const [selectedCategory, setSelectedCategory] = useStateFromProps(
    maybe(() => product.category.name, "")
  );
  const [selectedUshop, setSelectedUshop] = useStateFromProps(
    maybe(() => product.ushop.name, "")
  );

  const [selectedCollections, setSelectedCollections] = useStateFromProps(
    getChoices(maybe(() => product.collections, []))
  );

  const [selectedTaxType, setSelectedTaxType] = useStateFromProps(
    product?.taxType.description
  );

  const {
    isMetadataModified,
    isPrivateMetadataModified,
    makeChangeHandler: makeMetadataChangeHandler
  } = useMetadataChangeTrigger();

  const initialData = getProductUpdatePageFormData(product, variants);
  const initialDescription = maybe<RawDraftContentState>(() =>
    JSON.parse(product.descriptionJson)
  );

  const categories = getChoices(categoryChoiceList);
  const ushops = getChoices(ushopChoiceList);
  const collections = getChoices(collectionChoiceList);
  const currency =
    product?.variants?.length && product.variants[0].price.currency;
  const hasVariants = maybe(() => product.productType.hasVariants, false);
  const taxTypeChoices =
    taxTypes?.map(taxType => ({
      label: taxType.description,
      value: taxType.taxCode
    })) || [];

  const handleSubmit = (data: ProductUpdatePageFormData) => {
    const metadata = isMetadataModified ? data.metadata : undefined;
    const privateMetadata = isPrivateMetadataModified
      ? data.privateMetadata
      : undefined;

    if (product.productType.hasVariants) {
      onSubmit({
        ...data,
        addStocks: [],
        attributes,
        metadata,
        privateMetadata,
        removeStocks: [],
        updateStocks: []
      });
    } else {
      const dataStocks = stocks.map(stock => stock.id);
      const variantStocks = product.variants[0]?.stocks.map(
        stock => stock.warehouse.id
      );
      const stockDiff = diff(variantStocks, dataStocks);

      onSubmit({
        ...data,
        addStocks: stocks.filter(stock =>
          stockDiff.added.some(addedStock => addedStock === stock.id)
        ),
        attributes,
        metadata,
        privateMetadata,
        removeStocks: stockDiff.removed,
        updateStocks: stocks.filter(
          stock => !stockDiff.added.some(addedStock => addedStock === stock.id)
        )
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit} initial={initialData} confirmLeave>
      {({ change, data, hasChanged, submit, triggerChange, toggleValue }) => {
        const handleCollectionSelect = createMultiAutocompleteSelectHandler(
          toggleValue,
          setSelectedCollections,
          selectedCollections,
          collections
        );
        const handleCategorySelect = createSingleAutocompleteSelectHandler(
          change,
          setSelectedCategory,
          categories
        );
        const handleUshopSelect = createSingleAutocompleteSelectHandler(
          change,
          setSelectedUshop,
          ushops
        );
        const handleAttributeChange = createAttributeChangeHandler(
          changeAttributeData,
          setSelectedAttributes,
          selectedAttributes,
          attributes,
          triggerChange
        );
        const handleAttributeMultiChange = createAttributeMultiChangeHandler(
          changeAttributeData,
          setSelectedAttributes,
          selectedAttributes,
          attributes,
          triggerChange
        );
        const changeMetadata = makeMetadataChangeHandler(change);
        const handleTaxTypeSelect = createSingleAutocompleteSelectHandler(
          change,
          setSelectedTaxType,
          taxTypeChoices
        );

        return (
          <>
            <Container>
              <AppHeader onBack={onBack}>
                {intl.formatMessage(sectionNames.products)}
              </AppHeader>
              <PageHeader title={header} />
              <Grid>
                <div>
                  <ProductDetailsForm
                    data={data}
                    disabled={disabled}
                    errors={errors}
                    initialDescription={initialDescription}
                    onChange={change}
                  />
                  <CardSpacer />
                  <ProductImages
                    images={images}
                    placeholderImage={placeholderImage}
                    onImageDelete={onImageDelete}
                    onImageReorder={onImageReorder}
                    onImageEdit={onImageEdit}
                    onImageUpload={onImageUpload}
                  />
                  <CardSpacer />
                  <ProductMetaImages product={product} />
                  <CardSpacer />
                  {attributes.length > 0 && (
                    <ProductAttributes
                      attributes={attributes}
                      disabled={disabled}
                      onChange={handleAttributeChange}
                      onMultiChange={handleAttributeMultiChange}
                    />
                  )}
                  <CardSpacer />
                  {!!product?.productType && !hasVariants && (
                    <>
                      <ProductPricing
                        currency={currency}
                        data={data}
                        disabled={disabled}
                        errors={errors}
                        onChange={change}
                      />
                      <CardSpacer />
                    </>
                  )}
                  {hasVariants ? (
                    <ProductVariants
                      disabled={disabled}
                      variants={variants}
                      product={product}
                      fallbackPrice={
                        product?.variants?.length
                          ? product.variants[0].price
                          : undefined
                      }
                      onRowClick={onVariantShow}
                      onVariantAdd={onVariantAdd}
                      onVariantsAdd={onVariantsAdd}
                      onVariantReorder={onVariantReorder}
                      onSetDefaultVariant={onSetDefaultVariant}
                      toolbar={toolbar}
                      isChecked={isChecked}
                      selected={selected}
                      toggle={toggle}
                      toggleAll={toggleAll}
                    />
                  ) : (
                    <>
                      <ProductShipping
                        data={data}
                        disabled={disabled}
                        errors={errors}
                        weightUnit={product?.weight?.unit || defaultWeightUnit}
                        onChange={change}
                      />
                      <CardSpacer />
                      <ProductStocks
                        data={data}
                        disabled={disabled}
                        errors={errors}
                        stocks={stocks}
                        warehouses={warehouses}
                        onChange={(id, value) => {
                          triggerChange();
                          changeStockData(id, value);
                        }}
                        onFormDataChange={change}
                        onWarehouseStockAdd={id => {
                          triggerChange();
                          addStock({
                            data: null,
                            id,
                            label: warehouses.find(
                              warehouse => warehouse.id === id
                            ).name,
                            value: "0"
                          });
                        }}
                        onWarehouseStockDelete={id => {
                          triggerChange();
                          removeStock(id);
                        }}
                      />
                    </>
                  )}
                  <CardSpacer />
                  <SeoForm
                    errors={errors}
                    title={data.seoTitle}
                    titlePlaceholder={data.name}
                    description={data.seoDescription}
                    descriptionPlaceholder={maybe(() =>
                      convertFromRaw(data.description)
                        .getPlainText()
                        .slice(0, 300)
                    )}
                    slug={data.slug}
                    slugPlaceholder={data.name}
                    loading={disabled}
                    onClick={onSeoClick}
                    onChange={change}
                    helperText={intl.formatMessage({
                      defaultMessage:
                        "Add search engine title and description to make this product easier to find"
                    })}
                  />
                  <CardSpacer />
                  <Metadata data={data} onChange={changeMetadata} />
                </div>
                <div>
                  <ProductOrganization
                    canChangeType={false}
                    categories={categories}
                    ushops={ushops}
                    categoryInputDisplayValue={selectedCategory}
                    ushopInputDisplayValue={selectedUshop}
                    collections={collections}
                    collectionsInputDisplayValue={selectedCollections}
                    data={data}
                    disabled={disabled}
                    errors={errors}
                    fetchCategories={fetchCategories}
                    fetchUshops={fetchUshops}
                    fetchCollections={fetchCollections}
                    fetchMoreCategories={fetchMoreCategories}
                    fetchMoreUshops={fetchMoreUshops}
                    fetchMoreCollections={fetchMoreCollections}
                    productType={maybe(() => product.productType)}
                    onCategoryChange={handleCategorySelect}
                    onUshopChange={handleUshopSelect}
                    onCollectionChange={handleCollectionSelect}
                  />
                  <CardSpacer />
                  <AvailabilityCard
                    data={data}
                    errors={errors}
                    disabled={disabled}
                    messages={{
                      hiddenLabel: intl.formatMessage({
                        defaultMessage: "Not published",
                        description: "product label"
                      }),
                      hiddenSecondLabel: intl.formatMessage(
                        {
                          defaultMessage: "will become published on {date}",
                          description: "product publication date label"
                        },
                        {
                          date: localizeDate(data.publicationDate, "L")
                        }
                      ),
                      visibleLabel: intl.formatMessage({
                        defaultMessage: "Published",
                        description: "product label"
                      })
                    }}
                    onChange={change}
                  />
                  <CardSpacer />
                  <ProductTaxes
                    data={data}
                    disabled={disabled}
                    selectedTaxTypeDisplayName={selectedTaxType}
                    taxTypes={taxTypes}
                    onChange={change}
                    onTaxTypeChange={handleTaxTypeSelect}
                  />
                </div>
              </Grid>
              <SaveButtonBar
                onCancel={onBack}
                onDelete={onDelete}
                onSave={submit}
                state={saveButtonBarState}
                disabled={disabled || !hasChanged}
              />
            </Container>
          </>
        );
      }}
    </Form>
  );
};
ProductUpdatePage.displayName = "ProductUpdatePage";
export default ProductUpdatePage;
