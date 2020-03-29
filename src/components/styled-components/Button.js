import React from 'react';
import styled from 'styled-components';

export const ButtonLink = props => {
  const { href, linkText, title, style } = props;

  return (
    <StyledButtonLink
      href={href}
      style={style}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      {linkText}
    </StyledButtonLink>
  );
};

const StyledButtonLink = styled.a`
  background-color: #24292e;
  border-radius: 5px;
  color: #fff;
  display: block;
  margin: 0 auto;
  padding: 7px 15px;
  text-align: center;
  text-decoration: none;
  transition: 0.2s;
  width: ${props => props.width || '300px'};

  &:hover {
    color: grey;
  }
`;
