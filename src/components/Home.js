import React, { Fragment } from 'react';
import Header from './Header';
import About from './About';
import TechStack from './TechStack';
import Portfolio from './Portfolio';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <About />
      <TechStack />
      <Portfolio />
    </Fragment>
  );
}
