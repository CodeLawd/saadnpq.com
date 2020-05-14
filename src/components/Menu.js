import React, { useEffect, useState, useContext} from 'react'
import styled from 'styled-components'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'

import Nav from './Nav'
import Settings from './Settings'
import Contacts  from './Contacts'

import {settingsContext} from '../contexts/SettingsContext'
import {dark, light} from '../data/colors'

const MenuContainer = styled.div`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.inverseColor}; 
  position: ${props => props.position};
  top: ${props => props.top};
  right: ${props =>  props.theme.globalBorderWidth};
  border-radius: 0px 0px 0px 10px;
  display: flex;
  flex-direction: column;
  font-family: 'Quicksand', sans-serif;
  z-index: 99;

  @media (max-width: 481px) {
    position: fixed;
    top: ${props =>  props.theme.globalBorderWidth};
  }
  @media (max-height: 630px) {
    position: fixed;
    top: ${props =>  props.theme.globalBorderWidth};
  }
`

const MenuButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 10px;
  font-size: 1.5rem;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const MenuContent = styled.div`
  display: ${props => props.display};
  height: 300px;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
`

const NavAndSettings = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledContacts = styled.div`
  align-self: flex-end;
`

function Menu() {
  const [position, setPosition] = useState('absolute')
  const [top, setTop] = useState('100vh')
  const [showMenu, setShowMenu] = useState(false)

  const {darkMode} = useContext(settingsContext)

  const handleScroll = (e) => {
    const borderWidthpx = dark.globalBorderWidth()
    const borderWidth = Number.parseInt(borderWidthpx.slice(0, borderWidthpx.indexOf('px')))
    const scrollPosition = e.target.defaultView.scrollY + borderWidth 
    const viewPort = window.innerHeight 

    if (scrollPosition >= viewPort) {
      setPosition('fixed')
      setTop(`${dark.globalBorderWidth()}`)
    } else {
      setPosition('absolute')
      setTop('100vh')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <MenuContainer showMenu={showMenu} position={position} top={top}>
      <MenuButton onClick={() => setShowMenu(last => !last)}>
        {showMenu ? <RiCloseLine /> : <RiMenu3Line /> }
      </MenuButton>
      <MenuContent display={!showMenu ? "none" : "flex" }>
        <NavAndSettings>
          <Nav />
          <Settings color1={darkMode ? dark.inverseColor() : light.inverseColor() } color2={darkMode ? dark.railColorMenu() : light.railColorMenu()}/>
        </NavAndSettings>
        <StyledContacts>
          <Contacts inverse={true} />
        </StyledContacts>
      </MenuContent>
    </MenuContainer>
  )
}

export default Menu