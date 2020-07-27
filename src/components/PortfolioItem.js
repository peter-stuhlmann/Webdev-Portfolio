import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { WebP } from '../helpers/DetectBrowserSupport';

import { Context } from '../Context';
import GithubCorner from './GithubCorner';
import { ButtonLink } from './styled-components/Button';

export default function PortfolioItem(props) {
  const { content } = useContext(Context);
  const [portfolioItem, inView] = useInView();
  const [opacity, setOpacity] = useState('0');

  useEffect(() => {
    if (inView) {
      setOpacity('1');
    }
  });

  const { title, description, techStack, liveDemo, githubLink } = props.item;

  let backgroundImage;
  switch (true) {
    case WebP() && window.screen.width < 769:
      backgroundImage = content.portfolio.background.mobile.webp;
      break;
    case WebP() && window.screen.width > 768:
      backgroundImage = content.portfolio.background.desktop.webp;
      break;
    case !WebP() && window.screen.width < 769:
      backgroundImage = content.portfolio.background.mobile.jpg;
      break;
    case !WebP() && window.screen.width > 768:
      backgroundImage = content.portfolio.background.desktop.jpg;
      break;
    default:
  }

  return (
    <StyledPortfolioItem
      ref={portfolioItem}
      style={{
        transition: '.5s',
        transitionDelay: '.2s',
        opacity: opacity,
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="overlay" />
      <div className="content">
        <div className="number">
          <span>{props.number + 1}</span>
        </div>
        <div className="text">
          <h3>{title}</h3>
          {description && <p className="description">({description})</p>}
          {techStack && <p className="techstack">{techStack}</p>}
        </div>
        {liveDemo && (
          <ButtonLink
            href={liveDemo}
            linkText={content.portfolio.liveDemo.linkText}
            className="button"
          />
        )}
        {githubLink && <GithubCorner />}
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
    background-color: rgba(30, 39, 56, 0.8);
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
        margin-bottom: 0;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
      }

      .description {
        font-size: 16px;
        font-weight: normal;
        font-style: italic;
        margin-top: 0;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
      }

      .techstack {
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
  &:hover p {
    color: #fff;
  }

  // live demo button
  .button {
    right: 10%;
  }
  &:hover .button,
  &:hover .button:before,
  &:hover .button:after {
    border-color: #fff;
    color: #fff;
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

  @media (max-width: 768px) {
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
        display: none !important;
      }
    }
  }
`;
