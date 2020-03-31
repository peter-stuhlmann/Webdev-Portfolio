import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './components/styled-components/GlobalStyles';
import Spinner from './components/Spinner';
import Router from './components/Router';

const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const MainNavigation = lazy(() =>
  import('./components/MainNavigation/MainNavigation')
);
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <MainNavigation />
        <ScrollToTop />
        <GlobalStyles />
        <Router />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}
