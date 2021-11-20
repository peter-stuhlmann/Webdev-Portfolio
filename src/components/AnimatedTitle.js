import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { Context } from '../Context';

export default function AnimatedTitle(props) {
  const { data } = props;

  const { language } = useContext(Context);

  const SvgRef = useRef();
  const [lengths, setLengths] = useState([]);

  const [heading, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    const pathElements = Array.from(SvgRef?.current?.children);

    setLengths(
      pathElements.map((path, index) => {
        return {
          index: index,
          length: path.getTotalLength(),
        };
      })
    );
  }, [language]);

  return (
    <h2 ref={heading}>
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox={data.svg.viewBox}
        duration={1.3}
        delay={0.1}
        ref={SvgRef}
        lengths={lengths}
        aria-labelledby={data.text}
        inView={inView}
      >
        {data.svg.paths.map((path, i) => (
          <path d={path.d} transform={path.transform} key={path.d + i} />
        ))}
      </SVG>
      <Mobile>{data.text}</Mobile>
    </h2>
  );
}

const SVG = styled.svg`
  height: 25px;
  display: block;
  margin: 15px auto 35px auto;

  @media (max-width: 768px) {
    display: none;
  }

  path {
    fill: transparent;
    stroke: #000;
    stroke-width: 1.5px;

    ${(props) =>
      props.inView &&
      props.lengths.map(
        (path) =>
          `&:nth-child(${path.index + 1}) {
            stroke-dasharray: ${path.length}px;
            stroke-dashoffset: ${path.length}px;
            animation: line-animation ${
              props.duration
            }s ease forwards ${props.delay * (path.index + 1)}s,
              fill ${props.duration}s ease forwards
                ${props.delay * (path.index + 1)}s;
          }`
      )}
  }

  @keyframes line-animation {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fill {
    from {
      fill: transparent;
    }
    to {
      fill: #000;
    }
  }
`;

const Mobile = styled.span`
  @media (min-width: 769px) {
    display: none;
  }
`;
