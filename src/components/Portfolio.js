import React, { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import PortfolioItem from './PortfolioItem';
import { Context } from '../Context';

export default function Portfolio() {
  const { content } = useContext(Context);
  const [portfolio, inView] = useInView();
  const [opacity, setOpacity] = useState('0');

  useEffect(() => {
    if (inView) {
      setOpacity('1');
    }
  });

  return (
    <section
      id="portfolio"
      style={{
        transition: '.5s',
        transitionDelay: '.2s',
        opacity: opacity,
      }}
    >
      <div className="wrap">
        <article ref={portfolio}>
          <h2>{content.portfolio.heading}</h2>
          <p className="description">{content.portfolio.description}</p>
        </article>
      </div>
      <PortfolioItem />
    </section>
  );
}
