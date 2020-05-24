import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { Context } from '../Context';

export default function TechStack() {
  const { content } = useContext(Context);
  const [techstack, inView] = useInView();
  const [opacity, setOpacity] = useState('0');

  useEffect(() => {
    if (inView) {
      setOpacity('1');
    }
  });

  return (
    <section
      id="techstack"
      style={{
        transition: '.5s',
        transitionDelay: '.2s',
        opacity: opacity,
      }}
    >
      <div className="wrap">
        <article ref={techstack}>
          <h2>{content.techStack.heading}</h2>
          <p className="description">{content.techStack.description}</p>
          <StyledTechStack>
            {content.techStack.icons.map(icon => (
              <li key={icon.src}>
                <img src={icon.src} alt={icon.alt} loading="lazy" />
              </li>
            ))}
          </StyledTechStack>
        </article>
        <hr />
      </div>
    </section>
  );
}

const StyledTechStack = styled.ul`
  display: flex;
  flex: 0 0 50%;
  padding: 20px 20px;
  flex-flow: row wrap;
  align-items: center;
  margin-top: 35px;
  padding: 0;

  li {
    list-style-type: none;
    flex: 0 0 50%;
    padding: 30px 25px;
    box-sizing: border-box;
    text-align: center;

    @media screen and (min-width: 480px) {
      flex: 0 0 33.3333%;
      padding: 25px 30px;
    }

    @media screen and (min-width: 768px) {
      flex: 0 0 25%;
      padding: 25px 35px;
    }

    @media screen and (min-width: 900px) {
      flex: 0 0 20%;
      padding: 30px 45px;
    }

    img {
      max-width: 100%;
      max-height: 75px;
      // filter: grayscale(100%);
      // transition: all 0.2s ease;

      // &:hover {
      //  filter: grayscale(0%);
      // }
    }
  }
`;
