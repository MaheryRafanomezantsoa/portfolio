import React from 'react';
import '../../App.css'
import Projects from '../Projects/index'
import { projectData } from '../Projects/data';

export default function Work() {
    return  (
    
    <>
        <Projects heading= 'Découvrez certains de mes projets personnels' data={projectData} />

    </>
    )

}