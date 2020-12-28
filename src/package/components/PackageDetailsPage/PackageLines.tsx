import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
// import CheckBoxIcon from "@material-ui/icons/CheckBox";
// import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CardTitle from "@saleor/components/CardTitle";
import Money from "@saleor/components/Money";
import ResponsiveTable from "@saleor/components/ResponsiveTable";
import Skeleton from "@saleor/components/Skeleton";
import StatusLabel from "@saleor/components/StatusLabel";
import TableCellAvatar, {
  AVATAR_MARGIN
} from "@saleor/components/TableCellAvatar";
// import { metakeyInfo, PRODUCT_TYPE_SHIPPING } from "@saleor/constants";
import { metakeyInfo } from "@saleor/constants";
import { maybe, renderCollection } from "@saleor/misc";
import { PackageDetails_package_lines } from "@saleor/package/types/PackageDetails";
import { getUshopStatus } from "@saleor/package/utils";
// import { FulfillmentStatus } from "@saleor/types/globalTypes";
import React from "react";
// import { FormattedMessage } from "react-intl";

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
      background: "rgba(24, 119, 242, 0.25)",
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

interface PackageLinesProps {
  lines: Array<PackageDetails_package_lines | null> | null;
}
interface OrderInteface {
  id: number;
  lines: Array<PackageDetails_package_lines | null> | null;
}

// const numberOfColumns = 5;

const PackageLines: React.FC<PackageLinesProps> = props => {
  const { lines } = props;
  const classes = useStyles(props);

  const orders: OrderInteface[] = [];

  lines.map(line => {
    if (line.fulfillmentline.orderLine.orderId) {
      const order = orders.find(
        o => o.id === line.fulfillmentline.orderLine.orderId
      );
      if (order) {
        order.lines = [line, ...order.lines];
      } else {
        orders.push({
          id: line.fulfillmentline.orderLine.orderId,
          lines: [line]
        });
      }
    }
  });

  const style = { marginBottom: "1rem" };

  return (
    <>
      {orders.map(order => (
        <Card style={style} key={order.id}>
          <CardTitle
            title={
              !!lines ? (
                <StatusLabel label={<>#{order.id}</>} status={"success"} />
              ) : (
                <Skeleton />
              )
            }
          />
          <ResponsiveTable className={classes.table}>
            {/* <TableHeader classes={classes} /> */}
            <TableBody>
              {renderCollection(order.lines, line => (
                <TableRow hover={true} key={maybe(() => line.id)}>
                  <TableCellAvatar
                    className={classes.colName}
                    thumbnail={maybe(
                      () => line.fulfillmentline.orderLine.thumbnail.url
                    )}
                  >
                    <Typography variant="caption">
                      {maybe(
                        () => line.fulfillmentline.orderLine.productName
                      ) || <Skeleton />}
                    </Typography>

                    <Typography color="textSecondary" variant="caption">
                      <a
                        target="_blank"
                        href={maybe(
                          () =>
                            (
                              line.fulfillmentline.orderLine.variant.product
                                .metadata || []
                            ).find(i => i.key === "url").value
                        )}
                      >
                        {(
                          line.fulfillmentline.orderLine.variant.product.metadata.filter(
                            i => i.value && metakeyInfo.includes(i.key)
                          ) || []
                        )
                          .map(i => `${i.key}: ${i.value}`)
                          .join(", ")}
                      </a>
                    </Typography>
                    <Typography variant="caption" color="primary">
                      {line.fulfillmentline.changedDate} /{" "}
                      {getUshopStatus(line.fulfillmentline.ustatus)}
                    </Typography>
                  </TableCellAvatar>

                  <TableCell className={classes.colQuantity}>
                    {line?.fulfillmentline.quantity || <Skeleton />}
                  </TableCell>
                  <TableCell className={classes.colPrice}>
                    {maybe(
                      () => line.fulfillmentline.orderLine.unitPrice.gross
                    ) ? (
                      <Money
                        money={line.fulfillmentline.orderLine.unitPrice.gross}
                      />
                    ) : (
                      <Skeleton />
                    )}
                  </TableCell>
                  <TableCell className={classes.colTotal}>
                    {maybe(
                      () =>
                        line.fulfillmentline.quantity *
                        line.fulfillmentline.orderLine.unitPrice.gross.amount
                    ) ? (
                      <Money
                        money={{
                          amount:
                            line.fulfillmentline.quantity *
                            line.fulfillmentline.orderLine.unitPrice.gross
                              .amount,
                          currency:
                            line.fulfillmentline.orderLine.unitPrice.gross
                              .currency
                        }}
                      />
                    ) : (
                      <Skeleton />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </ResponsiveTable>
        </Card>
      ))}
    </>
  );
};
PackageLines.displayName = "PackageLines";
export default PackageLines;
