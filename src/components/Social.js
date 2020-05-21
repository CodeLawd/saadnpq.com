import React from 'react'
import styled from 'styled-components'
import { FaMastodon, FaGithub, FaTwitter, FaReddit } from 'react-icons/fa'

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
      <Item href="https://mstdn.io/@saadnpq" target='_blank'  rel="me">
          <Icon> <FaMastodon /> </Icon>
          <div>Mastodon</div>
      </Item>
      <Item href="https://twitter.com/saadnpq" target='_blank'  rel="noopener noreferrer">
        <Icon> <FaTwitter /> </Icon>
        <div>Twitter</div>
      </Item>
      <Item href="https://reddit.com/u/saadnpq" target='_blank'  rel="noopener noreferrer">
          <Icon> <FaReddit /> </Icon>
          <div>Reddit</div>
      </Item>
    </Container>
  )
}

export default Social
