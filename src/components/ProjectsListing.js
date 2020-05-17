import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import projects from '../data/projects'
import GitHubButton from 'react-github-btn'
import {settingsContext} from '../contexts/SettingsContext'

const showMax = 6;
const IHaveLotsOfProjects = false

const MainContainer = styled.div`
`

const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;  
  @media (max-width: 927px) {
  grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 624px) {
  grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background-color: ${props => props.theme.projectsBackgroundColor};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const ProjectTitle = styled.div`
  font-size: 1.5625rem;
  font-family: 'Quicksand';
  color: ${props => props.theme.primaryColor};
  padding: 20px 0px ;
`

const ProjectDescription = styled.div`
  margin-bottom: 20px; 
  color: ${props => props.theme.projectsDescription};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

const ProjectFooter = styled.div`
  padding: 10px 0px 15px 0px;
  color: ${props => props.theme.projectsMeta};
  background-color: ${props => props.theme.projectsFooterBackgroundColor};
  border-radius: ${props => props.theme.borderRadius};
`


const Technologies = styled.div`
  flex: 1;
  display:flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 10px;
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

// const Tags = styled.div`
//   display: flex;
//   flex-direction:row;
//   align-items: flex-start;
//   font-size: 0.9rem;
// `

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

const SeeAll = styled.button`
  font-family: 'Quicksand';
  font-size: 1rem;
  background-color: ${props => props.theme.primaryColor};
  border-radius : ${props => props.theme.borderRadius};
  border : none;
  color: ${props => props.theme.inverseColor};
  padding: 5px 25px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SeeAllContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`

function ProjectsListing() {
  const [seeAll, setSeeAll] = useState(false)
  const {darkMode} = useContext(settingsContext)

  let renderSeeAll
  if (IHaveLotsOfProjects) {
    renderSeeAll = (
          <SeeAllContainer>
            <SeeAll onClick={() => setSeeAll(last => !last)}>
              {seeAll ? "see less" : "see all"}
            </SeeAll>
          </SeeAllContainer>
    )
  } else {
    renderSeeAll = <div></div>
  }
  return (
    <MainContainer>
      <Cards>
        {(seeAll ? projects : projects.slice(0, showMax)).map((project, index) => {

        let demo;
        if (project.demo) {
          demo =  <a href={`https://github.com/${project.repo}`} target='_blank' rel="noopener noreferrer">
                    <CTAdemo>
                      demo
                    </CTAdemo>
                  </a>
        }else {
          demo = <div></div>
        }

        return(
          <Card key={index}>
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
                    <Pre>tech: </Pre>
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
                          repository
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
        })}
      </Cards>
      {renderSeeAll}
    </MainContainer>
  )
}

export default ProjectsListing