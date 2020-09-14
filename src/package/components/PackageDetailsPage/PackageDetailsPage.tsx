import {
  Card,
  CardContent,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
} from "@material-ui/core";
import AppHeader from "@saleor/components/AppHeader";
import CardSpacer from "@saleor/components/CardSpacer";
import CardTitle from "@saleor/components/CardTitle";
import { ConfirmButtonTransitionState } from "@saleor/components/ConfirmButton";
import Container from "@saleor/components/Container";
import Form from "@saleor/components/Form";
import Grid from "@saleor/components/Grid";
import PageHeader from "@saleor/components/PageHeader";
import SaveButtonBar from "@saleor/components/SaveButtonBar";
// import SingleSelectField from "@saleor/components/SingleSelectField";
// import useDateLocalize from "@saleor/hooks/useDateLocalize";
import { sectionNames } from "@saleor/intl";
import { maybe } from "@saleor/misc";
import { getFormErrors } from "@saleor/utils/errors";
import React from "react";
import { useIntl } from "react-intl";

export interface PackageFormData {
  name: string;
  width: number;
  height: number;
  length: number;
  netWeight: number;
  grossWeight: number;
  totalGrossAmount: number;
}

import { PackageUpdate_packageUpdate_package } from "../../types/PackageUpdate";

export interface DetailsPageProps {
  disabled: boolean;
  errors: any;
  object: PackageUpdate_packageUpdate_package | null;
  saveButtonBarState: ConfirmButtonTransitionState;
  onBack: () => void;
  onSubmit: (data: PackageFormData) => void;
  onDelete: () => void | null;
}

const PackageDetailsPage: React.FC<DetailsPageProps> = ({
  disabled,
  errors,
  onBack,
  onDelete,
  onSubmit,
  object,
  saveButtonBarState
}) => {
  const intl = useIntl();
  // const localizeDate = useDateLocalize();

  const initialForm: PackageFormData = {
    grossWeight: maybe(() => object?.grossWeight, 0),
    height: maybe(() => object?.height, 0),
    length: maybe(() => object?.length, 0),
    name: maybe(() => object?.name, ""),
    netWeight: maybe(() => object?.netWeight, 0),
    totalGrossAmount: maybe(() => object?.totalGrossAmount, 0),
    width: maybe(() => object?.width, 0)
  };

  const formErrors = getFormErrors(
    [
      "name",
      "width",
      "height",
      "length",
      "netWeight",
      "grossWeight",
      "totalGrossAmount"
    ],
    errors
  );

  return (
    <Form initial={initialForm} onSubmit={onSubmit}>
      {({ change, data, submit }) => (
        <Container>
          <AppHeader onBack={onBack}>
            {intl.formatMessage(sectionNames.package)}
          </AppHeader>
          <PageHeader title={object ? "#" + object.name : "Илгээмж"} />
          <Grid>
            <div>
              <Card data-test="generalInfoSection">
                <CardTitle title="Бараанууд" />
                <CardContent></CardContent>
              </Card>
            </div>
            <div>
              <Card data-test="packageInfoSection">
                <CardTitle title="Илгээмжийн мэдээлэл" />
                <CardContent>
                  <TextField
                    disabled={disabled}
                    error={!!formErrors.name}
                    fullWidth
                    label={intl.formatMessage({
                      defaultMessage: "Илгээмжийн дугаар"
                    })}
                    name={"name" as keyof typeof data}
                    value={data.name}
                    onChange={change}
                  />
                  <CardSpacer />
                  <Divider />
                  <CardSpacer />

                  <TextField
                    disabled={disabled}
                    error={!!formErrors.width}
                    type="number"
                    fullWidth
                    label={intl.formatMessage({
                      defaultMessage: "Өргөн"
                    })}
                    name={"width" as keyof typeof data}
                    value={data.width}
                    onChange={change}
                  />
                  <CardSpacer />

                  <TextField
                    disabled={disabled}
                    error={!!formErrors.height}
                    type="number"
                    fullWidth
                    label={intl.formatMessage({
                      defaultMessage: "Өндөр"
                    })}
                    name={"height" as keyof typeof data}
                    value={data.height}
                    onChange={change}
                  />
                  <CardSpacer />

                  <TextField
                    disabled={disabled}
                    error={!!formErrors.length}
                    fullWidth
                    type="number"
                    label={intl.formatMessage({
                      defaultMessage: "Урт"
                    })}
                    name={"length" as keyof typeof data}
                    value={data.length}
                    onChange={change}
                  />
                  <CardSpacer />

                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-netWeight">
                      {intl.formatMessage({
                        defaultMessage: "Цэвэр жин"
                      })}
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-netWeight"
                      disabled={disabled}
                      type="number"
                      error={!!formErrors.netWeight}
                      name={"netWeight" as keyof typeof data}
                      value={data.netWeight}
                      onChange={change}
                      endAdornment={
                        <InputAdornment position="start">kg</InputAdornment>
                      }
                      labelWidth={60}
                    />
                  </FormControl>
                  <CardSpacer />

                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-grossWeight">
                      {intl.formatMessage({
                        defaultMessage: "Оврийн жин"
                      })}
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-grossWeight"
                      disabled={disabled}
                      type="number"
                      error={!!formErrors.grossWeight}
                      name={"grossWeight" as keyof typeof data}
                      value={data.grossWeight}
                      onChange={change}
                      endAdornment={
                        <InputAdornment position="start">kg</InputAdornment>
                      }
                      labelWidth={60}
                    />
                  </FormControl>
                  <CardSpacer />
                  <Divider />
                  <CardSpacer />
                  {/* <TextField
                    disabled={disabled}
                    error={!!formErrors.totalGrossAmount}
                    fullWidth
                    label={intl.formatMessage({
                      defaultMessage: "Тээврийн үнэ"
                    })}
                    name={"totalGrossAmount" as keyof typeof data}
                    value={data.totalGrossAmount}
                    onChange={change}
                  /> */}

                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">
                      {intl.formatMessage({
                        defaultMessage: "Тээврийн үнэ"
                      })}
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      disabled={disabled}
                      type="number"
                      error={!!formErrors.totalGrossAmount}
                      name={"totalGrossAmount" as keyof typeof data}
                      value={data.totalGrossAmount}
                      onChange={change}
                      startAdornment={
                        <InputAdornment
                          position="start"
                          style={{ marginTop: 12 }}
                        >
                          &pound;
                        </InputAdornment>
                      }
                      labelWidth={60}
                    />
                  </FormControl>
                </CardContent>
              </Card>
            </div>
          </Grid>
          <SaveButtonBar
            disabled={disabled}
            onCancel={onBack}
            onDelete={onDelete}
            onSave={submit}
            state={saveButtonBarState}
          />
        </Container>
      )}
    </Form>
  );
};

PackageDetailsPage.displayName = "PackageDetailsPage";

export default PackageDetailsPage;
