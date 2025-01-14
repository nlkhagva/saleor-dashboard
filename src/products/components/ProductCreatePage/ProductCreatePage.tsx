import { ContentState, RawDraftContentState, convertToRaw } from "draft-js";
import Metadata, { MetadataFormData } from "@saleor/components/Metadata";
import {
  ProductAttributeValueChoices,
  ProductType,
  getChoices
} from "@saleor/products/utils/data";
import ProductAttributes, {
  ProductAttributeInput,
  ProductAttributeInputData
} from "../ProductAttributes";
import ProductStocks, { ProductStockInput } from "../ProductStocks";
import {
  createAttributeChangeHandler,
  createAttributeMultiChangeHandler,
  createProductTypeSelectHandler
} from "../../utils/handlers";

import AppHeader from "@saleor/components/AppHeader";
import AvailabilityCard from "@saleor/components/AvailabilityCard";
import CardSpacer from "@saleor/components/CardSpacer";
import { ConfirmButtonTransitionState } from "@saleor/components/ConfirmButton";
import Container from "@saleor/components/Container";
import { FetchMoreProps } from "../../../types";
import Form from "@saleor/components/Form";
import Grid from "@saleor/components/Grid";
import { MultiAutocompleteChoiceType } from "@saleor/components/MultiAutocompleteSelectField";
import PageHeader from "@saleor/components/PageHeader";
import ProductDetailsForm from "../ProductDetailsForm";
import { ProductErrorFragment } from "@saleor/fragments/types/ProductErrorFragment";
import ProductOrganization from "../ProductOrganization";
import ProductPricing from "../ProductPricing";
import ProductShipping from "../ProductShipping/ProductShipping";
import ProductTaxes from "../ProductTaxes";
import React from "react";
import SaveButtonBar from "@saleor/components/SaveButtonBar";
import { SearchCategories_search_edges_node } from "@saleor/searches/types/SearchCategories";
import { SearchCollections_search_edges_node } from "@saleor/searches/types/SearchCollections";
import { SearchProductTypes_search_edges_node_productAttributes } from "@saleor/searches/types/SearchProductTypes";
import { SearchUshops_search_edges_node } from "@saleor/searches/types/SearchUshops";
import { SearchWarehouses_search_edges_node } from "@saleor/searches/types/SearchWarehouses";
import SeoForm from "@saleor/components/SeoForm";
import { TaxTypeFragment } from "@saleor/fragments/types/TaxTypeFragment";
import createMultiAutocompleteSelectHandler from "@saleor/utils/handlers/multiAutocompleteSelectChangeHandler";
import createSingleAutocompleteSelectHandler from "@saleor/utils/handlers/singleAutocompleteSelectChangeHandler";
import { sectionNames } from "@saleor/intl";
import useDateLocalize from "@saleor/hooks/useDateLocalize";
import useFormset from "@saleor/hooks/useFormset";
import { useIntl } from "react-intl";
import useMetadataChangeTrigger from "@saleor/utils/metadata/useMetadataChangeTrigger";
import useStateFromProps from "@saleor/hooks/useStateFromProps";

interface FormData extends MetadataFormData {
  availableForPurchase: string;
  basePrice: number;
  category: string;
  ushop: string;
  changeTaxCode: boolean;
  chargeTaxes: boolean;
  collections: string[];
  description: RawDraftContentState;
  isAvailable: boolean;
  isAvailableForPurchase: boolean;
  isPublished: boolean;
  name: string;
  slug: string;
  productType: string;
  publicationDate: string;
  seoDescription: string;
  seoTitle: string;
  sku: string;
  stockQuantity: number;
  taxCode: string;
  trackInventory: boolean;
  visibleInListings: boolean;
  wasPrice: number;
  weight: string;
}
export interface ProductCreatePageSubmitData extends FormData {
  attributes: ProductAttributeInput[];
  stocks: ProductStockInput[];
}

interface ProductCreatePageProps {
  errors: ProductErrorFragment[];
  collections: SearchCollections_search_edges_node[];
  categories: SearchCategories_search_edges_node[];
  ushops: SearchUshops_search_edges_node[];
  currency: string;
  disabled: boolean;
  fetchMoreCategories: FetchMoreProps;
  fetchMoreUshops: FetchMoreProps;
  fetchMoreCollections: FetchMoreProps;
  fetchMoreProductTypes: FetchMoreProps;
  productTypes?: Array<{
    id: string;
    name: string;
    hasVariants: boolean;
    productAttributes: SearchProductTypes_search_edges_node_productAttributes[];
  }>;
  header: string;
  saveButtonBarState: ConfirmButtonTransitionState;
  weightUnit: string;
  warehouses: SearchWarehouses_search_edges_node[];
  taxTypes: TaxTypeFragment[];
  fetchCategories: (data: string) => void;
  fetchUshops: (data: string) => void;
  fetchCollections: (data: string) => void;
  fetchProductTypes: (data: string) => void;
  onBack?();
  onSubmit?(data: ProductCreatePageSubmitData);
}

export const ProductCreatePage: React.FC<ProductCreatePageProps> = ({
  currency,
  disabled,
  ushops: ushopChoiceList,
  categories: categoryChoiceList,
  collections: collectionChoiceList,
  errors,
  fetchCategories,
  fetchUshops,
  fetchCollections,
  fetchMoreCategories,
  fetchMoreUshops,
  fetchMoreCollections,
  fetchMoreProductTypes,
  header,
  productTypes: productTypeChoiceList,
  saveButtonBarState,
  warehouses,
  taxTypes,
  onBack,
  fetchProductTypes,
  weightUnit,
  onSubmit
}: ProductCreatePageProps) => {
  const intl = useIntl();
  const localizeDate = useDateLocalize();
  // Form values
  const {
    change: changeAttributeData,
    data: attributes,
    set: setAttributeData
  } = useFormset<ProductAttributeInputData>([]);
  const {
    add: addStock,
    change: changeStockData,
    data: stocks,
    remove: removeStock
  } = useFormset<null, string>([]);

  // Ensures that it will not change after component rerenders, because it
  // generates different block keys and it causes editor to lose its content.
  const initialDescription = React.useRef(
    convertToRaw(ContentState.createFromText(""))
  );

  const {
    makeChangeHandler: makeMetadataChangeHandler
  } = useMetadataChangeTrigger();

  const initialData: FormData = {
    availableForPurchase: "",
    basePrice: 0,
    category: "",
    ushop: "",
    changeTaxCode: false,
    chargeTaxes: false,
    collections: [],
    description: {} as any,
    isAvailable: false,
    isAvailableForPurchase: false,
    isPublished: false,
    metadata: [],
    name: "",
    privateMetadata: [],
    productType: "",
    publicationDate: "",
    seoDescription: "",
    seoTitle: "",
    sku: null,
    slug: "",
    stockQuantity: null,
    taxCode: null,
    trackInventory: false,
    visibleInListings: false,
    wasPrice: 0,
    weight: ""
  };

  // Display values
  const [selectedAttributes, setSelectedAttributes] = useStateFromProps<
    ProductAttributeValueChoices[]
  >([]);

  const [selectedCategory, setSelectedCategory] = useStateFromProps("");
  const [selectedUshop, setSelectedUshop] = useStateFromProps("");

  const [selectedCollections, setSelectedCollections] = useStateFromProps<
    MultiAutocompleteChoiceType[]
  >([]);

  const [productType, setProductType] = React.useState<ProductType>(null);
  const [selectedTaxType, setSelectedTaxType] = useStateFromProps(null);

  const categories = getChoices(categoryChoiceList);
  const ushops = getChoices(ushopChoiceList);
  const collections = getChoices(collectionChoiceList);
  const productTypes = getChoices(productTypeChoiceList);
  const taxTypeChoices =
    taxTypes?.map(taxType => ({
      label: taxType.description,
      value: taxType.taxCode
    })) || [];

  const handleSubmit = (data: FormData) =>
    onSubmit({
      ...data,
      attributes,
      stocks
    });

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

        const handleProductTypeSelect = createProductTypeSelectHandler(
          change,
          setAttributeData,
          setSelectedAttributes,
          setProductType,
          productTypeChoiceList
        );
        const handleTaxTypeSelect = createSingleAutocompleteSelectHandler(
          change,
          setSelectedTaxType,
          taxTypeChoices
        );

        const changeMetadata = makeMetadataChangeHandler(change);

        return (
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
                  initialDescription={initialDescription.current}
                  onChange={change}
                />
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
                {!!productType && !productType.hasVariants && (
                  <>
                    <ProductShipping
                      data={data}
                      disabled={disabled}
                      errors={errors}
                      weightUnit={weightUnit}
                      onChange={change}
                    />
                    <ProductPricing
                      currency={currency}
                      data={data}
                      disabled={disabled}
                      errors={errors}
                      onChange={change}
                    />
                    <CardSpacer />
                    <ProductStocks
                      data={data}
                      disabled={disabled}
                      onFormDataChange={change}
                      errors={errors}
                      stocks={stocks}
                      warehouses={warehouses}
                      onChange={(id, value) => {
                        triggerChange();
                        changeStockData(id, value);
                      }}
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
                    <CardSpacer />
                  </>
                )}
                <SeoForm
                  allowEmptySlug={true}
                  helperText={intl.formatMessage({
                    defaultMessage:
                      "Add search engine title and description to make this product easier to find"
                  })}
                  title={data.seoTitle}
                  slug={data.slug}
                  slugPlaceholder={data.name}
                  titlePlaceholder={data.name}
                  description={data.seoDescription}
                  descriptionPlaceholder={data.seoTitle}
                  loading={disabled}
                  onChange={change}
                />
                <CardSpacer />
                <Metadata data={data} onChange={changeMetadata} />
              </div>
              <div>
                <ProductOrganization
                  canChangeType={true}
                  categories={categories}
                  ushops={ushops}
                  categoryInputDisplayValue={selectedCategory}
                  ushopInputDisplayValue={selectedUshop}
                  collections={collections}
                  data={data}
                  disabled={disabled}
                  errors={errors}
                  fetchCategories={fetchCategories}
                  fetchUshops={fetchUshops}
                  fetchCollections={fetchCollections}
                  fetchMoreCategories={fetchMoreCategories}
                  fetchMoreUshops={fetchMoreUshops}
                  fetchMoreCollections={fetchMoreCollections}
                  fetchMoreProductTypes={fetchMoreProductTypes}
                  fetchProductTypes={fetchProductTypes}
                  productType={productType}
                  productTypeInputDisplayValue={productType?.name || ""}
                  productTypes={productTypes}
                  onCategoryChange={handleCategorySelect}
                  onUshopChange={handleUshopSelect}
                  onCollectionChange={handleCollectionSelect}
                  onProductTypeChange={handleProductTypeSelect}
                  collectionsInputDisplayValue={selectedCollections}
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
                  onChange={change}
                  onTaxTypeChange={handleTaxTypeSelect}
                  selectedTaxTypeDisplayName={selectedTaxType}
                  taxTypes={taxTypes}
                />
              </div>
            </Grid>
            <SaveButtonBar
              onCancel={onBack}
              onSave={submit}
              state={saveButtonBarState}
              disabled={disabled || !onSubmit || !hasChanged}
            />
          </Container>
        );
      }}
    </Form>
  );
};
ProductCreatePage.displayName = "ProductCreatePage";
export default ProductCreatePage;
