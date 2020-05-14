import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
`
const Item = styled.a`
  margin-bottom: 10px;
  margin-right: auto;
  cursor: pointer;
`

function Nav(props) {

  function  scrollTo(id) {
    var el = document.getElementById(id);
    el.scrollIntoView(true);
  }

  return (
    <Container>
      <Item onClick={() => scrollTo('top')}>
          home
      </Item>
      <Item onClick={() => scrollTo('about')}>
          about
      </Item>
      <Item onClick={() => scrollTo('projects')}>
          projects
      </Item>
      <Item onClick={() => scrollTo('contact')}>
          contact
      </Item>
      <Item>
        <a href='https://github.com/saadnpq' target='_blank'  rel="noopener noreferrer" > github</a>
      </Item>
    </Container>
  )
}

export default Nav