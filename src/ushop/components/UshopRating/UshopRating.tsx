import { Card, CardContent, TextField } from "@material-ui/core";
import { CardSpacer } from "@saleor/components/CardSpacer";
import CardTitle from "@saleor/components/CardTitle";
import { UshopFormData } from "@saleor/ushop/components/UshopDetailsPage";
// import { UshopUpdate_ushopUpdate_shop } from "@saleor/ushop/types/UshopUpdate";
import React from "react";

export interface UshopRatingProps {
  data: UshopFormData;
  change: (event: React.ChangeEvent<any>) => void;
  disabled: boolean;
  formErrors: any;
}

const UshopRating: React.FC<UshopRatingProps> = props => {
  const { data, change, disabled, formErrors } = props;

  const fields = [
    {
      field: "rank",
      label: "Rank"
    },
    {
      field: "ratingMain",
      label: "Дэлгүүрийн Rating"
    },
    {
      field: "ratingProductQuality",
      label: "Барааны чанар"
    },
    {
      field: "ratingProductPrice",
      label: "Барааны үнэ"
    },
    {
      field: "ratingShuurhai",
      label: "Шуурхай тээвэрлэлт"
    },
    {
      field: "ratingProductRank",
      label: "Барааны зэрэглэл"
    }
  ];

  return (
    <Card data-test="generalInfoSection">
      <CardTitle title="Дэлгүүрийн үнэлгээ" />
      <CardContent>
        {fields.map(({ field, label }, index) => (
          <React.Fragment key={index}>
            <TextField
              disabled={disabled}
              error={!!formErrors[field]}
              type="number"
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

UshopRating.displayName = "UshopRating";

export default UshopRating;
