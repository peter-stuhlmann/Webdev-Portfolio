import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Context } from '../../Context';
import ToggleButton from './ToggleButton';
import Navbar from './Navbar';
import { useOnClickOutside } from '../../helpers/useOnClickOutside';

export default function MainNavigation() {
  const { content } = useContext(Context);

  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <StyledMainNavigation ref={node}>
      <ToggleButton open={open} setOpen={setOpen} />
      <div className="site-title-desktop">
        <Link to="/" onClick={() => scrollToTop()}>
          {content.siteTitle.desktop}
        </Link>
      </div>
      <Navbar open={open} setOpen={setOpen} />
      <div className="site-title-mobile">
        <Link to="/" onClick={() => scrollToTop()}>
          {content.siteTitle.mobile}
        </Link>
      </div>
    </StyledMainNavigation>
  );
}

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
