import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 2rem;
`

const Saad = styled.span`
  color: ${props => props.theme.color};
`

const Npq = styled.span`
  color: ${props => props.theme.primaryColor};
`

function Logo() {
  return (
    <Container>
      <Saad>Saad</Saad>
      <Npq>npq</Npq>
    </Container>
  )
}
export default Logo