import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../assets/img/portfolio-item-background.jpg';

export default function PortfolioItem() {
  return (
    <StyledPortfolioItem>
      <div className="content">
        <div className="text">
          <h3>Lorem ipsum</h3>
          <p>At vero eos et accusam et justo duo dolores et ea rebum.</p>
        </div>
        <a href="#" className="button">
          Live Demo
        </a>
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

    .text {
      margin: 33px 0 0 50px;

      h3 {
        margin-bottom: 15px;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
      }

      p {
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
      }
    }

    .button {
      position: absolute;
      right: 10%;
      padding: 5px 8px;
      transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
      text-decoration: none;
      color: #000;

      &:before {
        position: absolute;
        content: '';
        height: 20px;
        width: 20px;
        border-style: solid;
        border-width: 0;
        transition-property: height, width, border-color;
        transition-duration: 0.4s, 0.4s, 0.5s;
        transition-timing-function: ease, ease,
          cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
        transition-delay: 0s, 0s, 0.25s;
        border-color: #000;
        border-left-width: 1px;
        border-top-width: 1px;
        left: -7px;
        top: -6px;
      }

      &:after {
        position: absolute;
        content: '';
        height: 21px;
        width: 20px;
        border-color: transparent;
        border-style: solid;
        border-width: 0;
        transition-property: height, width, border-color;
        transition-duration: 0.4s, 0.4s, 0.5s;
        transition-timing-function: ease, ease, cubic-bezier(0.4, 0, 0.5, 1);
        transition-delay: 0s, 0s, 0.25s;
        border-bottom-width: 1px;
        border-color: #000;
        border-right-width: 1px;
        bottom: -5px;
        right: -5px;
      }

      &:hover:before,
      &:hover:after {
        cursor: pointer;
        height: calc(100% + 10px);
        width: calc(100% + 10px);
      }
    }
  }
`;
