import React, { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Context } from '../Context';
import { ButtonLink as Button } from './styled-components/Button';
import AnimatedTitle from './AnimatedTitle';

export default function About() {
  const { content, language } = useContext(Context);
  const [about, inView] = useInView();
  const [opacity, setOpacity] = useState('0');

  useEffect(() => {
    if (inView) {
      setOpacity('1');
    }
  }, [inView]);

  return (
    <section
      id={language === 'german' ? 'ueber-mich' : 'about'}
      style={{
        transition: '.5s',
        transitionDelay: '.2s',
        opacity: opacity,
      }}
    >
      <div className="wrap">
        <article ref={about}>
          <AnimatedTitle data={content.about.heading} />
          <p className="description">{content.about.description}</p>
          <p>{content.about.text}</p>
        </article>
        <Button
          linkText={content.about.cv.linkText}
          href={content.about.cv.href}
          style={{
            right: '50%',
            transform: 'translate(50%)',
          }}
        />
        <hr style={{ marginTop: '120px' }} />
      </div>
    </section>
  );
}
