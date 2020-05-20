import React, { useState, useEffect} from 'react'
import styled from 'styled-components'

import Copy from '../../components/Copy'
import ContactForm from '../../components/ContactForm'

const Section = styled.div`
  background-color: ${props => props.theme.sectionAlternate};
  padding-bottom: 50px;
`

const Container = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;  
`
const CopyContainer = styled.span`
  color: ${props => props.theme.primaryColor};
`

const Title = styled.div`
  font-size: 2.75rem;
  font-family: 'Quicksand';
  color: ${props => props.theme.primaryColor};
  padding-top: 50px;
  margin-bottom: 50px;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 939px) {
    flex-direction: column;
    align-items: center;
  }

`

const StyledContactForm = styled.div`
  margin: 0px 25px 30px 0px;
  @media (max-width: 939px) {
    margin: 0px 0px 30px 0px;
  }

`

const Aside = styled.div`
  flex: 1;
  align-self: center;
  margin-left: 25px;
  @media (max-width: 939px) {
    margin: 0px; 
  }

`

const Paragraph = styled.div`
  margin-bottom: 20px;
`
const StyledList = styled.ul`
  list-style-position: inside;
`

function calcDate() {
      // create Date object for current location
      const offset = 2

      var d = new Date();

      // convert to msec
      // subtract local time zone offset
      // get UTC time in msec
      var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  
      // create new Date object for different city
      // using supplied offset
      var nd = new Date(utc + (3600000*offset));
  
      // return time as a string
      return nd.toLocaleTimeString();


}

function Contact() {
  const [date, setDate] = useState(calcDate())

  useEffect(() => {
    setInterval(() => {
      setDate(calcDate())
    }, 1000);
  }, [])

  return (
    <Section id="contact">
      <Container>
        <Title>Contact</Title>
        <Content>
          <StyledContactForm>
            <ContactForm />
          </StyledContactForm>
          <Aside>
            <Paragraph>
              My local time in cairo now is: {date} <br/>
            </Paragraph>
            <Paragraph>
              <div>Beside the contact form you can reach me through: </div>
              <StyledList>
              <li><CopyContainer><Copy copy='saadnpq@protonmail.com' >mail</Copy></CopyContainer></li>
              <li><CopyContainer><Copy copy='+201066926400' >phone</Copy></CopyContainer></li>
              <li>Github issues for a project specific subject</li>
              <li>or even Twitter DMs</li>
              </StyledList>
              <div> whichever way you feel convenient. </div>
              </Paragraph>
          </Aside>
        </Content>
      </Container>
    </Section>
  )
}

export default Contact