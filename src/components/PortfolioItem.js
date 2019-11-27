import React, { Fragment } from 'react';
import styled from 'styled-components';
import BackgroundImage from '../assets/img/portfolio-item-background.jpg';
import GithubCorner from './GithubCorner';

export default function PortfolioItem(props) {
  const { number, title, description, techStack, liveDemo, githubLink } = props;
  return (
    <StyledPortfolioItem>
      <div className="overlay" />
      <div className="content">
        <div className="number">
          <span>{number}</span>
        </div>
        <div className="text">
          <h3>
            {title}
            {description && (
              <Fragment>
                &nbsp;<span>({description})</span>
              </Fragment>
            )}
          </h3>
          <p>{techStack}</p>
        </div>
        {liveDemo && (
          <a href={liveDemo} className="button">
            Live Demo
          </a>
        )}
        {githubLink && <GithubCorner githubLink={githubLink} />}
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

  .overlay {
    position: absolute;
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
    z-index: 3;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    height: 100%;
    overflow: hidden;
    background-color: #1e273896;
  }

  &:hover .overlay {
    width: 100%;
  }

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

    .number {
      margin-top: 10px;

      span {
        position: relative;
        left: 0;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
        top: -4px;

        &::before {
          position: relative;
          left: 0;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
          content: '';
          top: -5px;
          display: inline-block;
          height: 1px;
          width: 80px;
          margin-right: 12px;
          background-color: #000;
        }
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

  &::before {
    position: absolute;
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
    z-index: 1;
    content: '';
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #fff;
    color: black;
  }

  &:hover::before {
    transform-origin: right;
    width: 0;
  }

  &:hover .number span::before {
    background-color: #fff;
    width: 120px;
  }

  &:hover .number span,
  &:hover h3,
  &:hover p,
  &:hover .button {
    color: #fff;
  }

  &:hover .button:before,
  &:hover .button:after {
    border-color: #fff;
  }


  @media only screen and (max-width: 768px) {
      .overlay {
        width: 100%;
      }

  
      .number span,
      .text h3,
      .text p,
      .button {
        color: #fff;
      }
  
      .button {
        right: 45px;
  
        &:before,
        &:after {
          border-color: #fff;
          height: calc(100% + 10px);
          width: calc(100% + 10px);
        }
      }
    }
  }
  
  @media only screen and (max-width: 768px) {
    height: 280px;
      
    &::before {
      background-color: transparent;
    }
      
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .number {
      margin-top: 40px !important;
  
      span::before {
        display: none !important;
      }
    }
  
    .text {
      margin: 0 !important;
      text-align: center;
    }
  
    .button {
      position: relative !important;
      top: 18px;
      left: 0;
      right: 0;
      color: #fff !important;
      border: 1px solid #fff;

      &::before,
      &::after {
        display: none !important
      }
    }
  }
`;
