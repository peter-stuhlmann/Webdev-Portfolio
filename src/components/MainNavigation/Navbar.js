import React, { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import German from '../../assets/img/de.png';
import English from '../../assets/img/en.png';

import { Context } from '../../Context';
import styled from 'styled-components';

function Navbar({ open, setOpen }) {
  const { content, changeLanguage, languageButton } = useContext(Context);

  return (
    <StyledNavbar open={open}>
      {content.header.navigation.map(links => (
        <HashLink
          smooth
          key={links.href}
          to={links.href}
          onClick={() => setOpen(false)}
        >
          {links.linkText}
        </HashLink>
      ))}
      <img
        src={languageButton === 'EN' ? English : German}
        onClick={() => changeLanguage()}
        alt={languageButton}
      />
    </StyledNavbar>
  );
}

export default Navbar;

const StyledNavbar = styled.nav`
  background-color: #24292e;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  max-width: 80vw;
  overflow-y: auto;
  padding: 0;
  position: fixed;
  text-align: left;
  top: 0;
  transform: ${({ open }) =>
    open ? 'translateX(0)' : 'translateX(calc(-100% - 7px))'};
  transition: transform 0.3s ease-in-out;
  width: 300px;

  @media (min-width: 1650px) {
    text-align: right;
  }

  a {
    color: #fff;
    font-size: 14px;
    padding: 7px 12px;
    text-decoration: none;
    transition: 0.2s;

    @media (min-width: 850px) {
      &:hover {
        color: #b0b0b0;
      }
    }

    &:first-child {
      margin-top: 45px;
    }
  }

  @media (min-width: 850px) {
    box-shadow: none;
    display: block;
    height: 30px;
    margin: 0 auto;
    max-width: 100%;
    overflow-y: hidden;
    padding: 2px 0;
    position: static;
    text-align: right;
    transform: translateX(0);
    width: 100%;
  }

  img {
    cursor: pointer;
    height: 15px;
    margin-left: 20px;
    vertical-align: middle;

    @media (max-width: 849px) {
      height: 21px;
      margin-left: 0;
      padding: 12px;
      width: 36px;
    }
  }
`;
