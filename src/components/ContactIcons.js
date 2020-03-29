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

  a {
    display: block;
    padding: 10px 0px;
    text-decoration: none;
    color: #a7a7a7;
    z-index: 1000;

    &::before,
    &::after {
      display: inline-block;
      margin-bottom: 1px;
      opacity: 0;
      transition: transform 0.3s, opacity 0.2s;
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
    }
  }
`;
