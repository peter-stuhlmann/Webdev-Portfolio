import React, { useContext } from 'react';

import { Context } from '../Context';
import { ButtonLink as Button } from './styled-components/Button';

export default function About() {
  const { content } = useContext(Context);

  return (
    <section id="about">
      <div className="wrap">
        <article>
          <h2>{content.about.heading}</h2>
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
