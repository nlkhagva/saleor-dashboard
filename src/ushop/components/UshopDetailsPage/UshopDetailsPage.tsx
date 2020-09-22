import AppHeader from "@saleor/components/AppHeader";
import CardSpacer from "@saleor/components/CardSpacer";
import { ConfirmButtonTransitionState } from "@saleor/components/ConfirmButton";
import Container from "@saleor/components/Container";
import Form from "@saleor/components/Form";
import Grid from "@saleor/components/Grid";
import PageHeader from "@saleor/components/PageHeader";
import SaveButtonBar from "@saleor/components/SaveButtonBar";
import VisibilityCard from "@saleor/components/VisibilityCard";
import useDateLocalize from "@saleor/hooks/useDateLocalize";
import { sectionNames } from "@saleor/intl";
import { maybe } from "@saleor/misc";
import UshopGeneralInfo from "@saleor/ushop/components/UshopGeneralInfo";
import { UshopUpdate_ushopUpdate_shop } from "@saleor/ushop/types/UshopUpdate";
import { getFormErrors } from "@saleor/utils/errors";
import {
  ContentState,
  convertFromRaw,
  convertToRaw,
  RawDraftContentState
} from "draft-js";
import React from "react";
import { useIntl } from "react-intl";

import UshopCrawler from "../UshopCrawler";
import UshopRating from "../UshopRating";

export interface UshopFormData {
  name: string;
  isPublished: boolean;
  publicationDate: string;
  url: string;
  description: RawDraftContentState;
  rank: number;
  ratingMain: number;
  ratingUkShipping: number;
  ratingProductQuality: number;
  ratingProductPrice: number;
  ratingShuurhai: number;
  ratingProductRank: number;
  listSelection: string;
  productSelection: string;
}

export interface DetailsPageProps {
  disabled: boolean;
  errors: any;
  ushop: UshopUpdate_ushopUpdate_shop | null;
  saveButtonBarState: ConfirmButtonTransitionState;
  onBack: () => void;
  onSubmit: (data: UshopFormData) => void;
  onDelete: () => void | null;
}

const UshopDetailsPage: React.FC<DetailsPageProps> = ({
  disabled,
  errors,
  ushop,
  onBack,
  onSubmit,
  onDelete,
  saveButtonBarState
}) => {
  const intl = useIntl();
  const localizeDate = useDateLocalize();

  const initialForm: UshopFormData = {
    isPublished: maybe(() => ushop?.isPublished, false),
    name: maybe(() => ushop?.name, ""),
    url: maybe(() => ushop?.url, ""),
    publicationDate: maybe(() => ushop?.publicationDate, ""),
    description: maybe(
      () => JSON.parse(ushop.descriptionJson),
      convertToRaw(ContentState.createFromText(""))
    ),
    rank: maybe(() => ushop?.rank, 0),
    ratingMain: maybe(() => ushop?.ratingMain, 0),
    ratingUkShipping: maybe(() => ushop?.ratingUkShipping, 0),
    ratingProductQuality: maybe(() => ushop?.ratingProductQuality, 0),
    ratingProductPrice: maybe(() => ushop?.ratingProductPrice, 0),
    ratingShuurhai: maybe(() => ushop?.ratingShuurhai, 0),
    ratingProductRank: maybe(() => ushop?.ratingProductRank, 0),
    listSelection: maybe(() => ushop?.listSelection, ""),
    productSelection: maybe(() => ushop?.productSelection, "")
  };
  const formErrors = getFormErrors(
    [
      "name",
      "url",
      "descriptionJson",
      "rank",
      "ratingMain",
      "ratingUkShipping",
      "ratingProductQuality",
      "ratingProductPrice",
      "ratingShuurhai",
      "ratingProductRank",
      "listSelection",
      "productSelection"
    ],
    errors
  );

  return (
    <Form initial={initialForm} onSubmit={onSubmit}>
      {({ change, data, submit }) => (
        <Container>
          <AppHeader onBack={onBack}>
            {intl.formatMessage(sectionNames.ushop)}
          </AppHeader>
          <PageHeader
            title={
              !ushop
                ? intl.formatMessage({
                    defaultMessage: "Англи дэлгүүр үүсгэх",
                    description: "header"
                  })
                : `${ushop.name} `
            }
          />
          <Grid>
            <div>
              <UshopGeneralInfo
                disabled={disabled}
                formErrors={formErrors}
                data={data}
                change={change}
                ushop={ushop}
              />
              <CardSpacer />
              <UshopCrawler
                disabled={disabled}
                formErrors={formErrors}
                data={data}
                change={change}
              />
            </div>
            <div>
              <UshopRating
                disabled={disabled}
                formErrors={formErrors}
                data={data}
                change={change}
              />
              <CardSpacer />
              <VisibilityCard
                data={data}
                errors={errors}
                disabled={disabled}
                messages={{
                  hiddenLabel: intl.formatMessage({
                    defaultMessage: "Hidden",
                    description: "ushop label"
                  }),
                  hiddenSecondLabel: intl.formatMessage(
                    {
                      defaultMessage: "will be visible from {date}",
                      description: "ushop"
                    },
                    {
                      date: localizeDate(data.publicationDate, "L")
                    }
                  ),
                  visibleLabel: intl.formatMessage({
                    defaultMessage: "Visible",
                    description: "ushop label"
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

UshopDetailsPage.displayName = "UshopDetailsPage";

export default UshopDetailsPage;
