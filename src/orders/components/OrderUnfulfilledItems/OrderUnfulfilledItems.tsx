import { AVATAR_MARGIN } from "@saleor/components/TableCellAvatar";
import Card from "@material-ui/core/Card";
import CardTitle from "@saleor/components/CardTitle";
import { OrderDetails_order_lines } from "../../types/OrderDetails";
import { PRODUCT_TYPE_SHIPPING } from "@saleor/constants";
import React from "react";
import ResponsiveTable from "@saleor/components/ResponsiveTable";
import StatusLabel from "@saleor/components/StatusLabel";
import UshopTable from "./UshopTable";
import { makeStyles } from "@material-ui/core/styles";
import { useIntl } from "react-intl";

const useStyles = makeStyles(
  {
    clickableRow: {
      cursor: "pointer"
    },
    colName: {
      paddingLeft: 0,
      width: "auto"
    },
    colNameLabel: {
      marginLeft: AVATAR_MARGIN
    },
    colNumber: {
      width: 70
    },
    colPrice: {
      textAlign: "right",
      width: 120
    },
    colQuantity: {
      textAlign: "center",
      width: 120
    },
    colSku: {
      textAlign: "right",
      textOverflow: "ellipsis",
      width: 120
    },
    colTotal: {
      textAlign: "right",
      width: 120
    },
    statusBar: {
      paddingTop: 0
    },
    table: {
      tableLayout: "auto"
    }
  },
  { name: "OrderUnfulfilledItems" }
);

interface OrderUnfulfilledItemsProps {
  canFulfill: boolean;
  lines: OrderDetails_order_lines[];
  onFulfill: (ushop: string) => void;
}

const OrderUnfulfilledItems: React.FC<OrderUnfulfilledItemsProps> = props => {
  const { canFulfill, lines, onFulfill } = props;
  const classes = useStyles(props);

  const intl = useIntl();

  const ushops = [];
  const productLines = lines.filter(
    i => i.variant.product?.productType.id !== PRODUCT_TYPE_SHIPPING
  );
  const shippingUkLines = lines.filter(
    i => i.variant.product?.productType.id === PRODUCT_TYPE_SHIPPING
  );

  productLines.map(line => {
    const shop = ushops.find(u => u.id === line.variant.product.ushop.id);
    if (!shop) {
      ushops.push({
        ...line.variant.product.ushop,
        lines: [line],
        ukShipping: shippingUkLines.find(
          i => line.variant.product.ushop.id === i.variant.product.ushop.id
        )
      });
    } else {
      shop.lines.push(line);
    }
  });

  const un_quantity = productLines
    .map(line => line.quantity - line.quantityFulfilled)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <>
      {un_quantity > 0 && (
        <Card>
          <CardTitle
            title={
              <StatusLabel
                label={intl.formatMessage(
                  {
                    defaultMessage: "Unfulfilled ({quantity})",
                    description: "section header"
                  },
                  {
                    quantity: un_quantity
                  }
                )}
                status="error"
              />
            }
          />
          <ResponsiveTable className={classes.table}>
            {ushops.map(ushop => (
              <UshopTable
                ushop={ushop}
                classes={classes}
                key={ushop.id}
                canFulfill={canFulfill}
                onFulfill={onFulfill}
              />
            ))}
          </ResponsiveTable>
        </Card>
      )}
    </>
  );
};
OrderUnfulfilledItems.displayName = "OrderUnfulfilledItems";
export default OrderUnfulfilledItems;
