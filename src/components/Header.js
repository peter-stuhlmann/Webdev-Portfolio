import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../assets/img/peter-stuhlmann.jpg';
import ScrollDown from './ScrollDown';

export default function Header() {
  return (
    <StyledHeader>
      <span>Header</span>
      <ScrollDown />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
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
