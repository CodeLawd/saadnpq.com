import React, {useContext} from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Settings from './Settings'
import Logo from './Logo'

import {settingsContext} from '../contexts/SettingsContext'
import {dark, light} from '../data/colors'

const Container = styled.div`
  margin-top: 40px;
  font-family: 'Quicksand', sans-serif;
  display:flex;
  flex-direction: row;
  color: ${props => props.theme.primaryColor};
`

const StyledLogo = styled.div`
  flex:1;
`

const StyledNav = styled.div`
  flex:0.5;
  @media (max-width: 481px) {
    display: none;
  }
  @media (max-height: 630px) {
    display: none;
  }
`

const StyledSettings = styled.div`
  @media (max-width: 481px) {
    display: none;
  }
  @media (max-height: 630px) {
    display: none;
  }
`

function Header(props) {
const {darkMode} = useContext(settingsContext)

  return (
    <Container>
      <StyledLogo>
        <Logo />
      </StyledLogo>
        <StyledNav>
          <Nav />
        </StyledNav>
        <StyledSettings>
          <Settings color1={darkMode ? dark.primaryColor() : light.primaryColor() } color2={darkMode ? dark.railColorMain() : light.railColorMain()}/>
        </StyledSettings>
    </Container>
  )
}

export default Header