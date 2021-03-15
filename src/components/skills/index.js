import React from 'react'
/*import { Link } from 'react-router-dom'*/

import{
    SkillsContainer,
    SkillsWrapper,
    SkillCard,
    SkillImg,
   

} from './SkillsElements';

const Skills = ({data}) => {
    return (
        <SkillsContainer>
            
            <SkillsWrapper>
                {data.map((skill, index) =>{
                    return (
                        <SkillCard key={index}>
                            <SkillImg src={skill.img} alt={skill.alt}/>
                            
                        </SkillCard>
                    )
                })}
            </SkillsWrapper>
            
        </SkillsContainer>
    )
}

export default Skills
