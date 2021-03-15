import styled from 'styled-components'

export const AboutSection = styled.section`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2b708b;
    
`
export const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr ;
    height: 100%;
    padding: 3rem calc((100vw - 1300px) /2);

    h1{
        margin-bottom: 0.5rem;
        font-size: 3rem;
        color: #fff
    }
    h2{
        font-size: 2rem;
        color: #f0c300;
    }
    p{
        margin: 2rem 0rem;
        font-size: 1.5rem;
        line-height: 1.5;
        color: #fff;
       
    }
    span{
        color: #f0c300;
        text-decoration: underline #f0c300 ;
        font-weight: 700;
    }
    
    @media screen and (max-width: 768px) {
        grid-grid-template-columns: 1fr;
       margin: 1rem 2rem;
        h1{
            font-size: 2.5rem;
            
        }
        h2{
            font-size: 1.5rem;
        }
        p{
            font-size: 1.2rem;
        }
        span{
            color: #f0c300;
            text-decoration: underline #f0c300 ;
            font-weight: 700;
        }
        FaCheck{

        }
    }
`
export const AboutWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;

`
export const AboutCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`

export const AboutImg = styled.img`

    height: 300px;
    min-width: 300px;
    max-width: 100% ;
    box-shadow: 8px 8px #fdc500;
`