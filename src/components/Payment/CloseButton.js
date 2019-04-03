import styled from 'styled-components';

const CloseButton = styled.button`
  position: absolute;
  background-color: transparent;
  width: 20px;
  height: 20px;
  top: 20px;
  right: 20px;
  display: block;
  margin: 0;
  border: 0;
  cursor: pointer;
  transition: opacity .15s;

  &:hover {
    opacity: .6;
  }

  &:focus {
    outline: none;
  }

  &:before,
  &:after {
    height: 2px;
    width: 14px;
    background: #000;
    content: '';
    position: absolute;
    top: 8px;
    left: 2px;
    display: block;
  }

  &:before {
    transform: rotateZ(45deg);
  }

  &:after {
    transform: rotateZ(-45deg);
  }
`;

export default CloseButton;