import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../assets/img/peter-stuhlmann.jpg';
import ContactIcons from './ContactIcons';
import ScrollDown from './ScrollDown';
import TypingEffect from './TypingEffect';

export default function Header() {
  return (
    <StyledHeader>
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
  background-image: url(${BackgroundImage});
  background-color: rgba(0, 0, 0, 0.5);
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
  box-shadow: inset 0px -12px 10px -10px rgba(0, 0, 0, 0.4);
`;
