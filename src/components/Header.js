import React from 'react';
import styled from 'styled-components';

import ContactIcons from './ContactIcons';
import ScrollDown from './ScrollDown';
import TypingEffect from './TypingEffect';
import { WebP } from '../helpers/DetectBrowserSupport';

// Import background images
import MWebP from '../assets/img/peter-stuhlmann-m.webp';
import MJpeg from '../assets/img/peter-stuhlmann-m.jpg';
import LWebP from '../assets/img/peter-stuhlmann-l.webp';
import LJpeg from '../assets/img/peter-stuhlmann-l.jpg';
import XlWebP from '../assets/img/peter-stuhlmann-xl.webp';
import XlJpeg from '../assets/img/peter-stuhlmann-xl.jpg';
import XxlWebP from '../assets/img/peter-stuhlmann-xxl.webp';
import XxlJpeg from '../assets/img/peter-stuhlmann-xxl.jpg';

export default function Header() {
  return (
    <StyledHeader id="top">
      <TypingEffect />
      <ContactIcons header />
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
  background-image: url('${WebP() ? XxlWebP : XxlJpeg}');
  background-color: #454545;
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
  box-shadow: inset 0px -12px 10px -10px rgba(0, 0, 0, 0.4);
  margin-top: -58px;

  @media (max-width: 1400px) {
    background-image: url('${WebP() ? XlWebP : XlJpeg}');
  }
  
  @media (max-width: 850px) {
    background-attachment: initial;
    background-image: url('${WebP() ? LWebP : LJpeg}');
  }

  @media (max-width: 480px) {
    background-image: url('${WebP() ? MWebP : MJpeg}');
  }
`;
