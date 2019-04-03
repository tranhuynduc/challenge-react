
import React from 'react'
import PaymentWrapper from './PaymentWrapper';
import { Text } from '../Typography';
import { Button } from '../Button';
import CustomRadio from '../Form/CustomRadio';
import CloseButton from './CloseButton';
import ListAmount from './ListAmount';

const Payment = ({ listAmount, itemID, currency, handleSelectPayment, isOpen, handleClose, handlePay }) => {
  return (
    <PaymentWrapper isOpen={isOpen}>
      <CloseButton onClick={() => handleClose(null)} />
      <Text>Select the amount to donate ({currency})</Text>
      <ListAmount>
        {listAmount.map((amount, index) => (
          <CustomRadio key={index} >
            <input
              type="radio"
              defaultChecked={index === 0}
              name={`payment-${itemID}`}
              onClick={() => handleSelectPayment(amount)} />
            {amount}
            <span></span>
          </CustomRadio>
        ))}
      </ListAmount>
      <Button primary onClick={() => handlePay(itemID, currency)}>Pay</Button>
    </PaymentWrapper>
  )
}

export default Payment;
