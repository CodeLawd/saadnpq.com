import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-size: 1.2rem;
  margin-bottom: 10px;
  background: none;
  border: none;
  font-family: 'Quicksand', sans-serif;
`
function ThemeToggler(props) {
  return (
    <StyledButton onClick={props.toggleDarkMode}>{props.darkMode ? "light" : "dark"}</StyledButton>
  )
}

export default ThemeToggler