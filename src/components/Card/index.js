import React from 'react'
import CardWrapper from './CardWrapper';
import CardWColumn from './CardColumn';
import CardBody from './CardBody';
import { Button } from '../Button';
import { Text } from '../Typography';

const Card = ({ id, name, image, children, openPayment }) => {

  return (
    <CardWColumn>
      <CardWrapper image={`images/${image}`}>
        {children}
        <CardBody>
          <Text>{name}</Text>
          <Button primary onClick={() => openPayment(id)}>Donate</Button>
        </CardBody>
      </CardWrapper>
    </CardWColumn>
  )
}

export default Card;
