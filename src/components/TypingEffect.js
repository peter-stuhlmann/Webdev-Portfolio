import React, { Fragment, useContext, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Typist from 'react-typist';

import { Context } from '../Context';

export default function TypingEffect() {
  const { content } = useContext(Context);

  const TypedHeading = () => (
    <Typist className="typing-effect">
      {content.header.heading.pre} {content.header.heading.word[0]}
      <Typist.Delay ms={1500} />
      <Typist.Backspace
        count={content.header.heading.word[0].length}
        delay={1000}
      />
      <Typist.Delay ms={750} />
      {content.header.heading.word[1]}
    </Typist>
  );

  return (
    <Fragment>
      <TypingEffectStyles />
      <TypedHeading />
    </Fragment>
  );
}

const TypingEffectStyles = createGlobalStyle`
  .typing-effect {
    color: #fff;
    font-family: 'WebDevFont SourceCode', monospace;
    font-size: 50px;
    margin: 0 40px 0 40px;
    text-align: center;

    @media (max-width: 1250px) {
      font-size: 30px;
    }  
  }

  .Cursor {
    display: inline-block;
  
    &--blinking {
      opacity: 1;
      animation: blink 0.6s linear infinite;

      @keyframes blink {
        0% { opacity:1; }
        50% { opacity:0; }
        100% { opacity:1; }
      }
    }
  }
`;
