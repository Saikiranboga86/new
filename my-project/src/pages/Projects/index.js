import * as React from 'react';
import ProjectCard1 from '../../components/projectCard/projectCard1';
import ProjectCard2 from '../../components/projectCard/projectcard2';
export default function Projects(){
    return(
        <div>
            <h1>PROJECTS</h1>
            <ProjectCard1/>
            <ProjectCard2/>
        </div>    
    );
}