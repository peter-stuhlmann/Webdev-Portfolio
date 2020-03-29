import React, { useContext } from 'react';
import PortfolioItem from './PortfolioItem';

import { Context } from '../Context';

export default function Portfolio() {
  const { content } = useContext(Context);

  return (
    <section id="portfolio">
      <div className="wrap">
        <article>
          <h2>{content.portfolio.heading}</h2>
          <p className="description">{content.portfolio.description}</p>
        </article>
      </div>
      <PortfolioItem />
    </section>
  );
}
