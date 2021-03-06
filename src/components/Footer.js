import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Context } from '../Context';

export default function Footer() {
  const { content } = useContext(Context);
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <p>
        <Link to="/">&copy; {content.footer.copyright.owner}</Link>,{' '}
        {content.footer.copyright.startYear} - {currentYear}
      </p>
      <nav>
        {content.footer.nav.map((link) => (
          <Link key={link.href} to={link.href}>
            {link.linkText}
          </Link>
        ))}
      </nav>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  background-color: #24292e;

  p {
    color: grey;
    margin: 0;

    @media screen and (max-width: 768px) {
      flex: 0 0 100%;
      text-align: center;
    }

    a {
      text-decoration: none;
      color: grey;

      @media screen and (max-width: 768px) {
        flex: 0 0 100%;
        text-align: center;
      }
    }
  }

  nav {
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
      color: grey;

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
