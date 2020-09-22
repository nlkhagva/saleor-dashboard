import { Card, CardContent, TextField } from "@material-ui/core";
import AppHeader from "@saleor/components/AppHeader";
import CardSpacer from "@saleor/components/CardSpacer";
import { ConfirmButtonTransitionState } from "@saleor/components/ConfirmButton";
import Container from "@saleor/components/Container";
import Form from "@saleor/components/Form";
import Grid from "@saleor/components/Grid";
import PageHeader from "@saleor/components/PageHeader";
import SaveButtonBar from "@saleor/components/SaveButtonBar";
import SingleSelectField from "@saleor/components/SingleSelectField";
import VisibilityCard from "@saleor/components/VisibilityCard";
import { SHIPPING_TYPES } from "@saleor/constants";
import useDateLocalize from "@saleor/hooks/useDateLocalize";
import { sectionNames } from "@saleor/intl";
import { maybe } from "@saleor/misc";
import { getFormErrors } from "@saleor/utils/errors";
import React from "react";
import { useIntl } from "react-intl";
export interface GaduurFormData {
  name: string;
  isPublished: boolean;
  publicationDate: string;
  shippingType: string;
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

const GaduurDetailsPage: React.FC<DetailsPageProps> = ({
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
    name: maybe(() => gaduur?.name, ""),
    publicationDate: maybe(() => gaduur?.publicationDate, ""),
    shippingType: maybe(() => gaduur?.shippingType, "")
  };
  const formErrors = getFormErrors(["name"], errors);

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
                : `${gaduur.name} засах`
            }
          />
          <Grid>
            <div>
              <Card data-test="generalInfoSection">
                <CardContent>
                  <TextField
                    disabled={disabled}
                    error={!!formErrors.name}
                    fullWidth
                    label={intl.formatMessage({
                      defaultMessage: "Гадуур дагаварын дугаар"
                    })}
                    name={"name" as keyof typeof data}
                    value={data.name}
                    onChange={change}
                  />
                  <CardSpacer />
                  <SingleSelectField
                    name={"shippingType" as keyof typeof data}
                    choices={SHIPPING_TYPES}
                    onChange={change}
                    value={data.shippingType}
                    label={intl.formatMessage({
                      defaultMessage: "Тээврийн төрөл"
                    })}
                  />
                </CardContent>
              </Card>
            </div>
            <div>
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

GaduurDetailsPage.displayName = "GaduurDetailsPage";

export default GaduurDetailsPage;
