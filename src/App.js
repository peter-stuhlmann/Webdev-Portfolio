import React, { Suspense, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Context } from './Context';
import { GlobalStyles } from './components/styled-components/GlobalStyles';

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
  const { content } = useContext(Context);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>{content.loading}</div>}>
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
