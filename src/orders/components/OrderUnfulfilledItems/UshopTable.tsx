import { TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import Money from "@saleor/components/Money";
import Skeleton from "@saleor/components/Skeleton";
import TableCellAvatar from "@saleor/components/TableCellAvatar";
import React from "react";

// import { FormattedMessag e } from "react-intl";
import { maybe } from "../../../misc";
import UkShippingRow from "./UkShppingRow";

const UshopTable = ({ ushop, classes }: any) => {
  const metakeyInfo = ["color", "code", "size"];
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
                  <Money money={ushop.ukShipping.unitPrice.gross} />
                  {" = "}
                  <Money
                    money={{
                      ...productTotal,
                      amount:
                        productTotal.amount +
                        ushop.ukShipping.unitPrice.gross.amount
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
        {ushop.lines.map(line => (
          <TableRow
            className={!!line ? classes.clickableRow : undefined}
            hover={!!line}
            key={maybe(() => line.id)}
          >
            <TableCellAvatar
              className={classes.colName}
              thumbnail={maybe(() => line.thumbnail.url)}
            >
              {maybe(() => line.productName) || <Skeleton />}
              <br />
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
            </TableCellAvatar>
            <TableCell className={classes.colSku}>
              {/* {line?.productSku || <Skeleton />} */}
              <Skeleton />
            </TableCell>
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
      </TableBody>
    </>
  );
};

export default UshopTable;