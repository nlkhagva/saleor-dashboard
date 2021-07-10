import { Card, CardContent, Typography } from "@material-ui/core";
import CardTitle from "@saleor/components/CardTitle";
// import SingleSelectField from "@saleor/components/SingleSelectField";
// import useDateLocalize from "@saleor/hooks/useDateLocalize";
import React from "react";

export interface PackageFormData {
  name: string;
  width: number;
  height: number;
  length: number;
  netWeight: number;
  grossWeight: number;
  totalGrossAmount: number;
}

export interface AddressFulfillmentProps {
  address: any;
}

const AddressFulfillment: React.FC<AddressFulfillmentProps> = ({ address }) => (
  // const localizeDate = useDateLocalize();

  <Card data-test="packageAddressInfoSection" style={{ marginBottom: "1rem" }}>
    <CardTitle title="Хүлээн авах хаяг" />
    <CardContent>
      <Typography>
        {address.firstName} {address.lastName}
      </Typography>
      <Typography>
        {address.companyName} {address.phone}
      </Typography>
      <Typography>{address.streetAddress1}</Typography>
      <Typography>{address.streetAddress2}</Typography>
      <Typography>{address.postCode}</Typography>
      <Typography>
        {address.city} {address.cityArea}
      </Typography>
      <Typography>
        {address.country.country} {address.countryArea}
      </Typography>
    </CardContent>
  </Card>
);

AddressFulfillment.displayName = "AddressFulfillment";

export default AddressFulfillment;
