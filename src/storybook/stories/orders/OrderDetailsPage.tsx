import {
  FulfillmentStatus,
  OrderStatus,
  PaymentChargeStatusEnum
} from "../../../types/globalTypes";
import OrderDetailsPage, {
  OrderDetailsPageProps
} from "../../../orders/components/OrderDetailsPage";
import { countries, order as orderFixture } from "../../../orders/fixtures";

import Decorator from "../../Decorator";
import { Omit } from "@material-ui/core";
import React from "react";
import { adminUserPermissions } from "@saleor/fixtures";
import { storiesOf } from "@storybook/react";

const order = orderFixture();

const props: Omit<OrderDetailsPageProps, "classes"> = {
  countries,
  disabled: false,
  createPackageUrl: () => undefined,
  onBack: () => undefined,
  onBillingAddressEdit: undefined,
  onFulfillmentCancel: () => undefined,
  onFulfillmentTrackingNumberUpdate: () => undefined,
  onInvoiceClick: () => undefined,
  onInvoiceGenerate: () => undefined,
  onInvoiceSend: () => undefined,
  onNoteAdd: undefined,
  onOrderCancel: undefined,
  onOrderFulfill: undefined,
  onPaymentCapture: undefined,
  onPaymentPaid: undefined,
  onPaymentRefund: undefined,
  onPaymentVoid: undefined,
  onProductClick: undefined,
  onProfileView: () => undefined,
  onShippingAddressEdit: undefined,
  onSubmit: () => undefined,
  order,
  saveButtonBarState: "default",
  userPermissions: adminUserPermissions
};

storiesOf("Views / Orders / Order details", module)
  .addDecorator(Decorator)
  .add("default", () => <OrderDetailsPage {...props} />)
  .add("loading", () => <OrderDetailsPage {...props} order={undefined} />)
  .add("pending payment", () => (
    <OrderDetailsPage
      {...props}
      order={{
        ...props.order,
        paymentStatus: PaymentChargeStatusEnum.NOT_CHARGED
      }}
    />
  ))
  .add("payment error", () => (
    <OrderDetailsPage
      {...props}
      order={{
        ...props.order,
        paymentStatus: PaymentChargeStatusEnum.NOT_CHARGED
      }}
    />
  ))
  .add("payment confirmed", () => (
    <OrderDetailsPage
      {...props}
      order={{
        ...props.order,
        paymentStatus: PaymentChargeStatusEnum.FULLY_CHARGED
      }}
    />
  ))
  .add("no payment", () => (
    <OrderDetailsPage
      {...props}
      order={{
        ...props.order,
        paymentStatus: null
      }}
    />
  ))
  .add("refunded payment", () => (
    <OrderDetailsPage
      {...props}
      order={{
        ...props.order,
        paymentStatus: PaymentChargeStatusEnum.FULLY_REFUNDED
      }}
    />
  ))
  .add("rejected payment", () => (
    <OrderDetailsPage
      {...props}
      order={{
        ...props.order,
        paymentStatus: PaymentChargeStatusEnum.NOT_CHARGED
      }}
    />
  ))
  .add("cancelled", () => (
    <OrderDetailsPage
      {...props}
      order={{
        ...props.order,
        fulfillments: props.order.fulfillments.map(fulfillment => ({
          ...fulfillment,
          status: FulfillmentStatus.CANCELED
        })),
        status: OrderStatus.CANCELED
      }}
    />
  ))
  .add("fulfilled", () => (
    <OrderDetailsPage
      {...props}
      order={{
        ...props.order,
        status: OrderStatus.FULFILLED
      }}
    />
  ))
  .add("partially fulfilled", () => (
    <OrderDetailsPage
      {...props}
      order={{
        ...props.order,
        status: OrderStatus.PARTIALLY_FULFILLED
      }}
    />
  ))
  .add("unfulfilled", () => (
    <OrderDetailsPage
      {...props}
      order={{
        ...props.order,
        status: OrderStatus.UNFULFILLED
      }}
    />
  ))
  .add("no shipping address", () => (
    <OrderDetailsPage
      {...props}
      order={{
        ...props.order,
        shippingAddress: null
      }}
    />
  ))
  .add("no customer note", () => (
    <OrderDetailsPage
      {...props}
      order={{
        ...props.order,
        customerNote: ""
      }}
    />
  ));
