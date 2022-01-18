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
      <a
        href={content.footer.notice.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={content.footer.notice.img} alt={content.footer.text} />
        <span>{content.footer.notice.text[0]}</span>
        <span>{content.footer.notice.text[1]}</span>
      </a>
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
    color: #929090;
    margin: 0;

    @media screen and (max-width: 1050px) {
      flex: 0 0 100%;
      text-align: center;
    }

    a {
      text-decoration: none;
      color: #929090;

      @media screen and (max-width: 1050px) {
        flex: 0 0 100%;
        text-align: center;
      }
    }
  }

  & > a {
    text-decoration: none;
    color: #929090;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 0 25px;
    box-sizing: border-box;

    @media screen and (max-width: 1050px) {
      flex: 0 0 100%;
      padding: 0;
    }

    span {
      margin-left: 5px;
      flex: 1 0 auto;

      @media screen and (max-width: 480px) {
        display: none;
      }
    }

    img {
      height: 20px;
    }
  }

  nav {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    @media screen and (max-width: 1050px) {
      flex: 0 0 100%;
      margin-top: 15px;
      text-align: center;
    }

    a {
      text-decoration: none;
      color: #929090;

      &:first-child {
        margin-right: 25px;

        @media screen and (max-width: 1050px) {
          margin-right: 0;
        }
      }

      @media screen and (max-width: 1050px) {
        flex: 0 0 100%;
        text-align: center;
      }
    }
  }
`;
