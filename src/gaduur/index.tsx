import { sectionNames } from "@saleor/intl";
import { asSortParams } from "@saleor/utils/sort";
import { parse as parseQs } from "qs";
import React from "react";
import { useIntl } from "react-intl";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import { WindowTitle } from "../components/WindowTitle";
import {
  gaduurAddPath,
  gaduurListPath,
  GaduurListUrlQueryParams,
  GaduurListUrlSortField,
  gaduurPath,
  GaduurUrlQueryParams
} from "./urls";
import GaduurCreate from "./views/GaduurCreatePage";
import GaduurDetailsView from "./views/GaduurDetailsView";
import GaduurListView from "./views/GaduurListView";

const GaduurList: React.FC<RouteComponentProps> = ({ location }) => {
  const qs = parseQs(location.search.substr(1));
  const params: GaduurListUrlQueryParams = asSortParams(
    qs,
    GaduurListUrlSortField
  );

  return <GaduurListView params={params} />;
};

const GaduurDetails: React.FC<RouteComponentProps<{ id: string }>> = ({
  location,
  match
}) => {
  const qs = parseQs(location.search.substr(1));
  const params: GaduurUrlQueryParams = qs;
  return (
    <GaduurDetailsView
      id={decodeURIComponent(match.params.id)}
      params={params}
    />
  );
};

export const GaduurSection: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <WindowTitle title={intl.formatMessage(sectionNames.gaduur)} />
      <Switch>
        <Route exact path={gaduurListPath} component={GaduurList} />
        <Route exact path={gaduurAddPath} component={GaduurCreate} />
        <Route path={gaduurPath(":id")} component={GaduurDetails} />
      </Switch>
    </>
  );
};
export default GaduurSection;
