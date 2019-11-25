import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import LegalNotice from './components/LegalNotice';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/impressum" component={LegalNotice} />
        <Route path="/datenschutzerklaerung" component={PrivacyPolicy} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
