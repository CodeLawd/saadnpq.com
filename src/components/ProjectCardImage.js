import React, {useContext} from 'react'
import styled from 'styled-components'
import GitHubButton from 'react-github-btn'

import {settingsContext} from '../contexts/SettingsContext'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme.projectsBackgroundColor};
  border-radius: 8px;
  @media (max-width: 742px){
    flex-direction: column;
  }
`

const HeaderContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

const FooterContainer = styled.div`
  width: 90%;
  margin: auto;
`

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

const ProjectFooter = styled.div`
  padding: 10px 0px 15px 0px;
  background-color: ${props => props.theme.projectsFooterBackgroundColor};
  border-radius: ${props => props.theme.borderRadius};
`

const ProjectScreenshotContainer = styled.div`
  width: 90%;
  margin: 30px auto auto auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProjectScreenshot = styled.img`
  width: 100%;
  margin-bottom: 30px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
`

const ProjectTitle = styled.div`
  font-size: 1.5625rem;
  font-family: 'Quicksand';
  color: ${props => props.theme.primaryColor};
  padding-bottom: 20px;
`

const ProjectDescription = styled.div`
  margin-bottom: 20px; 
  flex: 1;
  color: ${props => props.theme.projectsDescription};
`

const Technologies = styled.div`
  color: ${props => props.theme.projectsMeta};
  display:flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 10px;
  font-size: 0.9rem;
`

const Pre = styled.div`
  margin-right: 7px;
`

const Technology = styled.span`
  margin-right: 10px;
`

const TechnologyIcon = styled.span`
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

const GithubButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`

const StyledStarButton = styled.div`
  margin-right: 10px;
`

const StyledGithubButton = styled.div`
  margin-top: 3px;
`

const CTAs = styled.div`
  display: flex;
  flex-direction:row;
  font-family: 'Quicksand';
  font-size: 0.9rem;
  margin-bottom: 10px;
  margin-top: 10px;
`

const CTA = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const CTArepo = styled.div`
  background-color: ${props => props.theme.primaryColor};
  border-radius : ${props => props.theme.borderRadius};
  color: ${props => props.theme.inverseColor};
  width: 6rem;
  height: 25px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CTArepoMargin = styled.div`
  margin-right: 10px;
`

const CTAdemo = styled.div`
  background-color: ${props => props.theme.primaryColor};
  border-radius : ${props => props.theme.borderRadius};
  color: ${props => props.theme.inverseColor};
  width: 4rem;
  height: 25px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function ProjectCard(props) {
  const {darkMode} = useContext(settingsContext)
  const { project } = props
  let demo;
  if (project.demo) {
    demo =  <a href={`${project.demo}`} target='_blank' rel="noopener noreferrer">
              <CTAdemo>
                Demo
              </CTAdemo>
            </a>
  }else {
    demo = <div></div>
  }
  return(
    <Card>
      <ProjectScreenshotContainer>
        <ProjectScreenshot src={project.screenshot} />
      </ProjectScreenshotContainer>
      <ProjectHeader>
        <HeaderContainer>
          <ProjectTitle>
            <a href={`https://github.com/${project.repo}`} target='_blank' rel="noopener noreferrer" > { project.name } </a>
          </ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>      
        </HeaderContainer>
      </ProjectHeader>
          <ProjectFooter>
            <FooterContainer>
            <Technologies>
              <Pre>Tech: </Pre>
              {project.techonlogies.map((technology, index) => {
                const length = project.techonlogies.length
                return (
                  <Technology key={index}>
                    <TechnologyIcon>{technology.preJSX}</TechnologyIcon> {technology.name}{ (length > 1 && index !== length -1) ? ',' : ''}
                  </Technology>
                )
              })}
            </Technologies>
          {/* <Tags>
            <Pre>tags:</Pre> {project.tags}
          </Tags> */}
          <GithubButtons>
            <StyledStarButton>
              <StyledGithubButton>
                <GitHubButton
                    href={`https://github.com/${project.repo}`} 
                    data-icon="octicon-star" 
                    data-color-scheme={darkMode ? "no-preference: dark; light: dark; dark: dark;" : "no-preference: light; light: light; dark: light;"}
                    data-show-count={`${project.showCount}`}
                    aria-label={`Star ${project.repo} on GitHub`}
                    >
                      Star
                </GitHubButton>
              </StyledGithubButton>
            </StyledStarButton>
            <StyledGithubButton>
              <GitHubButton
                href={`https://github.com/${project.repo}/fork`} 
                data-icon="octicon-repo-forked" 
                data-color-scheme={darkMode ? "no-preference: dark; light: dark; dark: dark;" : "no-preference: light; light: light; dark: light;"}
                data-show-count={`${project.showCount}`}
                aria-label={`Star ${project.repo} on GitHub`}
                >
                  Fork
              </GitHubButton>
            </StyledGithubButton>
          </GithubButtons>
          <CTAs>
            <CTA>
              <CTArepoMargin>
                <a href={`https://github.com/${project.repo}`} target='_blank' rel="noopener noreferrer">
                  <CTArepo>
                    Repository
                  </CTArepo>
                </a>
              </CTArepoMargin>
              {demo}
            </CTA>
          </CTAs>
        </FooterContainer>
      </ProjectFooter>
    </Card>
  )
}

export default ProjectCard