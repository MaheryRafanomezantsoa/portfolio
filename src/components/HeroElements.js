import styled from 'styled-components'

import {motion} from 'framer-motion'

export const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-image: 
      radial-gradient(at top left, #2b708b, transparent),
      radial-gradient(at top right, #54858c, transparent),
      radial-gradient(at bottom left, #A7D3F2, transparent);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    @media screen and (max-width: 768px) {
        
        height: 100%;  
       
        background-image: 
            radial-gradient(at top left, #54858c, transparent),
            radial-gradient(at top right, #2b708b, transparent),
            radial-gradient(at bottom left, #54858c, transparent);
        background-size: 100% 100%;
        background-repeat: no-repeat;
                
    }

`
export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    padding: 3rem calc((100vw - 1300px) /2);
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        height: 100v%;
        
    }
`
export const ColumnLeft = styled.div`
    display: flex;
    color: #fff;
    
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem 2rem;
    h1{
        margin-bottom: 0.5rem;
        font-size: 4rem;
        & span{
            color: #f0c300;
        }
    }
    p{
        margin: 2rem 0rem;
        font-size: 2rem;
        line-height: 0.2;
       
    }
    @media screen and (max-width: 768px){
        position: relative;
        top: 125px;
        height: 100vh;  
        h1{
            font-size: 3rem;
            
        }
        p{
            font-size: 1.2rem;
            margin: 1rem 0rem;
        }
        
    }
    
`
export const Button = styled(motion.button)`
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #f0c300;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: #fff;
   
    
    
    

`
export const Image = styled(motion.img)`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border-radius: 100%;
    box-shadow: 1px 20px #fdc500;
    @media screen and (max-width: 768px){
        margin-top: 50px;
        max-width: 250px;
        max-height: 250px;
    }
    
    
`
export const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    

    @media screen and (max-width: 768px){
        top: 3rem;
        position: absolute;
        
        top: 3.5 rem;
        left: auto;
        right: auto;
    }
   
`

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    
  }
`;



export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled(motion.a)`
  color: #fff;
  font-size: 50px;
`;

