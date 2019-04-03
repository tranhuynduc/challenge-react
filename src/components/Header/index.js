import React from 'react'
import PageHeader from './PageHeader'
import HeaderWrapper from './HeaderWrapper';
import { Container, FlexContainer } from '../Layout';
import { Text } from '../Typography';

const Header = ({ donate }) => {
  return (
    <HeaderWrapper>
      <Container>
        <FlexContainer justifyContent="space-between" alignItems="center" >
          <PageHeader>Tamboon React</PageHeader>
          <Text>All donations: {donate}</Text>
        </FlexContainer>
      </Container>
    </HeaderWrapper>
  )
}

export default Header;
