import styled from 'styled-components';

const CustomRadio = styled.label`
  position: relative;
  padding-left: 16px;
  margin-bottom: 12px;
  margin-left: 15px;
  cursor: pointer;
  font-size: 18px;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    position: absolute;
    top: 3px;
    left: 0;
    height: 14px;
    width: 14px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: inset 0 0 2px #000;
    transition: background .15s;
  }

  &:hover input ~ span {
    background-color: #ccc;
  }

  input:checked ~ span {
    background-color: #2196F3;
  }

  span:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ span:after {
    display: block;
  }

  span:after {
    top: 5px;
    left: 5px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: white;
  }
`;

export default CustomRadio;