import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CardTitle from "@saleor/components/CardTitle";
import Money from "@saleor/components/Money";
import ResponsiveTable from "@saleor/components/ResponsiveTable";
import Skeleton from "@saleor/components/Skeleton";
import StatusLabel from "@saleor/components/StatusLabel";
import TableCellAvatar, {
  AVATAR_MARGIN
} from "@saleor/components/TableCellAvatar";
import { metakeyInfo, PRODUCT_TYPE_SHIPPING } from "@saleor/constants";
// import TableHeader from "./TableHeader";
import { Ready2Shipping_ready2shipping_others2shipping } from "@saleor/package/types/Ready2Shipping";
import { getUshopStatus } from "@saleor/package/utils";
import React from "react";
import { FormattedMessage } from "react-intl";

import { maybe, renderCollection } from "../../../misc";
import { FulfillmentStatus } from "../../../types/globalTypes";

const useStyles = makeStyles(
  theme => ({
    clickableRow: {
      cursor: "pointer"
    },
    colName: {
      width: "auto"
    },
    colNameLabel: {
      marginLeft: AVATAR_MARGIN
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
    hasShipping: {
      background: "#eee",
      opacity: 0.4
    },
    infoColumn: {
      float: "left",
      width: "50%"
    },
    infoLabel: {
      // display: "inline-block"
    },
    infoLabelWithMargin: {
      marginBottom: theme.spacing()
    },
    infoRow: {
      padding: theme.spacing(2, 3)
    },
    orderNumber: {
      display: "inline",
      marginLeft: theme.spacing(1)
    },
    statusBar: {
      paddingTop: 0
    },
    table: {
      tableLayout: "fixed"
    }
  }),
  { name: "OrderFulfillment" }
);

interface OrderFulfillmentProps {
  fulfillment: Ready2Shipping_ready2shipping_others2shipping;
  checkedlines: any;
  setLines: any;
}

const numberOfColumns = 5;

const OrderFulfillment: React.FC<OrderFulfillmentProps> = props => {
  const { fulfillment, checkedlines, setLines } = props;
  const classes = useStyles(props);

  const lines = maybe(
    () =>
      fulfillment.lines.filter(
        l =>
          l.orderLine.variant.product.productType.id !== PRODUCT_TYPE_SHIPPING
      ),
    []
  );

  const toggleCheck = line => {
    if (checkedlines.find(l => l.id === line.id)) {
      setLines(checkedlines.filter(l => l.id !== line.id));
    } else {
      setLines([...checkedlines, line]);
    }
  };
  const isChecked = line => checkedlines.find(l => l.id === line.id);

  const status = maybe(() => fulfillment.status);
  const quantity = lines
    ? lines.map(line => line.quantity).reduce((prev, curr) => prev + curr, 0)
    : "...";

  const ushop = maybe(() => lines[0].orderLine.variant.product.ushop);
  const style = { marginBottom: "1rem" };

  return (
    <Card style={style}>
      <CardTitle
        title={
          !!lines ? (
            <StatusLabel
              label={
                <>
                  #{fulfillment.order.number}
                  <Typography className={classes.orderNumber} variant="body1">
                    {maybe(
                      () =>
                        `${fulfillment.trackingNumber} - ${ushop?.name} (${quantity})`
                    )}
                  </Typography>
                </>
              }
              status={
                status === FulfillmentStatus.FULFILLED ? "success" : "error"
              }
            />
          ) : (
            <Skeleton />
          )
        }
      />
      <ResponsiveTable className={classes.table}>
        {/* <TableHeader classes={classes} /> */}
        <TableBody>
          {renderCollection(lines, line => {
            const isItemSelected = isChecked(line);
            const isClickable =
              line.ustatus === "NEW" || line.ustatus === "ATUK";
            return (
              <TableRow
                onClick={isClickable ? () => toggleCheck(line) : () => void 0}
                className={
                  isClickable ? classes.clickableRow : classes.hasShipping
                }
                hover={isClickable}
                key={maybe(() => line.id)}
              >
                <TableCell style={{ paddingTop: 15, width: 60 }}>
                  {isItemSelected ? (
                    <CheckBoxIcon color="primary" />
                  ) : (
                    <CheckBoxOutlineBlankIcon color="action" />
                  )}
                </TableCell>
                <TableCellAvatar
                  className={classes.colName}
                  thumbnail={maybe(() => line.orderLine.thumbnail.url)}
                >
                  <Typography variant="caption">
                    {maybe(() => line.orderLine.productName) || <Skeleton />}
                  </Typography>

                  <Typography color="textSecondary" variant="caption">
                    <a
                      target="_blank"
                      href={maybe(
                        () =>
                          (line?.orderLine.variant.product.metadata || []).find(
                            i => i.key === "url"
                          ).value
                      )}
                    >
                      {(
                        line?.orderLine.variant.product.metadata.filter(
                          i => i.value && metakeyInfo.includes(i.key)
                        ) || []
                      )
                        .map(i => `${i.key}: ${i.value}`)
                        .join(", ")}
                    </a>
                  </Typography>
                  <Typography variant="caption" color="primary">
                    {line.changedDate} / {getUshopStatus(line.ustatus)}
                  </Typography>
                </TableCellAvatar>

                <TableCell className={classes.colQuantity}>
                  {line?.quantity || <Skeleton />}
                </TableCell>
                <TableCell className={classes.colPrice}>
                  {maybe(() => line.orderLine.unitPrice.gross) ? (
                    <Money money={line.orderLine.unitPrice.gross} />
                  ) : (
                    <Skeleton />
                  )}
                </TableCell>
                <TableCell className={classes.colTotal}>
                  {maybe(
                    () => line.quantity * line.orderLine.unitPrice.gross.amount
                  ) ? (
                    <Money
                      money={{
                        amount:
                          line.quantity * line.orderLine.unitPrice.gross.amount,
                        currency: line.orderLine.unitPrice.gross.currency
                      }}
                    />
                  ) : (
                    <Skeleton />
                  )}
                </TableCell>
              </TableRow>
            );
          })}
          <TableRow>
            <TableCell className={classes.infoRow} colSpan={numberOfColumns}>
              <Typography
                color="textSecondary"
                variant="body2"
                className={classes.infoColumn}
              >
                {fulfillment?.ukDate && (
                  <FormattedMessage
                    defaultMessage="Оффист ирэх өдөр: {ukDate}"
                    values={{
                      ukDate: (
                        <Typography
                          className={classes.infoLabel}
                          color="textPrimary"
                          variant="body2"
                        >
                          {fulfillment.ukDate}
                        </Typography>
                      )
                    }}
                  />
                )}
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
                className={classes.infoColumn}
              ></Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </ResponsiveTable>
    </Card>
  );
};
OrderFulfillment.displayName = "OrderFulfillment";
export default OrderFulfillment;
