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
  @media (max-width: 827px) {
    display: flex;
    flex-direction: column;
    align-items: center;  
  }
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

  @media (max-width: 827px) {
    flex-direction: column;
    align-items: center;
  }

`

const StyledContactForm = styled.div`
  margin: 0px 30px 30px 0px;
  @media (max-width: 827px) {
    margin: 0px 0px 30px 0px;
  }

`

const Aside = styled.div`
  width: 85%;
  align-self: center;
`

const Paragraph = styled.div`
  margin-bottom: 20px;
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
        <Title>contact</Title>
        <Content>
          <StyledContactForm>
            <ContactForm />
          </StyledContactForm>
          <Aside>
            <Paragraph>
              my local time in cairo now is: {date} <br/>
            </Paragraph>
            <Paragraph>
              you don't have to fill in the name and/or email fields if you want to send me something anonymously and you don’t expect a response from me <br />
            </Paragraph>
            <Paragraph>
              beside the contact form you can reach me also through <CopyContainer><Copy copy='saadnpq@protonmail.com' >mail</Copy></CopyContainer> or <CopyContainer><Copy copy='+201066926400' >phone</Copy></CopyContainer>
            </Paragraph>
          </Aside>
        </Content>
      </Container>
    </Section>
  )
}

export default Contact