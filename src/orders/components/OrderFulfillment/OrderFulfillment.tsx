import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import CardMenu from "@saleor/components/CardMenu";
import CardTitle from "@saleor/components/CardTitle";
import Money from "@saleor/components/Money";
import ResponsiveTable from "@saleor/components/ResponsiveTable";
import Skeleton from "@saleor/components/Skeleton";
import StatusLabel from "@saleor/components/StatusLabel";
import TableCellAvatar, {
  AVATAR_MARGIN
} from "@saleor/components/TableCellAvatar";
import { metakeyInfo, PRODUCT_TYPE_SHIPPING } from "@saleor/constants";
import classNames from "classnames";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { getStringOrPlaceholder, maybe, renderCollection } from "../../../misc";
import { FulfillmentStatus } from "../../../types/globalTypes";
import { OrderDetails_order_fulfillments } from "../../types/OrderDetails";
// import TableHeader from "./TableHeader";
import UkShippingRow from "./UkShppingRow";

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
  fulfillment: OrderDetails_order_fulfillments;
  orderNumber: string;
  onOrderFulfillmentCancel: () => void;
  onTrackingCodeAdd: () => void;
}

const numberOfColumns = 5;

const OrderFulfillment: React.FC<OrderFulfillmentProps> = props => {
  const {
    fulfillment,
    orderNumber,
    onOrderFulfillmentCancel,
    onTrackingCodeAdd
  } = props;
  const classes = useStyles(props);

  const intl = useIntl();

  const lines = maybe(
    () =>
      fulfillment.lines.filter(
        l =>
          l.orderLine.variant.product.productType.id !== PRODUCT_TYPE_SHIPPING
      ),
    []
  );
  const shippingUk = maybe(() =>
    fulfillment.lines.find(
      l => l.orderLine.variant.product.productType.id === PRODUCT_TYPE_SHIPPING
    )
  );

  const productTotal = {
    amount: lines
      .map(l => l.quantity * l.orderLine.unitPrice.gross.amount)
      .reduce((a, b) => a + b, 0),
    currency: "GBP"
  };

  const status = maybe(() => fulfillment.status);
  const quantity = lines
    ? lines.map(line => line.quantity).reduce((prev, curr) => prev + curr, 0)
    : "...";

  const ushop = maybe(() => lines[0].orderLine.variant.product.ushop);
  const style = status === FulfillmentStatus.FULFILLED ? {} : { opacity: 0.5 };
  const soonDateStatus = ["shipping"];
  const isSoonDate = line =>
    soonDateStatus.includes(line.ustatus.toLowerCase())
      ? line.changedDate
      : line.soonDate;
  const ushopStatusRender = (line: any) =>
    `${line.ustatus} /${isSoonDate(line)}/`;

  return (
    <Card style={style}>
      <CardTitle
        title={
          !!lines ? (
            <StatusLabel
              label={
                <>
                  {ushop?.name}
                  <Typography className={classes.orderNumber} variant="body1">
                    {maybe(
                      () =>
                        `#${orderNumber}-${fulfillment.fulfillmentOrder} 
                        ${
                          status === FulfillmentStatus.FULFILLED
                            ? intl.formatMessage(
                                {
                                  defaultMessage: "Fulfilled ({quantity})",
                                  description: "section header"
                                },
                                {
                                  quantity
                                }
                              )
                            : intl.formatMessage(
                                {
                                  defaultMessage: "Cancelled ({quantity})",
                                  description:
                                    "cancelled fulfillment, section header"
                                },
                                {
                                  quantity
                                }
                              )
                        }`
                    )}
                  </Typography>
                  <span style={{ float: "right", fontSize: "1rem" }}>
                    <Money money={productTotal} />
                    {` (${quantity} бараа) + `}
                    {shippingUk ? (
                      <>
                        <Money money={shippingUk.orderLine.unitPrice.gross} />
                        {" = "}
                        <Money
                          money={{
                            ...productTotal,
                            amount:
                              productTotal.amount +
                              shippingUk.orderLine.unitPrice.gross.amount
                          }}
                        />
                      </>
                    ) : (
                      <>
                        ? =
                        <Money money={productTotal} />
                      </>
                    )}
                  </span>{" "}
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
        toolbar={
          maybe(() => fulfillment.status) === FulfillmentStatus.FULFILLED && (
            <CardMenu
              menuItems={[
                {
                  label: intl.formatMessage({
                    defaultMessage: "Cancel Fulfillment",
                    description: "button"
                  }),
                  onSelect: onOrderFulfillmentCancel
                }
              ]}
            />
          )
        }
      />
      <ResponsiveTable className={classes.table}>
        {/* <TableHeader classes={classes} /> */}
        <TableBody>
          {renderCollection(lines, (line, index) => (
            <TableRow
              className={!!line ? classes.clickableRow : undefined}
              hover={!!line}
              key={maybe(() => line.id)}
            >
              <TableCell className={classes.colNumber}>{index + 1}</TableCell>
              <TableCellAvatar
                className={classes.colName}
                thumbnail={maybe(() => line.orderLine.thumbnail.url)}
              >
                <Typography variant="caption" color="error">
                  {maybe(() => ushopStatusRender(line)) || <Skeleton />}
                </Typography>

                <Typography variant="caption">
                  {maybe(() => line.orderLine.productName) || <Skeleton />}
                </Typography>
                <Typography variant="caption">
                  {maybe(() => line.orderLine.variant.name)}
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
                      // .map(i => `${i.key}: ${i.value}`)
                      .map(i => ` ${i.value}`)
                      .join(", ")}
                  </a>
                </Typography>
              </TableCellAvatar>
              {/* <TableCell className={classes.colSku}>
                <Skeleton />
                {line?.orderLine.productSku || <Skeleton />}
              </TableCell> */}
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
          ))}
          {shippingUk && <UkShippingRow line={shippingUk} classes={classes} />}
          <TableRow>
            <TableCell className={classes.infoRow} colSpan={numberOfColumns}>
              <Typography color="textSecondary" variant="body2">
                <FormattedMessage
                  defaultMessage="Fulfilled from: {warehouseName}"
                  description="fulfillment group"
                  values={{
                    warehouseName: (
                      <Typography
                        className={classNames(classes.infoLabel, {
                          [classes.infoLabelWithMargin]: !!fulfillment?.trackingNumber
                        })}
                        color="textPrimary"
                        variant="body2"
                      >
                        {getStringOrPlaceholder(fulfillment?.warehouse?.name)}
                      </Typography>
                    )
                  }}
                />
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
                className={classes.infoColumn}
              >
                {fulfillment?.trackingNumber && (
                  <FormattedMessage
                    defaultMessage="Захиалгын дугаар: {trackingNumber}"
                    values={{
                      trackingNumber: (
                        <Typography
                          className={classes.infoLabel}
                          color="textPrimary"
                          variant="body2"
                        >
                          {fulfillment.trackingNumber}
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
            </TableCell>
          </TableRow>
        </TableBody>
      </ResponsiveTable>
      {status === FulfillmentStatus.FULFILLED && !fulfillment.trackingNumber && (
        <CardActions>
          <Button color="primary" onClick={onTrackingCodeAdd}>
            <FormattedMessage
              defaultMessage="Add tracking"
              description="fulfillment group tracking number"
            />
          </Button>
        </CardActions>
      )}
      {status === FulfillmentStatus.FULFILLED && fulfillment.trackingNumber && (
        <CardActions>
          <Button color="primary" onClick={onTrackingCodeAdd}>
            <FormattedMessage
              defaultMessage="Edit tracking"
              description="fulfillment group tracking number"
            />
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
OrderFulfillment.displayName = "OrderFulfillment";
export default OrderFulfillment;
