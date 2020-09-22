import { sectionNames } from "@saleor/intl";
import { asSortParams } from "@saleor/utils/sort";
import { parse as parseQs } from "qs";
import React from "react";
import { useIntl } from "react-intl";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import { WindowTitle } from "../components/WindowTitle";
import {
  ushopAddPath,
  ushopListPath,
  UshopListUrlQueryParams,
  UshopListUrlSortField,
  ushopPath,
  UshopUrlQueryParams
} from "./urls";
import UshopCreate from "./views/UshopCreatePage";
import UshopDetailsView from "./views/UshopDetailsView";
import UshopListView from "./views/UshopListView";

const UshopList: React.FC<RouteComponentProps> = ({ location }) => {
  const qs = parseQs(location.search.substr(1));
  const params: UshopListUrlQueryParams = asSortParams(
    qs,
    UshopListUrlSortField
  );

  return <UshopListView params={params} />;
};

const UshopDetails: React.FC<RouteComponentProps<{ id: string }>> = ({
  location,
  match
}) => {
  const qs = parseQs(location.search.substr(1));
  const params: UshopUrlQueryParams = qs;
  return (
    <UshopDetailsView
      id={decodeURIComponent(match.params.id)}
      params={params}
    />
  );
};

export const UshopSection: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <WindowTitle title={intl.formatMessage(sectionNames.ushop)} />
      <Switch>
        <Route exact path={ushopListPath} component={UshopList} />
        <Route exact path={ushopAddPath} component={UshopCreate} />
        <Route path={ushopPath(":id")} component={UshopDetails} />
      </Switch>
    </>
  );
};
export default UshopSection;
