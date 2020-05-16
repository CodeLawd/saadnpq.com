import React, {useContext} from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Settings from './Settings'
import Logo from './Logo'
import Social from './Social'

import {settingsContext} from '../contexts/SettingsContext'
import {dark, light} from '../data/colors'

const Container = styled.div`
  margin-top: 40px;
  font-family: 'Quicksand', sans-serif;
  color: ${props => props.theme.primaryColor};
  display: grid;
  grid-template-areas: 
    'logo navigation settings'
    'logo navigation social';
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr 0.5fr auto;
  grid-row-gap: 30px;

`

const StyledLogo = styled.div`
  /* flex:1; */
  grid-area: logo;
`

const StyledNav = styled.div`
  /* flex:0.5; */
  grid-area: navigation;

  @media (max-width: 481px) {
    display: none;
  }
  @media (max-height: 630px) {
    display: none;
  }
`

const StyledSettings = styled.div`
  grid-area: settings;

  @media (max-width: 481px) {
    display: none;
  }
  @media (max-height: 630px) {
    display: none;
  }
`

const StyledSocial = styled.div`
  grid-area: social;

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
        <StyledSocial>
          <Social />
        </StyledSocial>
    </Container>
  )
}

export default Header