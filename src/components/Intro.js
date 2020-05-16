import React, {useContext} from 'react'
import styled from 'styled-components'
import {settingsContext} from '../contexts/SettingsContext'

const StyledMain = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  transform: translateY(-50%);
  margin-right: 30px;
`

const SecondaryText = styled.div`
  width: 80%;
`

const MainText = styled.div`
  font-family: 'Quicksand', sans-serif;
  color: ${props => props.theme.primaryColor};
  font-size: 3rem;
  line-height: 3rem;
  margin: 7px 0px;
`

const CTA = styled.div`
  display: flex;
  flex-direction: row;
` 

const PrimaryCTA = styled.button`
  font-family: 'Quicksand';
  background-color: ${props => props.theme.primaryColor};
  border: none;
  font-size: 1.2rem;
  border-radius : ${props => props.theme.borderRadius};
  color: ${props => props.theme.inverseColor};
  width: 7rem;
  height: 2.3rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SecondaryCTA = styled.button`
  font-family: 'Quicksand';
  background: none;
  font-size: 1.2rem;
  border: ${props => props.theme.borderWidth} solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.primaryColor};
  width: 7rem;
  height: 2.3rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LinkContainer = styled.div`
  margin: 20px 20px 0 0;
`

function Intro() {

  const { innerHeight } = useContext(settingsContext)

  function  scrollTo(id) {
    var el = document.getElementById(id);
    el.scrollIntoView(true);
  }

  return (
    <StyledMain top={innerHeight*0.5}>
      <SecondaryText>
        hello, i am a cairo based
      </SecondaryText>
      <MainText>
        full stack developer
      </MainText>
      <SecondaryText>
        saad is my name, npq is my unique identifier, and this is my website/portfolio
      </SecondaryText>
      <CTA>
        <LinkContainer>
          <PrimaryCTA onClick={scrollTo.bind(null, "projects")} >
            projects 
          </PrimaryCTA>
        </LinkContainer>
        <LinkContainer>
          <SecondaryCTA onClick={scrollTo.bind(null, "contact")}>
            contact 
          </SecondaryCTA>
        </LinkContainer>
      </CTA>
    </StyledMain>
  )
}

export default Intro