import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyles } from './components/styled-components/GlobalStyles';
import Spinner from './components/Spinner';

const Footer = React.lazy(() => import('./components/Footer'));
const Home = React.lazy(() => import('./components/Home'));
const LegalNotice = React.lazy(() => import('./components/LegalNotice'));
const PrivacyPolicy = React.lazy(() => import('./components/PrivacyPolicy'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const ScrollToTop = React.lazy(() => import('./components/ScrollToTop'));
const MainNavigation = React.lazy(() =>
  import('./components/MainNavigation/MainNavigation')
);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <MainNavigation />
        <ScrollToTop />
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/impressum" component={LegalNotice} />
          <Route path="/datenschutzerklaerung" component={PrivacyPolicy} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}
