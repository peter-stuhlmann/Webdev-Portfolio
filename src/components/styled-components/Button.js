import React from 'react';
import styled from 'styled-components';

export const ButtonLink = props => {
  const { className, href, linkText, title, style } = props;

  return (
    <StyledButtonLink
      href={href}
      style={style}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {linkText}
    </StyledButtonLink>
  );
};

const StyledButtonLink = styled.a`
  color: #000;
  position: absolute;
  padding: 5px 8px;
  text-align: center;
  transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
  text-decoration: none;

  &:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    border-style: solid;
    border-width: 0;
    transition-property: height, width, border-color;
    transition-duration: 0.4s, 0.4s, 0.5s;
    transition-timing-function: ease, ease, cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
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

  @media (max-width: 768px) {
    &:before,
    &:after {
      border-color: #000;
      height: calc(100% + 10px);
      width: calc(100% + 10px);
    }
  }
`;
