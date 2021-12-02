import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import ContactIcons from './ContactIcons';
import ScrollDown from './ScrollDown';
import TypingEffect from './TypingEffect';
import { WebP } from '../helpers/DetectBrowserSupport';

// background images for different screen sizes
const MWebP =
  'https://webdev-portfolio-api.vercel.app/img/peter-stuhlmann-m.webp';
const MJpeg =
  'https://webdev-portfolio-api.vercel.app/img/peter-stuhlmann-m.jpg';
const LWebP =
  'https://webdev-portfolio-api.vercel.app/img/peter-stuhlmann-l.webp';
const LJpeg =
  'https://webdev-portfolio-api.vercel.app/img/peter-stuhlmann-l.jpg';
const XlWebP =
  'https://webdev-portfolio-api.vercel.app/img/peter-stuhlmann-xl.webp';
const XlJpeg =
  'https://webdev-portfolio-api.vercel.app/img/peter-stuhlmann-xl.jpg';
const XxlWebP =
  'https://webdev-portfolio-api.vercel.app/img/peter-stuhlmann-xxl.webp';
const XxlJpeg =
  'https://webdev-portfolio-api.vercel.app/img/peter-stuhlmann-xxl.jpg';

export default function Header() {
  const headerImage = useRef();

  useEffect(() => {
    const parallax = () => {
      if (headerImage.current) {
        headerImage.current.style.backgroundPositionY = `${window.pageYOffset *
          0.25}px`;
      }
    };
    window.addEventListener('scroll', parallax);
    return () => {
      window.removeEventListener('scroll', parallax);
    };
  }, [headerImage]);

  return (
    <StyledHeader ref={headerImage}>
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
    background-image: url('${WebP() ? LWebP : LJpeg}');
  }

  @media (max-width: 480px) {
    background-image: url('${WebP() ? MWebP : MJpeg}');
  }
`;
