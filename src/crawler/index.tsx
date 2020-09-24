import { parse as parseQs } from 'qs';
import React from 'react';
import { useIntl } from 'react-intl';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

import { sectionNames } from '@saleor/intl';

import { WindowTitle } from '../components/WindowTitle';
import {
    crawlerCreatePath, crawlerListPath, CrawlerListUrlQueryParams, crawlerPath,
    CrawlerUrlQueryParams
} from './urls';
import CrawlerCreate from './views/CrawlerCreate';
import CrawlerDetailsComponent from './views/CrawlerDetails';
import CrawlerListComponent from './views/CrawlerList';

const CrawlerList: React.FC<RouteComponentProps<any>> = ({ location }) => {
  const qs = parseQs(location.search.substr(1));
  const params: CrawlerListUrlQueryParams = qs;
  return <CrawlerListComponent params={params} />;
};

const CrawlerDetails: React.FC<RouteComponentProps<any>> = ({ match }) => {
  const qs = parseQs(location.search.substr(1));
  const params: CrawlerUrlQueryParams = qs;

  return (
    <CrawlerDetailsComponent
      id={decodeURIComponent(match.params.id)}
      params={params}
    />
  );
};

const Component = () => {
  const intl = useIntl();

  return (
    <>
      <WindowTitle title={intl.formatMessage(sectionNames.crawler)} />
      <Switch>
        <Route exact path={crawlerListPath} component={CrawlerList} />
        <Route exact path={crawlerCreatePath} component={CrawlerCreate} />
        <Route path={crawlerPath(":id")} component={CrawlerDetails} />
      </Switch>
    </>
  );
};

export default Component;
