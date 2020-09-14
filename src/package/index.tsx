import { sectionNames } from "@saleor/intl";
import { asSortParams } from "@saleor/utils/sort";
import { parse as parseQs } from "qs";
import React from "react";
import { useIntl } from "react-intl";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import { WindowTitle } from "../components/WindowTitle";
import {
  packageAddPath,
  packageListPath,
  PackageListUrlQueryParams,
  PackageListUrlSortField,
  packagePath,
  PackageUrlQueryParams
} from "./urls";
import PackageCreate from "./views/PackageCreatePage";
import PackageDetailsView from "./views/PackageDetailsView";
import PackageListView from "./views/PackageListView";

const PackageList: React.FC<RouteComponentProps> = ({ location }) => {
  const qs = parseQs(location.search.substr(1));
  const params: PackageListUrlQueryParams = asSortParams(
    qs,
    PackageListUrlSortField
  );

  return <PackageListView params={params} />;
};

const PackageDetails: React.FC<RouteComponentProps<{ id: string }>> = ({
  location,
  match
}) => {
  const qs = parseQs(location.search.substr(1));
  const params: PackageUrlQueryParams = qs;
  return (
    <PackageDetailsView
      id={decodeURIComponent(match.params.id)}
      params={params}
    />
  );
};

const PackageCreatePage: React.FC<RouteComponentProps<{
  ordernumber: string;
}>> = ({ location, match }) => {
  const qs = parseQs(location.search.substr(1));
  const params: PackageUrlQueryParams = qs;
  return (
    <PackageCreate
      // ordernumber={decodeURIComponent(match.params.ordernumber)}
      params={params}
    />
  );
};

export const PackageSection: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <WindowTitle title={intl.formatMessage(sectionNames.package)} />
      <Switch>
        <Route exact path={packageListPath} component={PackageList} />
        <Route exact path={packageAddPath} component={PackageCreatePage} />
        {/* <Route exact path={packageFulfill} component={} /> */}
        <Route path={packagePath(":id")} component={PackageDetails} />
      </Switch>
    </>
  );
};
export default PackageSection;
