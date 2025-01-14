import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles, Theme } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { CSSProperties } from "@material-ui/styles";
import AppHeader from "@saleor/components/AppHeader";
import CardTitle from "@saleor/components/CardTitle";
import { ConfirmButtonTransitionState } from "@saleor/components/ConfirmButton";
import Container from "@saleor/components/Container";
import ControlledCheckbox from "@saleor/components/ControlledCheckbox";
import Form from "@saleor/components/Form";
import PageHeader from "@saleor/components/PageHeader";
import ResponsiveTable from "@saleor/components/ResponsiveTable";
import SaveButtonBar from "@saleor/components/SaveButtonBar";
import Skeleton from "@saleor/components/Skeleton";
import TableCellAvatar from "@saleor/components/TableCellAvatar";
import { metakeyInfo, PRODUCT_TYPE_SHIPPING } from "@saleor/constants";
import { WarehouseFragment } from "@saleor/fragments/types/WarehouseFragment";
import useFormset, { FormsetData } from "@saleor/hooks/useFormset";
import { renderCollection } from "@saleor/misc";
import { maybe } from "@saleor/misc";
import { FulfillOrder_orderFulfill_errors } from "@saleor/orders/types/FulfillOrder";
import {
  OrderFulfillData_order,
  OrderFulfillData_order_lines
} from "@saleor/orders/types/OrderFulfillData";
import {
  OrderErrorCode,
  OrderFulfillStockInput
} from "@saleor/types/globalTypes";
import { update } from "@saleor/utils/lists";
import classNames from "classnames";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

type ClassKey =
  | "actionBar"
  | "table"
  | "colName"
  | "colQuantity"
  | "colQuantityHeader"
  | "colQuantityTotal"
  | "colSku"
  | "error"
  | "full"
  | "quantityInnerInput"
  | "quantityInnerInputNoRemaining"
  | "remainingQuantity";
const useStyles = makeStyles<Theme, OrderFulfillPageProps, ClassKey>(
  theme => {
    const inputPadding: CSSProperties = {
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2)
    };

    return {
      [theme.breakpoints.up("lg")]: {
        colName: {
          width: ({ warehouses }) => (warehouses?.length > 3 ? 250 : "auto")
        }
      },
      [theme.breakpoints.only("md")]: {
        colName: {
          width: ({ warehouses }) => (warehouses?.length > 2 ? 250 : "auto")
        }
      },
      actionBar: {
        flexDirection: "row",
        paddingLeft: theme.spacing(2) + 2
      },
      colName: {
        width: 250
      },
      colQuantity: {
        textAlign: "right",
        width: 210
      },
      colQuantityHeader: {
        textAlign: "right"
      },
      colQuantityTotal: {
        textAlign: "right",
        width: 180
      },
      colSku: {
        textAlign: "right",
        textOverflow: "ellipsis",
        width: 150
      },
      error: {
        color: theme.palette.error.main
      },
      full: {
        fontWeight: 600
      },
      quantityInnerInput: {
        ...inputPadding
      },
      quantityInnerInputNoRemaining: {
        paddingRight: 0
      },
      remainingQuantity: {
        ...inputPadding,
        color: theme.palette.text.secondary,
        whiteSpace: "nowrap"
      },
      table: {
        "&&": {
          tableLayout: "fixed"
        }
      }
    };
  },
  { name: "OrderFulfillPage" }
);

interface OrderFulfillFormData {
  sendInfo: boolean;
  ukDate: any;
  trackingNumber: string;
}
interface OrderFulfillSubmitData extends OrderFulfillFormData {
  items: FormsetData<null, OrderFulfillStockInput[]>;
}
export interface OrderFulfillPageProps {
  disabled: boolean;
  errors: FulfillOrder_orderFulfill_errors[];
  order: OrderFulfillData_order;
  saveButtonBar: ConfirmButtonTransitionState;
  warehouses: WarehouseFragment[];
  onBack: () => void;
  onSubmit: (data: OrderFulfillSubmitData) => void;
  ushopId: string;
}

const initialFormData: OrderFulfillFormData = {
  sendInfo: true,
  trackingNumber: "",
  ukDate: ""
};

function getRemainingQuantity(line: OrderFulfillData_order_lines): number {
  return line.quantity - line.quantityFulfilled;
}

const OrderFulfillPage: React.FC<OrderFulfillPageProps> = props => {
  const {
    ushopId,
    disabled,
    errors,
    order,
    saveButtonBar,
    warehouses,
    onBack,
    onSubmit
  } = props;

  const intl = useIntl();
  const classes = useStyles(props);

  const _ushop = [];

  if (order?.lines) {
    Array.from(order?.lines)
      .filter(line => line.variant.product.ushop.id === ushopId)
      .filter(line => getRemainingQuantity(line) > 0)
      .forEach(line => {
        if (line.variant.product.productType.id !== PRODUCT_TYPE_SHIPPING) {
          _ushop.unshift(line);
        } else {
          _ushop.push(line);
        }
      });
  }

  // order?.lines
  //   .filter(line => line.variant.product.ushop.id === ushopId)
  //   .filter(line => getRemainingQuantity(line) > 0)
  //   .map(line => {});

  const { change: formsetChange, data: formsetData } = useFormset<
    null,
    OrderFulfillStockInput[]
  >(
    _ushop
      ?.filter(line => line.variant.product.ushop.id === ushopId)
      .filter(line => getRemainingQuantity(line) > 0)
      .map(line => ({
        data: null,
        id: line.id,
        label: line.variant.attributes
          .map(attribute =>
            attribute.values
              .map(attributeValue => attributeValue.name)
              .join(" , ")
          )
          .join(" / "),
        value: line.variant.stocks.map(stock => ({
          quantity:
            warehouses?.length === 1
              ? getRemainingQuantity(line)
              : 0 /** gants aguulahtai uyd l engej bolno */,
          warehouse: stock.warehouse.id
        }))
      }))
  );

  const handleSubmit = (formData: OrderFulfillFormData) =>
    onSubmit({
      ...formData,
      items: formsetData
    });

  return (
    <Container>
      <AppHeader onBack={onBack}>
        {order?.number
          ? intl.formatMessage(
              {
                defaultMessage: "Order #{orderNumber}",
                description: "page header with order number"
              },
              {
                orderNumber: order.number
              }
            )
          : intl.formatMessage({
              defaultMessage: "Order",
              description: "page header"
            })}
      </AppHeader>
      <PageHeader
        title={intl.formatMessage(
          {
            defaultMessage: "Захиалгын дугаар. {orderNumber} - Худалдан авалт",
            description: "page header"
          },
          {
            orderNumber: order?.number
          }
        )}
      />
      <Form initial={initialFormData} onSubmit={handleSubmit}>
        {({ change, data, submit }) => (
          <>
            <Card>
              <CardTitle
                title={
                  order?.lines.filter(
                    line => line.variant.product.ushop.id === ushopId
                  )[0].variant.product.ushop.name
                }
              />
              <ResponsiveTable className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.colName}>
                      <FormattedMessage defaultMessage="Product name" />
                    </TableCell>
                    {/* <TableCell className={classes.colSku}>
                      <FormattedMessage
                        defaultMessage="SKU"
                        description="product's sku"
                      />
                    </TableCell> */}
                    {warehouses?.map(warehouse => (
                      <TableCell
                        key={warehouse.id}
                        className={classNames(
                          classes.colQuantity,
                          classes.colQuantityHeader
                        )}
                      >
                        {warehouse.name}
                      </TableCell>
                    ))}
                    <TableCell className={classes.colQuantityTotal}>
                      <FormattedMessage
                        defaultMessage="Quantity to fulfill"
                        description="quantity of fulfilled products"
                      />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {renderCollection(
                    _ushop
                      ?.filter(
                        line => line.variant.product.ushop.id === ushopId
                      )
                      .filter(line => getRemainingQuantity(line) > 0),
                    (line, lineIndex) => {
                      if (!line) {
                        return (
                          <TableRow key={lineIndex}>
                            <TableCellAvatar className={classes.colName}>
                              <Skeleton />
                            </TableCellAvatar>
                            {/* <TableCell className={classes.colSku}>
                              <Skeleton />
                            </TableCell> */}
                            {warehouses?.map(warehouse => (
                              <TableCell
                                className={classes.colQuantity}
                                key={warehouse.id}
                              >
                                <Skeleton />
                              </TableCell>
                            ))}
                            <TableCell className={classes.colQuantityTotal}>
                              {" "}
                              <Skeleton />
                            </TableCell>
                          </TableRow>
                        );
                      }

                      const remainingQuantity = getRemainingQuantity(line);
                      const quantityToFulfill = formsetData[
                        lineIndex
                      ].value.reduce(
                        (quantityToFulfill, lineInput) =>
                          quantityToFulfill + (lineInput.quantity || 0),
                        0
                      );
                      const overfulfill = remainingQuantity < quantityToFulfill;

                      return (
                        <TableRow key={line.id}>
                          <TableCellAvatar
                            className={classes.colName}
                            thumbnail={line?.thumbnail?.url}
                          >
                            <a
                              target="_blank"
                              href={maybe(
                                () =>
                                  (line?.variant.product.metadata || []).find(
                                    i => i.key === "url"
                                  ).value
                              )}
                            >
                              {line.productName}
                            </a>
                            <Typography color="textSecondary" variant="caption">
                              {line.variant.attributes
                                .map(attribute =>
                                  attribute.values
                                    .map(attributeValue => attributeValue.name)
                                    .join(", ")
                                )
                                .join(" / ")}
                            </Typography>
                            <Typography color="textSecondary" variant="caption">
                              {(
                                line?.variant.product.metadata.filter(
                                  i => i.value && metakeyInfo.includes(i.key)
                                ) || []
                              )
                                .map(i => `${i.key}: ${i.value}`)
                                .join(", ")}
                            </Typography>
                            <Typography color="textSecondary" variant="caption">
                              SKU: {line.variant.sku}
                            </Typography>
                          </TableCellAvatar>
                          {/* <TableCell className={classes.colSku}>
                            {line.variant.sku}
                          </TableCell> */}
                          {warehouses?.map(warehouse => {
                            const warehouseStock = line.variant.stocks.find(
                              stock => stock.warehouse.id === warehouse.id
                            );
                            const formsetStock = formsetData[
                              lineIndex
                            ].value.find(
                              line => line.warehouse === warehouse.id
                            );

                            if (!warehouseStock) {
                              return (
                                <TableCell
                                  key="skeleton"
                                  className={classNames(
                                    classes.colQuantity,
                                    classes.error
                                  )}
                                >
                                  <FormattedMessage
                                    defaultMessage="No Stock"
                                    description="no variant stock in warehouse"
                                  />
                                </TableCell>
                              );
                            }

                            // const availableQuantity =
                            //   warehouseStock.quantity -
                            //   warehouseStock.quantityAllocated;

                            const warehouseAllocation = line.allocations.find(
                              allocation =>
                                allocation.warehouse.id === warehouse.id
                            );
                            const allocatedQuantityForLine =
                              warehouseAllocation?.quantity || 0;
                            const availableQuantity =
                              warehouseStock.quantity -
                              warehouseStock.quantityAllocated +
                              allocatedQuantityForLine;

                            return (
                              <TableCell
                                className={classes.colQuantity}
                                key={warehouseStock.id}
                              >
                                <TextField
                                  type="number"
                                  inputProps={{
                                    className: classNames(
                                      classes.quantityInnerInput,
                                      {
                                        [classes.quantityInnerInputNoRemaining]: !line
                                          .variant.trackInventory
                                      }
                                    ),
                                    max: (
                                      line.variant.trackInventory &&
                                      warehouseStock.quantity
                                    ).toString(),
                                    min: 0,
                                    style: { textAlign: "right" }
                                  }}
                                  fullWidth
                                  value={formsetStock.quantity}
                                  onChange={event =>
                                    formsetChange(
                                      line.id,
                                      update(
                                        {
                                          quantity: parseInt(
                                            event.target.value,
                                            10
                                          ),
                                          warehouse: warehouse.id
                                        },
                                        formsetData[lineIndex].value,
                                        (a, b) => a.warehouse === b.warehouse
                                      )
                                    )
                                  }
                                  error={
                                    overfulfill ||
                                    (line.variant.trackInventory &&
                                      formsetStock.quantity >
                                        availableQuantity) ||
                                    !!errors?.find(
                                      err =>
                                        err.warehouse === warehouse.id &&
                                        err.orderLine === line.id &&
                                        err.code ===
                                          OrderErrorCode.INSUFFICIENT_STOCK
                                    )
                                  }
                                  InputProps={{
                                    endAdornment: line.variant
                                      .trackInventory && (
                                      <div
                                        className={classes.remainingQuantity}
                                      >
                                        / {availableQuantity}
                                      </div>
                                    )
                                  }}
                                />
                              </TableCell>
                            );
                          })}
                          <TableCell
                            className={classes.colQuantityTotal}
                            key="total"
                          >
                            <span
                              className={classNames({
                                [classes.error]: overfulfill,
                                [classes.full]:
                                  remainingQuantity <= quantityToFulfill
                              })}
                            >
                              {quantityToFulfill}
                            </span>{" "}
                            / {remainingQuantity}
                          </TableCell>
                        </TableRow>
                      );
                    }
                  )}
                </TableBody>
              </ResponsiveTable>
              <CardActions className={classes.actionBar}>
                <TextField
                  onChange={change}
                  name="trackingNumber"
                  type="string"
                  label="Захиалгын дугаар"
                  value={data.trackingNumber}
                />
                <TextField
                  onChange={change}
                  name="ukDate"
                  type="date"
                  label="Англид ирэх өдөр"
                  value={data.ukDate}
                />
                <ControlledCheckbox
                  checked={data.sendInfo}
                  label={intl.formatMessage({
                    defaultMessage: "Send shipment details to customer",
                    description: "checkbox"
                  })}
                  name="sendInfo"
                  onChange={change}
                />
              </CardActions>
            </Card>
            <SaveButtonBar
              disabled={disabled}
              labels={{
                save: intl.formatMessage({
                  defaultMessage: "Fulfill",
                  description: "fulfill order, button"
                })
              }}
              state={saveButtonBar}
              onSave={submit}
              onCancel={onBack}
            />
          </>
        )}
      </Form>
    </Container>
  );
};

OrderFulfillPage.displayName = "OrderFulfillPage";
export default OrderFulfillPage;
