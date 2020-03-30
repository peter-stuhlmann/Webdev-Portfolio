import React from 'react';
import styled from 'styled-components';
import ContactIcons from './ContactIcons';
import ScrollDown from './ScrollDown';
import TypingEffect from './TypingEffect';

export default function Header() {
  return (
    <StyledHeader id="top">
      <TypingEffect />
      <ContactIcons />
      <ScrollDown />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-image: url('img/peter-stuhlmann.jpg');
  background-color: rgba(0, 0, 0, 0.5);
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
  box-shadow: inset 0px -12px 10px -10px rgba(0, 0, 0, 0.4);
  margin-top: -60px;
`;
