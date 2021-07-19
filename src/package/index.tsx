import {
  PackageListUrlQueryParams,
  PackageListUrlSortField,
  PackageUrlQueryParams,
  packageAddPath,
  packageListPath,
  packagePath
} from "./urls";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import PackageCreate from "./views/PackageCreatePage";
import PackageDetailsView from "./views/PackageDetailsView";
import PackageListView from "./views/PackageListView";
import React from "react";
import { WindowTitle } from "../components/WindowTitle";
import { asSortParams } from "@saleor/utils/sort";
import { parse as parseQs } from "qs";
import { sectionNames } from "@saleor/intl";
import { useIntl } from "react-intl";

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
      routeParams={params}
    />
  );
};

const PackageCreatePage: React.FC<RouteComponentProps<{
  ordernumber: string;
}>> = ({ location }) => {
  const qs = parseQs(location.search.substr(1));
  const params: PackageUrlQueryParams = qs;
  return <PackageCreate routeParams={params || ""} />;
};

export const PackageSection: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <WindowTitle title={intl.formatMessage(sectionNames.package)} />
      <Switch>
        <Route exact path={packageListPath} component={PackageList} />
        <Route path={packageAddPath} component={PackageCreatePage} />
        {/* <Route exact path={packageFulfill} component={} /> */}
        <Route path={packagePath(":id")} component={PackageDetails} />
      </Switch>
    </>
  );
};
export default PackageSection;
