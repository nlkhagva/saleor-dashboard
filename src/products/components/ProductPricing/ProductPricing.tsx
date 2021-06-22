import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import CardTitle from "@saleor/components/CardTitle";
import PriceField from "@saleor/components/PriceField";
import { ProductErrorFragment } from "@saleor/fragments/types/ProductErrorFragment";
import { getFormErrors, getProductErrorMessage } from "@saleor/utils/errors";
import React from "react";
import { useIntl } from "react-intl";

const useStyles = makeStyles(
  theme => ({
    root: {
      display: "grid",
      gridColumnGap: theme.spacing(2),
      gridTemplateColumns: "1fr 1fr"
    }
  }),
  { name: "ProductPricing" }
);

interface ProductPricingProps {
  currency?: string;
  data: {
    basePrice: number;
    wasPrice: number;
  };
  disabled: boolean;
  errors: ProductErrorFragment[];
  onChange: (event: React.ChangeEvent<any>) => void;
}

const ProductPricing: React.FC<ProductPricingProps> = props => {
  const { currency, data, disabled, errors, onChange } = props;

  const classes = useStyles(props);
  const intl = useIntl();

  const formErrors = getFormErrors(["basePrice", "wasPrice"], errors);

  return (
    <Card>
      <CardTitle
        title={intl.formatMessage({
          defaultMessage: "Pricing",
          description: "product pricing"
        })}
      />
      <CardContent>
        <div className={classes.root}>
          <PriceField
            disabled={disabled}
            label={intl.formatMessage({
              defaultMessage: "Price",
              description: "product price"
            })}
            error={!!formErrors.basePrice}
            hint={getProductErrorMessage(formErrors.basePrice, intl)}
            name="basePrice"
            value={data.basePrice}
            currencySymbol={currency}
            onChange={onChange}
            InputProps={{
              inputProps: {
                min: 0
              }
            }}
          />
          <PriceField
            disabled={disabled}
            label={intl.formatMessage({
              defaultMessage: "Full price",
              description: "product price"
            })}
            error={!!formErrors.wasPrice}
            hint={getProductErrorMessage(formErrors.wasPrice, intl)}
            name="wasPrice"
            value={data.wasPrice}
            currencySymbol={currency}
            onChange={onChange}
            InputProps={{
              inputProps: {
                min: 0
              }
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};
ProductPricing.displayName = "ProductPricing";
export default ProductPricing;
