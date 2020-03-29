import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import { Context } from '../Context';

export default function TypingEffect() {
  const { content } = useContext(Context);

  return <StyledTypingEffect>{content.header.heading}</StyledTypingEffect>;
}

const animatedText = keyframes`
  from {
    width: 0;
  }
  to {
    width: 550px;
  }
`;

const animatedCursor = keyframes`
  from {
    border-right-color: #fff;
  }
  to {
    border-right-color: transparent;
  }
`;

const StyledTypingEffect = styled.h1`
  border-right: solid 3px #fff;
  white-space: nowrap;
  overflow: hidden;
  font-family: 'WebDevFont SourceCode', monospace;
  font-size: 50px;
  color: #fff;
  margin: 0 auto;
  animation: ${animatedText} 2s steps(19, end) 1s 1 normal both,
    ${animatedCursor} 700ms steps(19, end) infinite;
`;
