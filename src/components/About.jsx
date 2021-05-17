import React from 'react'
import styled from 'styled-components'

import img1 from '../images/img1.jpg'

const AboutStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #000;
    background-image: linear-gradient(62deg, #3a3d40 0%, #181719 100%);
    text-align: center;
`;

const TextH1 = styled.h1`    
    font-size: 3rem;
    font-weight: 700;    
    line-height: 1.4;
    color: var(--main-white);
    @media (max-width: 768px) {
    font-size: 1.5rem;
    font-weight: 200;
    line-height: 1;  
}
`;

const TextP1 = styled.p`
    font-size: 1.5rem;
    font-weight: 200;
    font-style: italic;
    color: var(--main-red);
    @media (max-width: 768px) {
    font-size: 1rem;
    font-weight: 100; 
}
`;

const Image1 = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;    
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0,0.6);
`;

const About = () => {
    return (
        <AboutStyle className="About" id="welcome-section">
            <Image1 src={img1} />
            <TextH1>Hey I am Daniela</TextH1>
            <TextP1>A junior front end developer</TextP1>
        </AboutStyle>
    )
}

export default About
