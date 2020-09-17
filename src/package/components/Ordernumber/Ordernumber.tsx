import React from "react";

import { useOrdernumber } from "../../queries";
import AddressFulfillment from "./AddressFulfillment";
import OrderFulfillment from "./OrderFulfillment";

export interface OrdernumberProps {
  ordernumber: string;
  lines: any;
  setLines: any;
}

const Ordernumber: React.FC<OrdernumberProps> = ({
  lines,
  ordernumber,
  setLines
}) => {
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

  return filfull.ready2shipping ? (
    <>
      <OrderFulfillment
        checkedlines={lines}
        setLines={setLines}
        fulfillment={filfull?.ready2shipping}
      />
      {filfull?.ready2shipping.others2shipping.map(fulfillment => (
        <OrderFulfillment
          checkedlines={lines}
          setLines={setLines}
          fulfillment={fulfillment}
          key={fulfillment.id}
        />
      ))}
      <AddressFulfillment
        address={filfull?.ready2shipping.order.shippingAddress}
      />
    </>
  ) : (
    <h1>Тохирох бараанууд олдсонгүй</h1>
  );
};

Ordernumber.displayName = "Ordernumber";
export default Ordernumber;
