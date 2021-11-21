import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './assets/css/global.css';

import ContextProvider from './Context';
import Spinner from './components/Spinner';
import CookieConsentBanner from './components/CookieConsentBanner';
import Router from './components/Router';
import IE from './components/IE';

const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const MainNavigation = lazy(() =>
  import('./components/MainNavigation/MainNavigation')
);
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  // detect if browser is internet explorer
  const isIE = /*@cc_on!@*/ false || !!document.documentMode;

  return isIE ? (
    <IE />
  ) : (
    <ContextProvider>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <CookieConsentBanner />
          <MainNavigation />
          <ScrollToTop />
          <Router />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </ContextProvider>
  );
}
