import React from 'react'
import styled from 'styled-components'
import { FaMastodon, FaGithub, FaTwitter } from 'react-icons/fa'

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
        <Icon> <FaGithub /> </Icon>
        <div>Github</div>
      </Item>
      <Item rel="me" href="https://mstdn.io/@saadnpq" target='_blank'  rel="noopener noreferrer">
          <Icon> <FaMastodon /> </Icon>
          <div>Mastodon</div>
      </Item>
      <Item href="https://twitter.com/saadnpq" target='_blank'  rel="noopener noreferrer">
        <Icon> <FaTwitter /> </Icon>
        <div>Twitter</div>
      </Item>
    </Container>
  )
}

export default Social
