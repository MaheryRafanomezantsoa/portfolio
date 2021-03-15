import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    background: #fff;
    color: #2b708b;

`
export const ProjectsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`
export const ProjectCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`
export const ProjectImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100% ;
    box-shadow: 8px 8px #fdc500;
`
export const ProjectsHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align:center;
    margin-bottom: 5rem;

`
export const ProjectTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;

`
export const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`
export const ProjectDesc = styled.p`
    margin-bottom: 1rem;
`
export const ProjectTechno = styled.p`
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 700;
`

export const ProjectButton = styled.a`
    margin-bottom: 1rem;
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: #2b708b;
    color:#fff;
    transition: 0.2 ease-out;
    &:hover{
        background: #ffc500;
        transition:0.2 ease-out;
        cursor: pointer;
        color: #000;
    }
`
export const ProjectLink = styled.a`
    font-size: 1rem;
    text-decoration: none;
    padding: 1rem 4rem;
    border: none;
    background: #ffc500;
    color:#000;
    transition: 0.2 ease-out;
    &:hover{
        background: #2b708b;
        transition:0.2 ease-out;
        cursor: pointer;
        color: #000;
    }
`