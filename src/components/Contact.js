import React, { useContext } from 'react';

import { Context } from '../Context';
import ContactIcons from './ContactIcons';

export default function Contact() {
  const { content } = useContext(Context);

  return (
    <section id="contact">
      <div className="wrap">
        <article style={{ marginBottom: '100px' }}>
          <h2>{content.contact.heading}</h2>
          <p className="description">{content.contact.description}</p>
          <ContactIcons />
        </article>
      </div>
    </section>
  );
}
