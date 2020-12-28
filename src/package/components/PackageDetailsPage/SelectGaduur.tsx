import CardSpacer from "@saleor/components/CardSpacer";
import SingleSelectField from "@saleor/components/SingleSelectField";
import React from "react";
import { useIntl } from "react-intl";

export default function SelectedGaduur({ data, formErrors, change, gaduurs }) {
  const intl = useIntl();

  return (
    <>
      <SingleSelectField
        choices={gaduurs}
        disabled={gaduurs.length < 1}
        error={!!formErrors.gaduur}
        label={intl.formatMessage({
          defaultMessage: "Гадуур дагавар",
          description: "attribute's editor component"
        })}
        name="gaduur"
        onChange={change}
        value={data.gaduur}
      />
      <CardSpacer />
    </>
  );
}
