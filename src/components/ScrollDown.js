import React from 'react';
import styled from 'styled-components';

export default function ScrollDown() {
  return (
    <StyledScrollDown href="#">
      <span>SCROLL DOWN</span>
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
  }
`;
