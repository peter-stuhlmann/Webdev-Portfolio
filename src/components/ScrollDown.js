import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../Context';

export default function ScrollDown() {
  const { content, language } = useContext(Context);

  return (
    <StyledScrollDown href={language === 'german' ? '#ueber-mich' : '#about'}>
      <span>{content.header.scrollDown}</span>
      <span />
    </StyledScrollDown>
  );
}

const StyledScrollDown = styled.a`
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
