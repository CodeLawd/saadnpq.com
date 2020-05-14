import React, { useContext } from 'react'
import styled from 'styled-components'

import { light, dark } from '../data/colors'
import { settingsContext } from '../contexts/SettingsContext'

const Container = styled.button`
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
`

function Copy(props) {

  const {darkMode} = useContext(settingsContext)

  if (!props.inverse) {
    return (
      <Container
        data-tip="click to copy" 
        data-event="mouseenter" 
        data-event-off="click mouseleave"
        data-background-color={darkMode ? dark.primaryColor() : light.primaryColor()}
        data-text-color={darkMode ? dark.inverseColor() : light.inverseColor()} 
        >
        <Container 
          data-tip={`copied ${props.copy}`} 
          data-event="click"
          data-background-color={darkMode ? dark.primaryColor() : light.primaryColor()}
          data-text-color={darkMode ? dark.inverseColor() : light.inverseColor()} 
          >
          {props.children} 
        </Container> 
      </Container> 
    )
  } else {
    return (
      <Container 
        data-tip="click to copy" 
        data-event="mouseenter" 
        data-event-off="click mouseleave" 
        data-background-color={darkMode ? dark.inverseColor() : light.inverseColor()}
        data-text-color={darkMode ? dark.primaryColor() : light.primaryColor()} 
        >
        <Container 
          data-tip={`copied ${props.copy}`} 
          data-event="click"
          data-background-color={darkMode ? dark.inverseColor() : light.inverseColor()}
          data-text-color={darkMode ? dark.primaryColor() : light.primaryColor()} 
          >
          {props.children} 
        </Container> 
      </Container> 
    )
  }
}

export default Copy
