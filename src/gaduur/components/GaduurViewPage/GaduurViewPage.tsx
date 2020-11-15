import { Card, CardContent, TextField } from "@material-ui/core";
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
import VisibilityCard from "@saleor/components/VisibilityCard";
import { SHIPPING_STATUS } from "@saleor/constants";
import useDateLocalize from "@saleor/hooks/useDateLocalize";
import { sectionNames } from "@saleor/intl";
import { maybe } from "@saleor/misc";
import { GaduurPackageStatus } from "@saleor/types/globalTypes";
import { getFormErrors } from "@saleor/utils/errors";
import React from "react";
import { useIntl } from "react-intl";
export interface GaduurFormData {
  isPublished: boolean;
  publicationDate: string;
  status: string;
  startDate: string;
  endDate: string;
  receivedDate: string;
  trackingNumber: string;
}

import { GaduurUpdate_gaduurUpdate_gaduurPackage } from "../../types/GaduurUpdate";

export interface DetailsPageProps {
  disabled: boolean;
  errors: any;
  gaduur: GaduurUpdate_gaduurUpdate_gaduurPackage | null;
  saveButtonBarState: ConfirmButtonTransitionState;
  onBack: () => void;
  onSubmit: (data: GaduurFormData) => void;
  onDelete: () => void | null;
}

const GaduurViewPage: React.FC<DetailsPageProps> = ({
  disabled,
  errors,
  gaduur,
  onBack,
  onSubmit,
  onDelete,
  saveButtonBarState
}) => {
  const intl = useIntl();
  const localizeDate = useDateLocalize();

  const initialForm: GaduurFormData = {
    isPublished: maybe(() => gaduur?.isPublished, false),
    publicationDate: maybe(() => gaduur?.publicationDate, ""),
    status: maybe(() => gaduur?.status, GaduurPackageStatus.NEW),
    startDate: maybe(
      () => (gaduur?.startDate === null ? "" : gaduur?.startDate),
      ""
    ),
    endDate: maybe(() => (gaduur?.endDate === null ? "" : gaduur?.endDate), ""),
    receivedDate: maybe(
      () => (gaduur?.receivedDate === null ? "" : gaduur?.receivedDate),
      ""
    ),
    trackingNumber: maybe(
      () => (gaduur?.trackingNumber === null ? "" : gaduur?.trackingNumber),
      ""
    )
  };
  const formErrors = getFormErrors(
    ["status", "startDate", "endDate", "receivedDate", "trackingNumber"],
    errors
  );

  return (
    <Form initial={initialForm} onSubmit={onSubmit}>
      {({ change, data, submit }) => (
        <Container>
          <AppHeader onBack={onBack}>
            {intl.formatMessage(sectionNames.gaduur)}
          </AppHeader>
          <PageHeader
            title={
              !gaduur
                ? intl.formatMessage({
                    defaultMessage: "Гадуур дагавар үүсгэх",
                    description: "header"
                  })
                : `#${gaduur.name} (${gaduur.shippingType})`
            }
          />
          <Grid>
            <div></div>
            <div>
              <Card data-test="generalInfoSection">
                <CardContent>
                  <SingleSelectField
                    name={"status" as keyof typeof data}
                    choices={SHIPPING_STATUS}
                    onChange={change}
                    value={data.status}
                    label={intl.formatMessage({
                      defaultMessage: "Тээврийн төлөв"
                    })}
                  />
                </CardContent>
              </Card>

              <CardSpacer />

              <Card>
                <CardTitle
                  title={intl.formatMessage({
                    defaultMessage: "shipping info",
                    description: "section header"
                  })}
                />
                <CardContent>
                  <TextField
                    error={!!formErrors.startDate}
                    disabled={disabled}
                    label={intl.formatMessage({
                      defaultMessage: "Тээвэрт гарах огноо"
                    })}
                    name={"startDate" as keyof typeof data}
                    type="date"
                    fullWidth={true}
                    value={data.startDate}
                    onChange={change}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                  <CardSpacer />
                  <TextField
                    error={!!formErrors.endDate}
                    disabled={disabled}
                    label={intl.formatMessage({
                      defaultMessage: "Очих огноо"
                    })}
                    name={"endDate" as keyof typeof data}
                    type="date"
                    fullWidth={true}
                    value={data.endDate}
                    onChange={change}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                  <CardSpacer />
                  <TextField
                    error={!!formErrors.trackingNumber}
                    disabled={disabled}
                    label={intl.formatMessage({
                      defaultMessage: "Tracking number"
                    })}
                    name={"trackingNumber" as keyof typeof data}
                    value={data.trackingNumber}
                    onChange={change}
                  />
                  <CardSpacer />
                </CardContent>
              </Card>

              <CardSpacer />

              <Card>
                <CardTitle
                  title={intl.formatMessage({
                    defaultMessage: "Монголд ирсэн тэмдэглэх",
                    description: "section header"
                  })}
                />
                <CardContent>
                  <TextField
                    error={!!formErrors.receivedDate}
                    disabled={disabled}
                    required={false}
                    label={intl.formatMessage({
                      defaultMessage: "Монголд ирсэн"
                    })}
                    name={"receivedDate" as keyof typeof data}
                    type="date"
                    fullWidth={true}
                    value={data.receivedDate}
                    onChange={change}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </CardContent>
              </Card>

              <CardSpacer />

              <VisibilityCard
                data={data}
                errors={errors}
                disabled={disabled}
                messages={{
                  hiddenLabel: intl.formatMessage({
                    defaultMessage: "Hidden",
                    description: "gaduur label"
                  }),
                  hiddenSecondLabel: intl.formatMessage(
                    {
                      defaultMessage: "will be visible from {date}",
                      description: "gaduur"
                    },
                    {
                      date: localizeDate(data.publicationDate, "L")
                    }
                  ),
                  visibleLabel: intl.formatMessage({
                    defaultMessage: "Visible",
                    description: "gaduur label"
                  })
                }}
                onChange={change}
              />
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

GaduurViewPage.displayName = "GaduurViewPage";

export default GaduurViewPage;
