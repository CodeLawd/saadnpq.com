import React from 'react'
import styled from 'styled-components'
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.2rem;
`

const Item = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`

const Icon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 3px;
`

function Social(props){
  return (
    <Container>
      <Item href="https://github.com/saadnpq" target='_blank'  rel="noopener noreferrer">
        <Icon> <AiOutlineGithub /> </Icon>
        <div>Github</div>
      </Item>
      <Item href="https://twitter.com/saadnpq" target='_blank'  rel="noopener noreferrer">
        <Icon> <AiOutlineTwitter /> </Icon>
        <div>Twitter</div>
      </Item>
    </Container>
  )
}

export default Social