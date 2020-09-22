import { Card, CardContent, TextField } from "@material-ui/core";
import { CardSpacer } from "@saleor/components/CardSpacer";
import CardTitle from "@saleor/components/CardTitle";
import { UshopFormData } from "@saleor/ushop/components/UshopDetailsPage";
// import { UshopUpdate_ushopUpdate_shop } from "@saleor/ushop/types/UshopUpdate";
import React from "react";

export interface UshopCrawlerProps {
  data: UshopFormData;
  change: (event: React.ChangeEvent<any>) => void;
  disabled: boolean;
  formErrors: any;
  // ushop: UshopUpdate_ushopUpdate_shop | null;
}

const UshopCrawler: React.FC<UshopCrawlerProps> = props => {
  const { data, change, disabled, formErrors } = props;

  const fields = [
    {
      field: "listSelection",
      label: "List selection"
    },
    {
      field: "productSelection",
      label: "Product selection"
    }
  ];

  return (
    <Card data-test="generalInfoSection">
      <CardTitle title="Crawler" />
      <CardContent>
        {fields.map(({ field, label }, index) => (
          <React.Fragment key={index}>
            <TextField
              disabled={disabled}
              error={!!formErrors[field]}
              fullWidth
              label={label}
              name={field as keyof typeof data}
              value={data[field]}
              onChange={change}
            />
            <CardSpacer />
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

UshopCrawler.displayName = "UshopCrawler";

export default UshopCrawler;
