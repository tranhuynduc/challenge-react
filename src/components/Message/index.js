import React from 'react'
import styled from 'styled-components';

const Message = styled.div`
  font-weight: bold;
  position: fixed;
  z-index: 5;
  bottom: 10px;
  max-width: 300px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 15px 20px;
  color: white;
  border: 1px solid green;
  background: green;

  ${({isError}) => isError && `
    background: red;
  `}
`;


export default ({error, message}) => {
  if (!message) return null;

  return (
    <Message error={error ? true : false}>
      <p>{message}</p>
    </Message>
  )
}

