import React, { Fragment } from 'react';

import Header from './Header';
import About from './About';
import Stats from './Stats';
import TechStack from './TechStack';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <About />
      <Stats />
      <TechStack />
      <Portfolio />
      <Contact />
    </Fragment>
  );
}
