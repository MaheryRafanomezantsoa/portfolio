import styled from 'styled-components'

export const SkillsContainer = styled.div`
  

`
export const SkillsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

   
`
export const SkillCard = styled.div`
    margin: 2rem 2rem;
    line-height: 1;
    width: 200px;
    
`

export const SkillImg = styled.img`

    max-height: 100px;
    max-width: 100%;
    min-width: 100px;
    @media screen and (max-width: 769px){
        width: 75%;
        heigth: auto;
    }
`