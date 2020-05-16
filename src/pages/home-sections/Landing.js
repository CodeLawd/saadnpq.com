import React from 'react'
import styled from 'styled-components'
import {AiOutlineArrowDown} from 'react-icons/ai'

import Header from '../../components/Header'
import Contacts from '../../components/Contacts'
import Intro from '../../components/Intro'

const Content = styled.div`
  width: 85%;
  margin:auto;
`

const Container = styled.div`
  height: ${props => props.innerHeight}px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledHeader = styled.div`
  flex: 1;
`

const StyledContacts = styled.div`
  margin-bottom: 20px;
  align-self: flex-end;
  color: ${props => props.theme.primaryColor};
  @media (max-width: 481px) {
    display: none;
  }
  @media (max-height: 630px) {
    display: none;
  }
`

const ScrollIndicator = styled.div`
  margin-bottom: 20px;
  color: ${props => props.theme.projectsMeta};
  font-size: 2rem;
  align-self: center;
`

function Landing() {

  return (
    <Content id='top'>
      <Container innerHeight={window.innerHeight}>
        <StyledHeader>
          <Header/>
        </StyledHeader>
        <Intro />
        <StyledContacts>
          <Contacts />
        </StyledContacts>
        <ScrollIndicator>
          <AiOutlineArrowDown />
        </ScrollIndicator>
      </Container>
    </Content>
  )
}

export default Landing
