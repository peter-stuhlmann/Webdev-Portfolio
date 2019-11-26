import React from 'react';
import { createGlobalStyle } from 'styled-components';
import RalewayRegular from '../../assets/fonts/raleway/Raleway-Regular.ttf';

const StyledGlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'WebDevFont Regular';
    src: url(${RalewayRegular});
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #fff;
    font-family: 'WebDevFont Regular', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
    text-transform: uppercase;

    .wrap {
      width: 100%;
      max-width: 1170px;
      margin: 50px auto;
      padding: 15px;
      box-sizing: border-box;
    }

    h2 {
      text-align: center;
    }

    .description {
      color: grey;
      text-align: center;
    }
  }
`;
export const GlobalStyles = () => <StyledGlobalStyles />;
