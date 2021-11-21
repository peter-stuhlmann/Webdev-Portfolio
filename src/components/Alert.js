import React from 'react';
import styled from 'styled-components';

export default function Alert(props) {
  const { children, type, noIcon } = props;

  const exclamation = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
    </svg>
  );

  let icon;
  if (type === 'warning' && !noIcon) {
    icon = exclamation;
  }

  return (
    <Container type={type}>
      {icon}
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
  padding: 5px 10px;
  background-color: ${(props) =>
    (props.type === 'warning' && '#ffdc9d') ||
    (props.type === 'error' && '#ff9d9d') ||
    (props.type === 'success' && '#c0ff9d') ||
    (props.type === 'info' && '#bddeff') ||
    '#f1f1f1'};

  svg {
    height: 20px;
    margin-right: 10px;
  }
`;
