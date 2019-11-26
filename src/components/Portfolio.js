import React from 'react';
import PortfolioItem from './PortfolioItem';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="wrap">
        <h2>Portfolio</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
    </section>
  );
}
