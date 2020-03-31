import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../Context';

export default function ContactIcons() {
  const { content } = useContext(Context);

  return (
    <StyledContactIcons>
      {content.contact.icons.map(icon => (
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
  position: absolute;
  left: 30px;

  @media (max-width: 768px) {
    top: 80%;
  }

  @media (min-width: 1300px) {
    position: fixed;
  }

  a {
    display: block;
    padding: 10px 0px;
    text-decoration: none;
    color: #a7a7a7;
    z-index: 1000;

    @media (max-width: 768px) {
      display: inline-block;
      margin-right: 25px;
    }

    &::before,
    &::after {
      display: inline-block;
      margin-bottom: 1px;
      opacity: 0;
      transition: transform 0.3s, opacity 0.2s;
      text-shadow: 2px 2px 1px #000;

      @media (max-width: 768px) {
        display: none;
      }
    }

    &::before {
      margin-right: 6px;
      content: '{';
      font-size: 28px;
      transform: translateX(10px);
      z-index: -1;
    }

    &::after {
      margin-left: 6px;
      content: '}';
      font-size: 28px;
      transform: translateX(-10px);
      z-index: -1;
    }

    &:hover::before,
    &:hover::after {
      opacity: 1;
      transform: translateX(0px);
    }

    svg {
      width: 20px;
      fill: #a7a7a7;

      @media (max-width: 768px) {
        width: 30px;
      }
    }
  }
`;
