import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../Context';

export default function ContactIcons(props) {
  const { icons } = useContext(Context);

  return (
    <StyledContactIcons header={props.header}>
      {icons.contact.map((icon) => (
        <a
          key={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          href={icon.href}
          aria-label={icon.serviceName}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox={icon.viewBox}>
            <path d={icon.path} />
          </svg>
        </a>
      ))}
    </StyledContactIcons>
  );
}

const StyledContactIcons = styled.div`
  position: ${(props) => (props.header ? 'absolute' : 'static')};
  left: ${(props) => (props.header ? '30px' : null)};
  text-align: center;

  @media (max-width: 850px) {
    top: 80%;
  }

  a {
    display: ${(props) => (props.header ? 'block' : 'inline-block')};
    padding: 10px 0px;
    text-decoration: none;
    color: ${(props) => (props.header ? '#fff' : '#a7a7a7')};
    z-index: 1000;

    @media (max-width: 850px) {
      display: inline-block;
      margin: 12px;
    }

    &::before,
    &::after {
      display: inline-block;
      margin-bottom: 1px;
      opacity: 0;
      transition: transform 0.3s, opacity 0.2s;
      text-shadow: 2px 2px 1px #000;

      @media (max-width: 850px) {
        display: none;
      }
    }

    &::before {
      margin-right: 6px;
      content: '{';
      font-size: ${(props) => (props.header ? '28px' : '44px')};
      transform: translateX(10px);
      z-index: -1;
    }

    &::after {
      margin-left: 6px;
      content: '}';
      font-size: ${(props) => (props.header ? '28px' : '44px')};
      transform: translateX(-10px);
      z-index: -1;
    }

    &:hover::before,
    &:hover::after {
      opacity: 1;
      transform: translateX(0px);
    }

    svg {
      width: ${(props) => (props.header ? '20px' : '30px')};
      fill: ${(props) => (props.header ? '#fff' : '#a7a7a7')};

      @media (max-width: 850px) {
        width: 30px;
      }
    }
  }
`;
