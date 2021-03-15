import React from 'react'
import { Section, Container, ColumnLeft, Button, ColumnRight, Image} from './HeroElements'
/*import planet from '../images/planet.svg'*/
import { FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdMail} from 'react-icons/md'
import {motion} from 'framer-motion'
import Typical from 'react-typical'
import { SocialMedia, SocialMediaWrap, SocialIcons, SocialIconLink} from './HeroElements'
import portrait from '../images/portrait.jpg'
import FileSaver from 'file-saver'

const Hero = () => {
    const fadeLeft = { 
        hidden: { opacity: 0 , x: -1000},
        visible:{ opacity: 1, x: 0}
    }
    const saveFile = () => {
        FileSaver.saveAs(
            process.env.PUBLIC_URL + "/assets/Mahery_Rafanomezantsoa_cv.pdf",
            "Mahery_Rafanomezantsoa_CV.pdf"); 
    }
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1 
                    initial={{ opacity: 0, scale: 0.2, x: -1000}}
                    animate={{ opacity: 1, scale: 1, x: 0}}
                    transition={{ duration: 1}}
                    ><span>Mahery</span> Rafano</motion.h1>
                    <motion.p
                    variants={fadeLeft}
                    initial='hidden'
                    animate='visible'
                    transition={{duration: 2}}>Je suis un {' '}
                    <p style={{ color: '#f0c300'}}>
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Développeur 💻',
                            1000,
                            'Intégrateur 💻',
                            1000,
                            'Full Stack ✔️',
                            1000,
                            'Junior ✔️',
                            1000,
                            'Mari 💑',
                            1000,
                            'Père 👨‍🍼',
                            1000
                        ]}
                        
                    
                    />
                    </p>
                    </motion.p>
                    <motion.p
                    variants={fadeLeft}
                    initial='hidden'
                    animate='visible'
                    transition={{duration: 3}}
                    ><FaPhone />: (+33) 6 13 24 63 36</motion.p>
                    <motion.p
                    variants={fadeLeft}
                    initial='hidden'
                    animate='visible'
                    transition={{duration: 4}}
                    ><MdMail />: rafan.maherick@gmail.com</motion.p>
                    <Button
                    initial={{ scale: 0}}
                    animate= {{ scale: 1 }}
                    transition={{duration: 1}}
                    whileHover={{ scale: 1.05, backgroundColor:'#75777a', color:'#f0c300'   }} 
                    className="cv"
                    onClick={saveFile}

                    >Téléchargez mon CV
                    </Button>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialIcons>
                                <SocialIconLink 
                                href="https://github.com/MaheryRafanomezantsoa" 
                                target="_blank" 
                                aria-label="Github" 
                                rel="noopener noreferrer"
                                initial={{ scale: 0}}
                                animate= {{ scale: 1 }}
                                transition={{ duration: 6}}
                                whileHover={{ scale: 1.05  }} 
                                >
                                    <FaGithub />
                                </SocialIconLink>
                                <SocialIconLink 
                                href="https://www.linkedin.com/in/mahery-ricky-rafano/" 
                                target="_blank" 
                                aria-label="LinkedIn" 
                                rel="noopener noreferrer"
                                initial={{ scale: 0}}
                                animate= {{ scale: 1 }}
                                transition={{ duration: 7}}
                                whileHover={{ scale: 1.05 }} 
                                >
                                    <FaLinkedin />
                                </SocialIconLink>
                                
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </ColumnLeft>
                <ColumnRight>
                    <Image 
                    src={portrait} 
                    alt='portrait' 
                    initial={{ scale: 1, y:-50}}
                    animate={{ rotate: 360, scale: 1, y: 0}}
                    transition= {{ yoyo: Infinity, duration: 3}}
                    whileTap={{ scale: 0.9}} drag={true} />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Hero
