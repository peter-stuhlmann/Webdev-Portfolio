import React, { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Context } from '../Context';
import ContactIcons from './ContactIcons';

import AnimatedTitle from './AnimatedTitle';

export default function Contact() {
  const { content, language } = useContext(Context);
  const [contact, inView] = useInView();
  const [opacity, setOpacity] = useState('0');

  useEffect(() => {
    if (inView) {
      setOpacity('1');
    }
  }, [inView]);

  return (
    <section
      id={language === 'german' ? 'kontakt' : 'contact'}
      style={{
        transition: '.5s',
        transitionDelay: '.2s',
        opacity: opacity,
      }}
    >
      <div className="wrap">
        <article style={{ marginBottom: '100px' }} ref={contact}>
          <AnimatedTitle data={content.contact.heading} />
          <p className="description">{content.contact.description}</p>
          <ContactIcons />
        </article>
      </div>
    </section>
  );
}
