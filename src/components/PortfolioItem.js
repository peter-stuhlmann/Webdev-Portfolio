import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../assets/img/portfolio-item-background.jpg';

export default function PortfolioItem() {
  return (
    <StyledPortfolioItem>
      <div className="content">
        <h3>Lorem ipsum</h3>
        <p>At vero eos et accusam et justo duo dolores et ea rebum.</p>
      </div>
    </StyledPortfolioItem>
  );
}

const StyledPortfolioItem = styled.section`
  position: relative;
  z-index: 2;
  height: 222px;
  width: 100%;
  border-bottom: 1px solid #1e2738;
  background-position: center;
  background-size: cover;
  background-image: url(${BackgroundImage});

  .content {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
