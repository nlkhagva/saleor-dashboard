import { FormattedMessage, useIntl } from "react-intl";
import MultiAutocompleteSelectField, {
  MultiAutocompleteChoiceType
} from "@saleor/components/MultiAutocompleteSelectField";
import SingleAutocompleteSelectField, {
  SingleAutocompleteChoiceType
} from "@saleor/components/SingleAutocompleteSelectField";
import { getFormErrors, getProductErrorMessage } from "@saleor/utils/errors";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardSpacer from "@saleor/components/CardSpacer";
import CardTitle from "@saleor/components/CardTitle";
import { ChangeEvent } from "@saleor/hooks/useForm";
import { FetchMoreProps } from "@saleor/types";
import { FormSpacer } from "@saleor/components/FormSpacer";
import Hr from "@saleor/components/Hr";
import { ProductErrorFragment } from "@saleor/fragments/types/ProductErrorFragment";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { maybe } from "@saleor/misc";

interface ProductType {
  hasVariants: boolean;
  id: string;
  name: string;
}

const useStyles = makeStyles(
  theme => ({
    card: {
      overflow: "visible"
    },
    cardSubtitle: {
      fontSize: "1rem",
      marginBottom: theme.spacing(0.5)
    },
    label: {
      marginBottom: theme.spacing(0.5)
    }
  }),
  { name: "ProductOrganization" }
);

interface ProductOrganizationProps {
  canChangeType: boolean;
  categories?: SingleAutocompleteChoiceType[];
  ushops?: SingleAutocompleteChoiceType[];
  categoryInputDisplayValue: string;
  ushopInputDisplayValue: string;
  collections?: MultiAutocompleteChoiceType[];
  collectionsInputDisplayValue: MultiAutocompleteChoiceType[];
  data: {
    category: string;
    ushop: string;
    collections: string[];
    productType?: string;
  };
  disabled: boolean;
  errors: ProductErrorFragment[];
  productType?: ProductType;
  productTypeInputDisplayValue?: string;
  productTypes?: SingleAutocompleteChoiceType[];
  fetchCategories: (query: string) => void;
  fetchUshops: (query: string) => void;
  fetchCollections: (query: string) => void;
  fetchMoreCategories: FetchMoreProps;
  fetchMoreUshops: FetchMoreProps;
  fetchMoreCollections: FetchMoreProps;
  fetchMoreProductTypes?: FetchMoreProps;
  fetchProductTypes?: (data: string) => void;
  onCategoryChange: (event: ChangeEvent) => void;
  onUshopChange: (event: ChangeEvent) => void;
  onCollectionChange: (event: ChangeEvent) => void;
  onProductTypeChange?: (event: ChangeEvent) => void;
}

const ProductOrganization: React.FC<ProductOrganizationProps> = props => {
  const {
    canChangeType,
    categories,
    ushops,
    categoryInputDisplayValue,
    ushopInputDisplayValue,
    collections,
    collectionsInputDisplayValue,
    data,
    disabled,
    errors,
    fetchCategories,
    fetchUshops,
    fetchCollections,
    fetchMoreCategories,
    fetchMoreUshops,
    fetchMoreCollections,
    fetchMoreProductTypes,
    fetchProductTypes,
    productType,
    productTypeInputDisplayValue,
    productTypes,
    onCategoryChange,
    onUshopChange,
    onCollectionChange,
    onProductTypeChange
  } = props;

  const classes = useStyles(props);
  const intl = useIntl();

  const formErrors = getFormErrors(
    ["productType", "category", "collections", "ushop"],
    errors
  );

  return (
    <Card className={classes.card}>
      <CardTitle
        title={intl.formatMessage({
          defaultMessage: "Organize Product",
          description: "section header"
        })}
      />
      <CardContent>
        {canChangeType ? (
          <SingleAutocompleteSelectField
            displayValue={productTypeInputDisplayValue}
            error={!!formErrors.productType}
            helperText={getProductErrorMessage(formErrors.productType, intl)}
            name="productType"
            disabled={disabled}
            label={intl.formatMessage({
              defaultMessage: "Product Type"
            })}
            choices={productTypes}
            value={data.productType}
            onChange={onProductTypeChange}
            fetchChoices={fetchProductTypes}
            data-test="product-type"
            {...fetchMoreProductTypes}
          />
        ) : (
          <>
            <Typography className={classes.label} variant="caption">
              <FormattedMessage defaultMessage="Product Type" />
            </Typography>
            <Typography>{maybe(() => productType.name, "...")}</Typography>
            <CardSpacer />
            <Typography className={classes.label} variant="caption">
              <FormattedMessage defaultMessage="Product Type" />
            </Typography>
            <Typography>
              {maybe(
                () =>
                  productType.hasVariants
                    ? intl.formatMessage({
                        defaultMessage: "Configurable",
                        description: "product is configurable"
                      })
                    : intl.formatMessage({
                        defaultMessage: "Simple",
                        description: "product is not configurable"
                      }),
                "..."
              )}
            </Typography>
          </>
        )}
        <FormSpacer />
        <Hr />
        <FormSpacer />
        <SingleAutocompleteSelectField
          displayValue={ushopInputDisplayValue}
          error={!!formErrors.ushop}
          helperText={getProductErrorMessage(formErrors.ushop, intl)}
          disabled={disabled}
          label={intl.formatMessage({
            defaultMessage: "Англи дэлгүүр"
          })}
          choices={disabled ? [] : ushops}
          name="ushop"
          value={data.ushop}
          onChange={onUshopChange}
          fetchChoices={fetchUshops}
          data-test="ushop"
          {...fetchMoreUshops}
        />
        <FormSpacer />
        <Hr />
        <SingleAutocompleteSelectField
          displayValue={categoryInputDisplayValue}
          error={!!formErrors.category}
          helperText={getProductErrorMessage(formErrors.category, intl)}
          disabled={disabled}
          label={intl.formatMessage({
            defaultMessage: "Category"
          })}
          choices={disabled ? [] : categories}
          name="category"
          value={data.category}
          onChange={onCategoryChange}
          fetchChoices={fetchCategories}
          data-test="category"
          {...fetchMoreCategories}
        />
        <FormSpacer />
        <Hr />
        <FormSpacer />
        <MultiAutocompleteSelectField
          displayValues={collectionsInputDisplayValue}
          error={!!formErrors.collections}
          label={intl.formatMessage({
            defaultMessage: "Collections"
          })}
          choices={disabled ? [] : collections}
          name="collections"
          value={data.collections}
          helperText={
            getProductErrorMessage(formErrors.collections, intl) ||
            intl.formatMessage({
              defaultMessage:
                "*Optional. Adding product to collection helps users find it.",
              description: "field is optional"
            })
          }
          onChange={onCollectionChange}
          fetchChoices={fetchCollections}
          data-test="collections"
          {...fetchMoreCollections}
        />
      </CardContent>
    </Card>
  );
};
ProductOrganization.displayName = "ProductOrganization";
export default ProductOrganization;
