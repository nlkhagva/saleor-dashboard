import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Money from "@saleor/components/Money";
import Skeleton from "@saleor/components/Skeleton";
import TableCellAvatar from "@saleor/components/TableCellAvatar";
import { metakeyInfo } from "@saleor/constants";
import React from "react";
import { FormattedMessage } from "react-intl";

// import { FormattedMessag e } from "react-intl";
import { maybe } from "../../../misc";
import UkShippingRow from "./UkShppingRow";

const UshopTable = ({ ushop, classes, canFulfill, onFulfill }: any) => {
  const quantity = ushop.lines
    .map(line => line.quantity - line.quantityFulfilled)
    .reduce((a, b) => a + b, 0);

  const productTotal = {
    ...ushop.lines[0].unitPrice.gross,
    amount: ushop.lines
      .map(
        line =>
          (line.quantity - line.quantityFulfilled) * line.unitPrice.gross.amount
      )
      .reduce((a, b) => a + b, 0)
  };
  const shippingTotal = ushop.ukShipping
    ? ushop.ukShipping.unitPrice.gross.amount * ushop.ukShipping.quantity
    : 0;

  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell className={classes.colName} colSpan={5}>
            <span style={{ textTransform: "uppercase" }}>
              {`${ushop.name} (${quantity})`}
            </span>
            <span style={{ float: "right" }}>
              <Money money={productTotal} />
              {` (${quantity} бараа) + `}
              {ushop.ukShipping ? (
                <>
                  <Money
                    money={{
                      amount: shippingTotal,
                      currency: ushop.ukShipping.unitPrice.gross.currency
                    }}
                  />
                  {" = "}
                  <Money
                    money={{
                      ...productTotal,
                      amount: productTotal.amount + shippingTotal
                    }}
                  />
                </>
              ) : (
                <>
                  ? =
                  <Money money={productTotal} />
                </>
              )}
            </span>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {ushop.lines.map((line, index) => (
          <TableRow
            className={line ? classes.clickableRow : undefined}
            hover={!!line}
            key={maybe(() => line.id)}
          >
            <TableCell className={classes.colNumber}>{index + 1}</TableCell>
            <TableCellAvatar
              className={classes.colName}
              thumbnail={maybe(() => line.thumbnail.url)}
            >
              <Typography variant="caption">
                {maybe(() => line.productName) || <Skeleton />}
              </Typography>
              <Typography variant="caption">
                {maybe(() => line.variant.name)}
              </Typography>

              <Typography color="textSecondary" variant="caption">
                <a
                  target="_blank"
                  href={maybe(
                    () =>
                      (line?.variant.product.metadata || []).find(
                        i => i.key === "url"
                      ).value
                  )}
                >
                  {(
                    line?.variant.product.metadata.filter(
                      i => i.value && metakeyInfo.includes(i.key)
                    ) || []
                  )
                    .map(i => `${i.key}: ${i.value}`)
                    .join(", ")}
                </a>
              </Typography>
              {/* <Typography variant="caption">
                {line?.productSku || <Skeleton />}
              </Typography> */}
            </TableCellAvatar>
            {/* <TableCell className={classes.colSku}>
              
              <Skeleton />
            </TableCell> */}
            <TableCell className={classes.colQuantity}>
              {maybe(() => line.quantity - line.quantityFulfilled) || (
                <Skeleton />
              )}
            </TableCell>
            <TableCell className={classes.colPrice}>
              {maybe(() => line.unitPrice.gross) ? (
                <Money money={line.unitPrice.gross} />
              ) : (
                <Skeleton />
              )}
            </TableCell>
            <TableCell className={classes.colTotal}>
              {maybe(
                () =>
                  (line.quantity - line.quantityFulfilled) *
                  line.unitPrice.gross.amount
              ) ? (
                <Money
                  money={{
                    amount:
                      (line.quantity - line.quantityFulfilled) *
                      line.unitPrice.gross.amount,
                    currency: line.unitPrice.gross.currency
                  }}
                />
              ) : (
                <Skeleton />
              )}
            </TableCell>
          </TableRow>
        ))}
        {ushop.ukShipping && (
          <UkShippingRow line={ushop.ukShipping} classes={classes} />
        )}
        <TableRow>
          <TableCell colSpan={5}>
            {canFulfill && (
              <Button
                variant="text"
                color="primary"
                onClick={() => onFulfill(ushop.id)}
              >
                <FormattedMessage
                  defaultMessage="Fulfill"
                  description="button"
                />
              </Button>
            )}
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

export default UshopTable;
