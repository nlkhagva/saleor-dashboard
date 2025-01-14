import gql from "graphql-tag";

import { fragmentAddress } from "./address";
import { metadataFragment } from "./metadata";

export const fragmentOrderEvent = gql`
  fragment OrderEventFragment on OrderEvent {
    id
    amount
    date
    email
    emailType
    invoiceNumber
    message
    quantity
    type
    user {
      id
      email
    }
  }
`;

export const fragmentOrderLine = gql`
  fragment OrderLineFragment on OrderLine {
    id
    isShippingRequired
    variant {
      product {
        isAvailableForPurchase
        isPublished
      }
      quantityAvailable
    }
    productName
    productSku
    quantity
    quantityFulfilled
    variant {
      id
      name
      product {
        id
        productType {
          id
          name
        }
        ushop {
          id
          name
        }
        metadata {
          key
          value
        }
      }
    }
    unitPrice {
      gross {
        amount
        currency
      }
      net {
        amount
        currency
      }
    }
    thumbnail {
      url
    }
  }
`;
export const fulfillmentFragment = gql`
  ${fragmentOrderLine}
  fragment FulfillmentFragment on Fulfillment {
    id
    lines {
      id
      quantity
      orderLine {
        ...OrderLineFragment
      }
      changedDate
      soonDate
      ustatus
    }
    fulfillmentOrder
    status
    trackingNumber
    ukDate
    warehouse {
      id
      name
    }
  }
`;

export const invoiceFragment = gql`
  fragment InvoiceFragment on Invoice {
    id
    number
    createdAt
    url
    status
  }
`;

export const fragmentOrderDetails = gql`
  ${fragmentAddress}
  ${fragmentOrderEvent}
  ${fragmentOrderLine}
  ${fulfillmentFragment}
  ${invoiceFragment}
  ${metadataFragment}
  fragment OrderDetailsFragment on Order {
    id
    ...MetadataFragment
    billingAddress {
      ...AddressFragment
    }
    canFinalize
    created
    customerNote
    events {
      ...OrderEventFragment
    }
    fulfillments {
      ...FulfillmentFragment
    }
    lines {
      ...OrderLineFragment
    }
    number
    paymentStatus
    payments {
      id
      gateway
      chargeStatus
      isActive
      created
      modified
      capturedAmount {
        amount
        currency
        localized
      }
    }
    shippingAddress {
      ...AddressFragment
    }
    shippingMethod {
      id
    }
    shippingMethodName
    shippingPrice {
      gross {
        amount
        currency
      }
    }
    status
    subtotal {
      gross {
        amount
        currency
      }
    }
    total {
      gross {
        amount
        currency
      }
      tax {
        amount
        currency
      }
    }
    actions
    totalAuthorized {
      amount
      currency
    }
    totalCaptured {
      amount
      currency
    }
    user {
      id
      email
    }
    userEmail
    availableShippingMethods {
      id
      name
      price {
        amount
        currency
      }
    }
    discount {
      amount
      currency
    }
    invoices {
      ...InvoiceFragment
    }
  }
`;
