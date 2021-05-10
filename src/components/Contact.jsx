import React from 'react'
import styled from 'styled-components'
import Social from './Social'

import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'

export const TextH1 = styled.h1`    
    font-size: 3rem;
    font-weight: 700;    
    line-height: 1.4;
    color: var(--main-white);
`;

const ContactStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;
    background-color: var(--main-gray);
    text-align: center;
`;

const ContactLinks = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 980px;
    margin-top: 4rem;
    flex-wrap: wrap;
`;

const Contact = () => {
    return (
        <ContactStyle className="Contact" id="contact">
            <TextH1>Let's work together...</TextH1>
            <ContactLinks>
                <Social link="https://www.facebook.com/" icon={faFacebook} text="Facebook"></Social>
                <Social link="https://github.com/" icon={faGithub} text="GitHub"></Social>
                <Social link="https://twitter.com/" icon={faTwitter} text="Twitter"></Social>
                <Social link="mailto:danivera2@hotmail.com" icon={faAt} text="Send a mail"></Social>
                <Social link="tel:+57-305-309-87-74" icon={faMobileAlt} text="Call me"></Social>
            </ContactLinks>

        </ContactStyle>
    )
}

export default Contact
