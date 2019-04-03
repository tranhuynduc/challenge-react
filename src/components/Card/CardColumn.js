import styled from 'styled-components';

const CardWColumn = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export default CardWColumn;