import PackageForm, { PackageFormData } from "../PackageForm";

import AppHeader from "@saleor/components/AppHeader";
import { ConfirmButtonTransitionState } from "@saleor/components/ConfirmButton";
import Container from "@saleor/components/Container";
import Customer from "../Customer";
import { FetchMoreProps } from "@saleor/types";
import Grid from "@saleor/components/Grid";
import Ordernumber from "../Ordernumber";
import { PackageDetails_package } from "@saleor/package/types/PackageDetails";
import PackageLines from "./PackageLines";
import PageHeader from "@saleor/components/PageHeader";
import React from "react";
import { SearchGaduurs_search_edges_node } from "@saleor/searches/types/SearchGaduurs";
// import SingleSelectField from "@saleor/components/SingleSelectField";
// import useDateLocalize from "@saleor/hooks/useDateLocalize";
import { sectionNames } from "@saleor/intl";
import { useIntl } from "react-intl";

export interface DetailsPageProps {
  disabled: boolean;
  errors: any;
  gaduurs: SearchGaduurs_search_edges_node[];
  fetchMoreGaduurs: FetchMoreProps;
  object: PackageDetails_package | null;
  lines: any;
  setLines: any;
  saveButtonBarState: ConfirmButtonTransitionState;
  onBack: () => void;
  onSubmit: (data: PackageFormData) => void;
  onDelete: () => void | null;
  routeParams: any;
  fetchGaduurs: (query: string) => void;
  updatePackage: () => void;
}

const PackageDetailsPage: React.FC<DetailsPageProps> = ({
  disabled,
  errors,
  gaduurs,
  lines,
  fetchMoreGaduurs,
  fetchGaduurs,
  object,
  onBack,
  onDelete,
  onSubmit,
  updatePackage,
  routeParams,
  saveButtonBarState,
  setLines
}) => {
  const intl = useIntl();

  return (
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
              routeParams={routeParams}
            />
          )}
          {!disabled && object && <PackageLines lines={object.lines} />}

          {!disabled && object && (
            <Customer
              shippingAddress={object.shippingAddress}
              senderAddress={object.senderAddress}
            />
          )}
        </div>
        <div>
          <PackageForm
            gaduurs={gaduurs}
            disabled={disabled}
            errors={errors}
            fetchMoreGaduurs={fetchMoreGaduurs}
            fetchGaduurs={fetchGaduurs}
            object={object}
            onBack={onBack}
            onDelete={onDelete}
            onSubmit={onSubmit}
            updatePackage={updatePackage}
            saveButtonBarState={saveButtonBarState}
          />
        </div>
      </Grid>
    </Container>
  );
};

PackageDetailsPage.displayName = "PackageDetailsPage";

export default PackageDetailsPage;
