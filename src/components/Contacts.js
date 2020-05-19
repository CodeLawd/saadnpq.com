import React from 'react'
import styled from 'styled-components'

import Copy from './Copy'

const Container = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  font-family: 'Quicksand';
`

const Item = styled.div`
  margin-left: 20px;
`

function Contacts(props) {
  return (
    <Container>
      <Item>
        <Copy copy='saadnpq@protonmail.com' inverse={props.inverse} >Mail</Copy>
      </Item>
      <Item>
        <Copy copy='+201066926400' inverse={props.inverse} >Phone</Copy>
      </Item>
    </Container>
  )
}

export default Contacts