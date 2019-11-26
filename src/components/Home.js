import React, { Fragment } from 'react';
import Portfolio from './Portfolio';
import About from './About';

export default function Home() {
  return (
    <Fragment>
      <About />
      <Portfolio />
    </Fragment>
  );
}
