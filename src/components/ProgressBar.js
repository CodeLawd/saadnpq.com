import React from 'react'
import styled from 'styled-components'

const BackBar = styled.div`
  position: relative;
  border-radius: ${props => props.theme.borderRadius};
  width: 300px;
  height: 10px;
  background-color: ${props => props.theme.progressBackColor};
  @media (max-width: 348px){
    width: 250px;
  }
`

function ProgressBar(props) {

  function getGradientEnd(percent){
    return 100*(1+(100-percent)/(percent))
  }

  const Fill = styled.div`
    position: absolute;
    border-radius: inherit;
    width: ${props.percent}%;
    height: 100%; 
    background-image: 
      linear-gradient(to right, 
        ${props => props.theme.progressColorStart} 0%,
        ${props => props.theme.progressColorEnd} ${getGradientEnd(props.percent)}%);

  `

  return (
    <BackBar>
      <Fill></Fill>
    </BackBar>
  )
}

export default ProgressBar