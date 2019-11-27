import React from 'react';
import PortfolioItem from './PortfolioItem';
import { PortfolioContent } from './PortfolioContent';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="wrap">
        <article>
          <h2>Portfolio</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </article>
      </div>
      {PortfolioContent.map(element => {
        const {
          number,
          title,
          description,
          techStack,
          liveDemo,
          githubLink,
        } = element;
        return (
          <PortfolioItem
            key={number}
            number={number}
            title={title}
            techStack={techStack}
            description={description}
            liveDemo={liveDemo}
            githubLink={githubLink}
          />
        );
      })}
    </section>
  );
}
