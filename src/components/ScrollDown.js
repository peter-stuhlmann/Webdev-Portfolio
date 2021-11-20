import React, { useContext } from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

import { Context } from '../Context';

export default function ScrollDown() {
  const { content, language } = useContext(Context);

  const scrollOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -55;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <StyledScrollDown
      smooth
      to={language === 'german' ? '#ueber-mich' : '#about'}
      scroll={scrollOffset}
    >
      <span>{content.header.scrollDown}</span>
      <span />
    </StyledScrollDown>
  );
}

const StyledScrollDown = styled(HashLink)`
  position: absolute;
  right: 30px;
  bottom: 0;
  height: 190px;
  width: 50px;
  text-decoration: none;
  transition: all 0.5s;

  span {
    &:first-child {
      position: relative;
      left: 16px;
      margin: 0;
      color: #a7a7a7;
      font-size: 11px;
      transition: all 0.5s;

      writing-mode: vertical-rl;
    }

    &:last-child {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      width: 1px;
      height: 100px;
      margin: auto;
      background-color: #a7a7a7;
    }
  }

  &:hover {
    bottom: -25px;
    height: 215px;

    span:first-child {
      margin: 25px 0 0 0;
    }
  }
`;
