import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;

  ${({ justifyContent }) => justifyContent && `
    justify-content: ${justifyContent};
  `}

  ${({ alignItems }) => alignItems && `
    align-items: ${alignItems};
  `}
`;

export default FlexContainer;