import React, { Fragment } from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Fragment>
      <StyledFooter>
        <p>&copy; Peter R. Stuhlmann, 2019</p>
        <div>
          <a href="#">Impressum</a>
          <a href="#">Datenschutzerklärung</a>
        </div>
      </StyledFooter>
    </Fragment>
  );
}

const StyledFooter = styled.footer`
  padding: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  background-color: #24292e;

  p {
    color: #ca1414;
    margin: 0;

    @media screen and (max-width: 768px) {
      flex: 0 0 100%;
      text-align: center;
    }
  }

  div {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      flex: 0 0 100%;
      margin-top: 15px;
      text-align: center;
    }

    a {
      text-decoration: none;
      color: #ca1414;

      &:first-child {
        margin-right: 25px;

        @media screen and (max-width: 768px) {
          margin-right: 0;
        }
      }

      @media screen and (max-width: 768px) {
        flex: 0 0 100%;
        text-align: center;
      }
    }
  }
`;
