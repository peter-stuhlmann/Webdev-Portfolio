import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ga } from '../helpers/analytics';

const Home = lazy(() => import('./Home'));
const LegalNotice = lazy(() => import('./LegalNotice'));
const PrivacyPolicy = lazy(() => import('./PrivacyPolicy'));
const NotFound = lazy(() => import('./NotFound'));

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ga(Home)} />
      <Route path="/impressum" component={ga(LegalNotice)} />
      <Route path="/datenschutzerklaerung" component={ga(PrivacyPolicy)} />
      <Route component={ga(NotFound)} />
    </Switch>
  );
}
