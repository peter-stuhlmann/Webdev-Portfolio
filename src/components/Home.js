import React, { Fragment } from 'react';
import About from './About';
import TechStack from './TechStack';
import Portfolio from './Portfolio';

export default function Home() {
  return (
    <Fragment>
      <About />
      <TechStack />
      <Portfolio />
    </Fragment>
  );
}
