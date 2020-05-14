import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
`
function Footer(props) {
  return (
    <StyledFooter>
      made with coffe and react 
    </StyledFooter>
  )
}

export default Footer
