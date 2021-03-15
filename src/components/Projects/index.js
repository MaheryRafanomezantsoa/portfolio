import React from 'react'
/*import { Link } from 'react-router-dom'*/

import{
    ProjectsContainer,
    ProjectsWrapper,
    ProjectsHeading,
    ProjectTitle,
    ProjectCard,
    ProjectImg,
    ProjectInfo,
    ProjectDesc,
    ProjectTechno,
    ProjectButton,
    ProjectLink

} from './ProjectsElements';

const Projects = ({heading, data}) => {
    return (
        <ProjectsContainer>
            <ProjectsHeading>{heading}</ProjectsHeading>
            <ProjectsWrapper>
                {data.map((project, index) =>{
                    return (
                        <ProjectCard key={index}>
                            <ProjectImg src={project.img} alt={project.alt}/>
                            <ProjectInfo>
                                <ProjectTitle>{project.name}</ProjectTitle>
                                <ProjectDesc>{project.desc}</ProjectDesc>
                                <ProjectTechno>{project.techno}</ProjectTechno>
                                <ProjectButton target='_blank' href={project.url2}>{project.button}</ProjectButton>
                                <ProjectLink target='_blank' href={project.url} rel='noreferrer'>{project.lien}</ProjectLink>

                            </ProjectInfo>
                        </ProjectCard>
                    )
                })}
            </ProjectsWrapper>
            
        </ProjectsContainer>
    )
}

export default Projects
