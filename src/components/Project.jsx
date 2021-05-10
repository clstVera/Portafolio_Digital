import React from 'react'
import styled from 'styled-components'

const ProjectA = styled.a`
    text-decoration: none;
    color: var(--main-white);
    cursor: pointer;
`;

const ProjectImg = styled.img`
    height: calc(100% - 6.8rem);
    width: 100%;
    object-fit: cover;`

const ProjectP = styled.p`
    font-weight: 400;
    line-height: 1.4;
    font-size: 1.5rem;    
    font-style: italic;
    `

const Project = (props) => {
    return (
        <ProjectA href={props.link} target="_blank" id="project-tile">
            <ProjectImg src={props.image}></ProjectImg>
            <ProjectP>{props.title}</ProjectP>
        </ProjectA>
    )
}

export default Project
