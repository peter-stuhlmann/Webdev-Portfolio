import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { Context } from '../Context';

import AnimatedTitle from './AnimatedTitle';

export default function TechStack() {
  const { content, icons } = useContext(Context);
  const [techstack, inView] = useInView();
  const [opacity, setOpacity] = useState('0');

  useEffect(() => {
    if (inView) {
      setOpacity('1');
    }
  }, [inView]);

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
          <AnimatedTitle data={content.techStack.heading} />
          <p className="description">{content.techStack.description}</p>
          <StyledTechStack>
            {icons.techStack.map((icon) => (
              <li key={icon.src}>
                <img
                  src={icon.src}
                  alt={icon.alt}
                  loading="lazy"
                  width="100%"
                  height="75"
                />
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
      object-fit: contain;
    }
  }
`;
