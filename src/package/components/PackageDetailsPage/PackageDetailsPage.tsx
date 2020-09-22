import {
  Card,
  CardContent,
  Divider,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
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
import SingleSelectField from "@saleor/components/SingleSelectField";
// import SingleSelectField from "@saleor/components/SingleSelectField";
// import useDateLocalize from "@saleor/hooks/useDateLocalize";
import { sectionNames } from "@saleor/intl";
import { maybe } from "@saleor/misc";
import { PackageDetails_package } from "@saleor/package/types/PackageDetails";
import { PackageNetOrGross } from "@saleor/types/globalTypes";
import { getFormErrors } from "@saleor/utils/errors";
import React from "react";
import { useIntl } from "react-intl";

import Ordernumber from "../Ordernumber";
import PackageLines from "./PackageLines";

export interface PackageFormData {
  gaduur: string;
  name: string;
  width: number;
  height: number;
  length: number;
  netWeight: number;
  grossWeight: number;
  perkgAmount: number;
  netOrGross: string;
}

export interface DetailsPageProps {
  disabled: boolean;
  errors: any;
  object: PackageDetails_package | null;
  lines: any;
  setLines: any;
  saveButtonBarState: ConfirmButtonTransitionState;
  onBack: () => void;
  onSubmit: (data: PackageFormData) => void;
  onDelete: () => void | null;
  ordernumber: string;
  gaduurChoices: Array<{ label: string; value: string }>;
}

export interface ChangeEvent<TData = any> {
  target: {
    name: string;
    value: TData;
  };
}

const PackageDetailsPage: React.FC<DetailsPageProps> = ({
  disabled,
  errors,
  gaduurChoices,
  lines,
  object,
  onBack,
  onDelete,
  onSubmit,
  ordernumber,
  saveButtonBarState,
  setLines
}) => {
  const intl = useIntl();
  // const localizeDate = useDateLocalize();

  const initialForm: PackageFormData = {
    gaduur: maybe(() => object?.gaduur.id, ""),
    grossWeight: maybe(() => object?.grossWeight, 0),
    height: maybe(() => object?.height, 0),
    length: maybe(() => object?.length, 0),
    name: maybe(() => object?.name, ""),
    netOrGross: maybe(() => object?.netOrGross, PackageNetOrGross.NET),
    netWeight: maybe(() => object?.netWeight, 0),
    perkgAmount: maybe(() => object?.perkgAmount, 8),
    width: maybe(() => object?.width, 0)
  };

  const calcOvor = (e: ChangeEvent, change, data: PackageFormData) => {
    change(e);
    const name = "grossWeight";
    const multiple =
      e.target.name === "length"
        ? e.target.value * data.height * data.width
        : e.target.name === "height"
        ? e.target.value * data.length * data.width
        : e.target.value * data.length * data.height;

    const value = (multiple / 6000).toFixed(2);
    return change({ target: { name, value } });
  };

  const formErrors = getFormErrors(
    [
      "name",
      "width",
      "height",
      "length",
      "netWeight",
      "gaduur",
      "grossWeight",
      "perkgAmount",
      "netOrGross"
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
              {!disabled && !object && (
                <Ordernumber
                  lines={lines}
                  setLines={setLines}
                  ordernumber={ordernumber}
                />
              )}
              {!disabled && object && <PackageLines lines={object.lines} />}
            </div>
            <div>
              <Card data-test="packageInfoSection">
                <CardTitle title="Илгээмжийн мэдээлэл" />
                <CardContent>
                  <SingleSelectField
                    choices={gaduurChoices}
                    disabled={disabled}
                    error={!!formErrors.gaduur}
                    // hint={getProductErrorMessage(formErrors.inputType, intl)}
                    label={intl.formatMessage({
                      defaultMessage: "Гадуур дагавар",
                      description: "attribute's editor component"
                    })}
                    name={"gaduur" as keyof typeof data}
                    onChange={change}
                    value={data.gaduur}
                  />
                  <CardSpacer />

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

                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-width">
                      {intl.formatMessage({
                        defaultMessage: "Өргөн"
                      })}
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-width"
                      disabled={disabled}
                      type="number"
                      error={!!formErrors.width}
                      name={"width" as keyof typeof data}
                      value={data.width}
                      onChange={e => calcOvor(e, change, data)}
                      endAdornment={
                        <InputAdornment position="start">cm</InputAdornment>
                      }
                      labelWidth={60}
                    />
                  </FormControl>
                  <CardSpacer />

                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-height">
                      {intl.formatMessage({
                        defaultMessage: "Өндөр"
                      })}
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-height"
                      disabled={disabled}
                      type="number"
                      error={!!formErrors.height}
                      name={"height" as keyof typeof data}
                      value={data.height}
                      onChange={e => calcOvor(e, change, data)}
                      endAdornment={
                        <InputAdornment position="start">cm</InputAdornment>
                      }
                      labelWidth={60}
                    />
                  </FormControl>
                  <CardSpacer />

                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-length">
                      {intl.formatMessage({
                        defaultMessage: "Урт"
                      })}
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-length"
                      disabled={disabled}
                      type="number"
                      error={!!formErrors.length}
                      name={"length" as keyof typeof data}
                      value={data.length}
                      onChange={e => calcOvor(e, change, data)}
                      endAdornment={
                        <InputAdornment position="start">cm</InputAdornment>
                      }
                      labelWidth={60}
                    />
                  </FormControl>
                  <CardSpacer />
                  <Divider />
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

                  <FormControl>
                    <RadioGroup
                      aria-label="net-or-gross"
                      name={"netOrGross" as keyof typeof data}
                      value={data.netOrGross}
                      onChange={e => change(e)}
                    >
                      <FormControlLabel
                        value="NET"
                        control={<Radio color="primary" />}
                        label="Цэвэр жингээр"
                      />
                      <FormControlLabel
                        value="GROSS"
                        control={<Radio color="primary" />}
                        label="Овороор"
                      />
                    </RadioGroup>
                  </FormControl>
                  <CardSpacer />
                  <Divider />
                  <CardSpacer />

                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">
                      {intl.formatMessage({
                        defaultMessage: "Тээврийн үнэ (1кг)"
                      })}
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      disabled={disabled}
                      type="number"
                      error={!!formErrors.perkgAmount}
                      name={"perkgAmount" as keyof typeof data}
                      value={data.perkgAmount}
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
                  <CardSpacer />

                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">
                      {intl.formatMessage({
                        defaultMessage: "НИЙТ ТЭЭВЭР"
                      })}
                    </InputLabel>
                    <OutlinedInput
                      disabled={disabled}
                      type="number"
                      value={
                        data.netOrGross === "NET"
                          ? data.netWeight * data.perkgAmount
                          : data.grossWeight * data.perkgAmount
                      }
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
