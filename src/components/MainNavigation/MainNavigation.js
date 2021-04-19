import React, { useContext, useEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { Context } from '../../Context';
import ToggleButton from './ToggleButton';
import Navbar from './Navbar';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export default function MainNavigation() {
  const { content } = useContext(Context);

  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <StyledMainNavigation ref={node}>
      <ToggleButton open={open} setOpen={setOpen} />
      <div className="site-title-desktop">
        <HashLink to="/#top">{content.siteTitle.desktop}</HashLink>
      </div>
      <Navbar open={open} setOpen={setOpen} />
      <div className="site-title-mobile">
        <HashLink to="/#top">{content.siteTitle.mobile}</HashLink>
      </div>
      <Backdrop open={open} />
    </StyledMainNavigation>
  );
}

const Backdrop = createGlobalStyle`
  body::after {
    content: '';
    transition: opacity 0.3s ease-in-out;
    opacity: ${(props) => (props.open ? '1' : '0')};
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 3;
    transform: ${(props) =>
      props.open ? 'translateX(0)' : 'translateX(calc(-100%))'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }
`;

const StyledMainNavigation = styled.div`
  background-color: #24292e;
  display: flex;
  height: 28px;
  padding: 15px;
  position: sticky;
  top: 0;
  z-index: 4;

  a {
    font-weight: bold;
    letter-spacing: 1.5px;
  }

  .site-title-desktop {
    margin-left: 15px;
    padding: 2px 0;
    white-space: nowrap;

    @media (max-width: 869px) {
      display: none;
    }

    a {
      color: #fff;
      letter-spacing: 1.5px;
      text-decoration: none;
    }
  }

  .site-title-mobile {
    margin-left: 15px;
    text-align: center;
    width: 100%;

    @media (min-width: 870px) {
      display: none;
    }

    a {
      color: #fff;
      letter-spacing: 1.5px;
      text-decoration: none;
    }
  }
`;
