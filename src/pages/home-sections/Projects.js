import React from 'react'
import styled from 'styled-components'

import ProjectListing from '../../components/ProjectsListing'

const Center = styled.div`
  width: 85%;
  margin: auto;
`

const Title = styled.div`
  font-size: 2.75rem;
  font-family: 'Quicksand';
  color: ${props => props.theme.primaryColor};
  padding-top: 50px;
  margin-bottom: 50px;
`

const ProjectListingContainer = styled.div`
  margin-bottom: 50px;
`


function Projects() {
  return (
    <Center id="projects">
      <Title > selected projects</Title>
      <ProjectListingContainer>
        <ProjectListing selected={true}/>
      </ProjectListingContainer>
    </Center>
  )
}

export default Projects