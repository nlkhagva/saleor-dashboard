import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Hr from "@saleor/components/Hr";
import Skeleton from "@saleor/components/Skeleton";
import { maybe } from "@saleor/misc";
import React from "react";
import { FormattedMessage } from "react-intl";

export interface CustomerProps {
  shippingAddress: any;
  senderAddress: any;
}

const useStyles = makeStyles(
  theme => ({
    sectionHeader: {
      alignItems: "center",
      display: "flex",
      marginBottom: theme.spacing(3)
    },
    sectionHeaderTitle: {
      flex: 1,
      fontWeight: 600 as const,
      lineHeight: 1,
      textTransform: "uppercase"
    },
    sectionHeaderToolbar: {
      marginRight: -theme.spacing(2)
    },
    userEmail: {
      fontWeight: 600 as const,
      marginBottom: theme.spacing(1)
    }
  }),
  { name: "OrderCustomer" }
);

const Customer: React.FC<CustomerProps> = props => {
  const { shippingAddress, senderAddress } = props;
  const classes = useStyles(props);

  return (
    <Card>
      <CardContent>
        <div className={classes.sectionHeader}>
          <Typography className={classes.sectionHeaderTitle}>
            <FormattedMessage defaultMessage="Shipping Address" />
          </Typography>
        </div>
        {shippingAddress === undefined ? (
          <Skeleton />
        ) : shippingAddress === null ? (
          <Typography>
            <FormattedMessage
              defaultMessage="Not set"
              description="shipping address is not set in draft order"
              id="orderCustomerShippingAddressNotSet"
            />
          </Typography>
        ) : (
          <>
            {shippingAddress.companyName && (
              <Typography>{shippingAddress.companyName}</Typography>
            )}
            <Typography>
              {shippingAddress.firstName} {shippingAddress.lastName}
            </Typography>
            <Typography>
              {shippingAddress.streetAddress1}
              <br />
              {shippingAddress.streetAddress2}
            </Typography>
            <Typography>
              {shippingAddress.postalCode} {shippingAddress.city}
              {shippingAddress.cityArea ? ", " + shippingAddress.cityArea : ""}
            </Typography>
            <Typography>
              {shippingAddress.countryArea
                ? shippingAddress.countryArea +
                  ", " +
                  shippingAddress.country.country
                : shippingAddress.country.country}
            </Typography>
            <Typography>{shippingAddress.phone}</Typography>
          </>
        )}
      </CardContent>
      <Hr />
      <CardContent>
        <div className={classes.sectionHeader}>
          <Typography className={classes.sectionHeaderTitle}>
            <FormattedMessage defaultMessage="Sender Address" />
          </Typography>
        </div>
        {senderAddress === undefined ? (
          <Skeleton />
        ) : senderAddress === null ? (
          <Typography>
            <FormattedMessage
              defaultMessage="Not set"
              description="no address is set in draft order"
              id="orderCustomerSenderAddressNotSet"
            />
          </Typography>
        ) : maybe(() => shippingAddress.id) === senderAddress.id ? (
          <Typography>
            <FormattedMessage
              defaultMessage="Same as shipping address"
              description="sender address"
            />
          </Typography>
        ) : (
          <>
            {senderAddress.companyName && (
              <Typography>{senderAddress.companyName}</Typography>
            )}
            <Typography>
              {senderAddress.firstName} {senderAddress.lastName}
            </Typography>
            <Typography>
              {senderAddress.streetAddress1}
              <br />
              {senderAddress.streetAddress2}
            </Typography>
            <Typography>
              {senderAddress.postalCode} {senderAddress.city}
              {senderAddress.cityArea ? ", " + senderAddress.cityArea : ""}
            </Typography>
            <Typography>
              {senderAddress.countryArea
                ? senderAddress.countryArea +
                  ", " +
                  senderAddress.country.country
                : senderAddress.country.country}
            </Typography>
            <Typography>{senderAddress.phone}</Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

Customer.displayName = "CustomerComp";
export default Customer;
