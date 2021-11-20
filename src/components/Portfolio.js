import React, { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import PortfolioItem from './PortfolioItem';
import AnimatedTitle from './AnimatedTitle';

import { Context } from '../Context';

export default function Portfolio() {
  const { content } = useContext(Context);
  const [portfolio, inView] = useInView();
  const [opacity, setOpacity] = useState('0');

  useEffect(() => {
    if (inView) {
      setOpacity('1');
    }
  }, [inView]);

  return (
    <section
      id="portfolio"
      ref={portfolio}
      style={{
        transition: '.5s',
        transitionDelay: '.2s',
        opacity: opacity,
      }}
    >
      <div className="wrap">
        <article>
          <AnimatedTitle data={content.portfolio.heading} />
          <p className="description">{content.portfolio.description}</p>
        </article>
      </div>

      {content.portfolio.items.map((item, index) => (
        <PortfolioItem key={item.title} item={item} number={index} />
      ))}
    </section>
  );
}
