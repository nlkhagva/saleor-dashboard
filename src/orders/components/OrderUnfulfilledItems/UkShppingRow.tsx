import { TableCell, TableRow, Typography } from "@material-ui/core";
import Money from "@saleor/components/Money";
import Skeleton from "@saleor/components/Skeleton";
import { maybe } from "@saleor/misc";
import React from "react";

interface UkShippingProps {
  line: any;
  classes: any;
}

const UkShippingRow: React.FC<UkShippingProps> = ({ line, classes }) => (
  <TableRow
    className={!!line ? classes.clickableRow : undefined}
    hover={!!line}
    key={maybe(() => line.id)}
  >
    <TableCell className={classes.colSku} colSpan={3}>
      <Typography variant="body2">
        {maybe(() => line.productName + " - " + line.variant.name) || (
          <Skeleton />
        )}
      </Typography>
    </TableCell>
    <TableCell className={classes.colTotal}>
      {maybe(() => line.quantity * line.unitPrice.gross.amount) ? (
        <Money
          money={{
            amount: line.quantity * line.unitPrice.gross.amount,
            currency: line.unitPrice.gross.currency
          }}
        />
      ) : (
        <Skeleton />
      )}
    </TableCell>
  </TableRow>
);
UkShippingRow.displayName = "UkShippingRow";
export default UkShippingRow;
