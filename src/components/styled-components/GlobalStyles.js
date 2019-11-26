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

    .wrap {
      width: 100%;
      max-width: 1170px;
      margin: 50px auto;
      padding: 15px;
      box-sizing: border-box;
    }

    h2 {
      text-align: center;
      text-transform: uppercase;
    }

    article {
      .description {
        color: grey;
        text-align: center;
        text-transform: uppercase;
        margin: 10px 0;
      }

      p {
        text-align: center;
        margin: 35px 0;      }
    }

    hr {
      background-color: #fff;
      padding: 0;
      margin: 80px;
      border: 0;
      height: 1px;
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    }
  }
`;
export const GlobalStyles = () => <StyledGlobalStyles />;
