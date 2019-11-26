import React from 'react';
import styled from 'styled-components';

export default function ContactIcons() {
  return (
    <StyledContactIcons>
      <a href="https://github.com/peter-stuhlmann">Github</a>
      <a href="https://linkedin.com/in/peter-stuhlmann/">Linkedin</a>
      <a href="mailto:info@peter-stuhlmann.de">Mail</a>
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

    &::before,
    &::after {
      display: inline-block;
      margin-bottom: 1px;
      opacity: 0;
      transition: transform 0.3s, opacity 0.2s;
    }

    &::before {
      margin-right: 6px;
      content: '<';
      transform: translateX(10px);
    }

    &::after {
      margin-left: 6px;
      content: '>';
      transform: translateX(-10px);
    }

    &:hover::before,
    &:hover::after {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;
