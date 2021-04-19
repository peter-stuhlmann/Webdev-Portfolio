import React from 'react';
import styled from 'styled-components';

const StyledTextPage = styled.section`
  h1 {
    font-size: 3em;
  }

  h2 {
    text-align: left;
    margin-top: 75px;
  }
`;

export const TextPage = (props) => (
  <StyledTextPage>{props.children}</StyledTextPage>
);
