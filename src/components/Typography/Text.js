import styled from 'styled-components';

const Text = styled.p`
  font-size: 16px;

  ${({ align }) => align && `
    text-align: ${align}
  `}
`;

export default Text;