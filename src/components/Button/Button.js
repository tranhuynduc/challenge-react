import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 2px solid transparent;
  padding: 0 12px;
  height: 28px;
  line-height: 24px;
  border-radius: 4px;
  cursor: pointer;
  transition: color .2s, background .2s;
  font-weight: bold;

  ${({ primary }) => primary && `
    border-color: #386dd3;
    color: #386dd3;

    &:hover {
      background-color: #386dd3;
      color: #fff;
    }
  `}
`;

export default Button;
