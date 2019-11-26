import React from 'react';
import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyles = createGlobalStyle`
  body {
    background-color: #fff;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
  }
`;
export const GlobalStyles = () => <StyledGlobalStyles />;
