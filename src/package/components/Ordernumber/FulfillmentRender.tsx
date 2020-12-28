import { useOrdernumber } from "@saleor/package/queries";
import React from "react";

import AddressFulfillment from "./AddressFulfillment";
import OrderFulfillment from "./OrderFulfillment";

interface Props {
  lines: any;
  setLines: any;
  ordernumber: string;
}

const FulfillmentRender: React.FC<Props> = props => {
  const { ordernumber, lines, setLines } = props;
  const { data: filfull, loading } = useOrdernumber({
    displayLoader: true,
    skip: ordernumber.length < 1,
    variables: {
      ordernumber
    }
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return filfull && filfull.ready2shipping ? (
    <>
      {filfull.ready2shipping?.order && (
        <AddressFulfillment
          address={filfull.ready2shipping.order.shippingAddress}
        />
      )}
      <OrderFulfillment
        checkedlines={lines}
        setLines={setLines}
        fulfillment={filfull?.ready2shipping}
      />
      {filfull.ready2shipping?.others2shipping &&
        filfull.ready2shipping.others2shipping.map(fulfillment => (
          <OrderFulfillment
            checkedlines={lines}
            setLines={setLines}
            fulfillment={fulfillment}
            key={fulfillment.id}
          />
        ))}
    </>
  ) : (
    <h1>Тохирох бараанууд олдсонгүй</h1>
  );
};

FulfillmentRender.displayName = "fulfillment render";
export default FulfillmentRender;
