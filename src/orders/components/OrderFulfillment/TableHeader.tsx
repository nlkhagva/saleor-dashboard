import { TableCell, TableHead, TableRow } from "@material-ui/core";
import React from "react";
import { FormattedMessage } from "react-intl";
const TableHeader = ({ classes }: any) => (
  <TableHead>
    <TableRow>
      <TableCell className={classes.colName}>
        <span className={classes.colNameLabel}>
          <FormattedMessage
            defaultMessage="Product"
            description="product name"
          />
        </span>
      </TableCell>
      <TableCell className={classes.colSku}>
        <FormattedMessage
          defaultMessage="SKU"
          description="ordered product sku"
        />
      </TableCell>
      <TableCell className={classes.colQuantity}>
        <FormattedMessage
          defaultMessage="Quantity"
          description="ordered product quantity"
        />
      </TableCell>
      <TableCell className={classes.colPrice}>
        <FormattedMessage defaultMessage="Price" description="product price" />
      </TableCell>
      <TableCell className={classes.colTotal}>
        <FormattedMessage
          defaultMessage="Total"
          description="order line total price"
        />
      </TableCell>
    </TableRow>
  </TableHead>
);

export default TableHeader;
