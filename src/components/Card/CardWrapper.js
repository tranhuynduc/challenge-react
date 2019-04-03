import styled from 'styled-components';

const CardWrapper = styled.div`
  border: 1px solid #ccc;
  height: 300px;
  position: relative;
  margin-bottom: 30px;
  overflow: hidden;

  ${({ image }) => image && `
    background: url('${image}') center center / cover no-repeat;
  `}
`;

export default CardWrapper;