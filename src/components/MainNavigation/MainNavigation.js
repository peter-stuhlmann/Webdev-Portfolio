import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Context } from '../../Context';
import ToggleButton from './ToggleButton';
import Navbar from './Navbar';
import { useOnClickOutside } from '../../helpers/useOnClickOutside';
import useWindowSize from '../../helpers/useWindowSize';

export default function MainNavigation() {
  const { content } = useContext(Context);

  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const { width } = useWindowSize();

  return (
    <StyledMainNavigation ref={node}>
      <ToggleButton open={open} setOpen={setOpen} />
      <Title>
        <Link to="/" onClick={() => scrollToTop()}>
          {width > 850 ? content.siteTitle.desktop : content.siteTitle.mobile}
        </Link>
      </Title>
      <Navbar open={open} setOpen={setOpen} />
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
`;

const Title = styled.div`
  margin-left: 15px;
  white-space: nowrap;

  a {
    color: #fff;
    letter-spacing: 1.5px;
    text-decoration: none;
  }

  @media (max-width: 869px) {
    text-align: center;
    width: 100%;
  }
`;
