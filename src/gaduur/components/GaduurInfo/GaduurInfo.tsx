import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import CardTitle from "@saleor/components/CardTitle";
import { GaduurErrorFragment } from "@saleor/fragments/types/GaduurErrorFragment";
import { FormChange } from "@saleor/hooks/useForm";
import { commonMessages } from "@saleor/intl";
import { getFormErrors } from "@saleor/utils/errors";
import getGaduurErrorMessage from "@saleor/utils/errors/warehouse";
import React from "react";
import { useIntl } from "react-intl";

export interface GaduurInfoProps {
  data: Record<"name", string>;
  disabled: boolean;
  errors: GaduurErrorFragment[];
  onChange: FormChange;
}

const GaduurInfo: React.FC<GaduurInfoProps> = ({
  data,
  disabled,
  errors,
  onChange
}) => {
  const intl = useIntl();

  const formErrors = getFormErrors(["name"], errors);

  return (
    <Card data-test="generalInformationSection">
      <CardTitle
        title={intl.formatMessage(commonMessages.generalInformations)}
      />
      <CardContent>
        <TextField
          disabled={disabled}
          error={!!formErrors.name}
          fullWidth
          helperText={getGaduurErrorMessage(formErrors.name, intl)}
          label={intl.formatMessage({
            defaultMessage: "Gaduur Name"
          })}
          name={"name" as keyof typeof data}
          value={data.name}
          onChange={onChange}
        />
      </CardContent>
    </Card>
  );
};

GaduurInfo.displayName = "GaduurInfo";
export default GaduurInfo;
