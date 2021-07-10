import { Card, CardContent, TextField } from "@material-ui/core";
import CardSpacer from "@saleor/components/CardSpacer";
import CardTitle from "@saleor/components/CardTitle";
// import FileUpload from "@saleor/components/FileUpload";
import RichTextEditor from "@saleor/components/RichTextEditor";
import { commonMessages } from "@saleor/intl";
import { maybe } from "@saleor/misc";
import { UshopFormData } from "@saleor/ushop/components/UshopDetailsPage";
import { UshopUpdate_ushopUpdate_shop } from "@saleor/ushop/types/UshopUpdate";
import React from "react";
import { useIntl } from "react-intl";

import UshopLogo from "../UshopLogo";

export interface UshopGeneralInfoProps {
  data: UshopFormData;
  change: (event: React.ChangeEvent<any>) => void;
  disabled: boolean;
  formErrors: any;
  ushop: UshopUpdate_ushopUpdate_shop | null;
  onImageUpload: (file: File) => void | null;
}
const UshopGeneralInfo: React.FC<UshopGeneralInfoProps> = props => {
  const { data, change, disabled, formErrors, ushop, onImageUpload } = props;
  const intl = useIntl();

  return (
    <Card data-test="generalInfoSection">
      <CardTitle
        title={intl.formatMessage(commonMessages.generalInformations)}
      />
      <CardContent>
        <TextField
          disabled={disabled}
          error={!!formErrors.name}
          fullWidth
          label={intl.formatMessage({
            defaultMessage: "Нэр"
          })}
          name={"name" as keyof typeof data}
          value={data.name}
          onChange={change}
        />

        {/* <FileUpload disabled={disabled} error /> */}
        <CardSpacer />
        <TextField
          disabled={disabled}
          error={!!formErrors.url}
          fullWidth
          label={intl.formatMessage({
            defaultMessage: "URL"
          })}
          name={"url" as keyof typeof data}
          value={data.url}
          onChange={change}
        />
        <CardSpacer />

        {ushop && (
          <>
            <UshopLogo onImageUpload={onImageUpload} ushop={ushop} />
            <CardSpacer />
          </>
        )}

        <RichTextEditor
          disabled={disabled}
          error={!!formErrors.descriptionJson}
          helperText={""}
          initial={maybe(() => JSON.parse(ushop.descriptionJson))}
          label={intl.formatMessage({
            defaultMessage: "Description",
            description: "ushop description"
          })}
          name={"description" as keyof FormData}
          onChange={change}
        />
      </CardContent>
    </Card>
  );
};

UshopGeneralInfo.displayName = "UshopGeneralInfo";
export default UshopGeneralInfo;
