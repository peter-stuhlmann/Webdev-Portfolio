import React from 'react';
import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyles = createGlobalStyle`
  body {
    background-color: #fff;
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
  }
`;
export const GlobalStyles = () => <StyledGlobalStyles />;
