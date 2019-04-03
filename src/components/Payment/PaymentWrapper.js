import styled from 'styled-components';

const PaymentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(255, 255, 255, .8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #556067;
  transform: translateY(-100%);
  transition: transform .3s;

  ${({ isOpen }) => isOpen && `
    transform: translateY(0);
  `}
`;

export default PaymentWrapper;