import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import LegalNotice from './components/LegalNotice';
import PrivacyPolicy from './components/PrivacyPolicy';
import NotFound from './components/NotFound';
import { GlobalStyles } from './components/styled-components/GlobalStyles';
import ScrollToTop from './components/ScrollToTop';
import MainNavigation from './components/MainNavigation/MainNavigation';

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
