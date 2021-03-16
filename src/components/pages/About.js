import React from 'react';
import '../../App.css';
import { AboutSection, AboutContainer,  } from './AboutElements'
import { skillData, skillDataTwo } from '../skills/data'
import { FaCheck } from 'react-icons/fa'
import {motion} from 'framer-motion'
import Skills from '../skills/index'
export default function About(data) {
    const fadeTop = { 
        hidden: { opacity: 0 , y: -100},
        visible:{ opacity: 1, y: 0}
    }
    return  (
        <AboutSection>
            <AboutContainer>
            
                    <motion.h1 
                    variants={fadeTop}
                    initial='hidden'
                    animate='visible'
                    transition={{duration: 1}}>A propos</motion.h1>
                    <motion.h2 
                    initial={{ opacity: 0, scale: 0, x: -1000}}
                    animate={{ opacity: 1, scale: 1, x: 0}}
                    transition={{ duration: 2}}>Qui suis-je?</motion.h2>
                    <p>Hello! Je m'appelle <span>Mahery</span> Rafanomezantsoa, j'ai 37 ans, marié et père d'un petit garçon.
                        Je suis passionné de Tennis, de Voyage et de développement web 😊.<br/>
                        J'aime ressentir la satisfaction d'avoir réalisé un projet en ayant surmonté des défis, des obstacles .
                        Je suis plutôt <span>sociable</span>, <span>serviable</span> et j'aime <span>travailler en équipe</span>. Ce qui me tient à coeur dans ma relation avec les autres c'est d'échanger dans le respect, de façon positive. 
                        J'accèpte les critiques objectives et émises de façon courtoise. Cela ne peut que me permettre de grandir et d'apprendre davantage.<br />
                        A mes heures perdues, je joue avec mon fils, je cusine, je regarde des matchs de tennis et des tutos ( en dev bien sûr mais pas que 😊).
                        <span> Curieux</span> et <span>autonome</span>, je fais de la veille technologique quotidiennement et j'apprends en autodidacte.
                    </p>
                    <motion.h2 
                    initial={{ opacity: 0, scale: 0, x: -1000}}
                    animate={{ opacity: 1, scale: 1, x: 0}}
                    transition={{ duration: 3}}>Mon objectif?</motion.h2>
                    <p>Devenir un <span>Développeur Full Stack</span> et être un acteur majeur dans la transformation digitale et l'accompagnement d'une entreprise partageant les mêmes valeurs que moi. </p>
                    <motion.h2
                    initial={{ opacity: 0, scale: 0, x: -1000}}
                    animate={{ opacity: 1, scale: 1, x: 0}}
                    transition={{ duration: 4}}>Comment?</motion.h2>
                    <p>J'ai suivi une formation intensive de 5 mois en Développement web et mobile dans le cadre d'une reconversion professionnelle à l'école EPITECH Lille.
                        Je suis actuellement à la recherche d'un stage pour valider cette formation, mettre en pratique mes connaissances et acquérir d'autres compétences. 
                    </p>
                    <motion.h2 
                    initial={{ opacity: 0, scale: 0, x: -1000}}
                    animate={{ opacity: 1, scale: 1, x: 0}}
                    transition={{ duration: 5}}>Ce que je sais faire?</motion.h2>
                    <p>Connaître les concepts de programmation <FaCheck color='#2b708b'/></p>
                    <p>M'autoformer <FaCheck color='#2b708b'/></p>
                    <p>Concevoir et développer un site <FaCheck color='#2b708b'/></p>
                    <p>Trouver une solution à un problème <FaCheck color='#2b708b'/></p>
                    <motion.h2 
                    initial={{ opacity: 0, scale: 0, x: -1000}}
                    animate={{ opacity: 1, scale: 1, x: 0}}
                    transition={{ duration: 8}}>Mes compétences techniques</motion.h2>
                    
                    <Skills data={skillData} />
                    <motion.h2 
                    initial={{ opacity: 0, scale: 0, x: -1000}}
                    animate={{ opacity: 1, scale: 1, x: 0}}
                    transition={{ duration: 10}}>Je connais et j'aimerais en apprendre davantage</motion.h2>
                    <Skills data={skillDataTwo} />
            </AboutContainer>
        </AboutSection>
    )


}