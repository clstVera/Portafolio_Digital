import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SocialA = styled.a`
    text-decoration: none;
    color: var(--main-white);
    cursor: pointer;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 1.4;
    text-align: center;
    text-shadow: 2px 2px 1px #1f1f1f;
    transition: transform 0.3s ease-out;
`


const Social = (props) => {
    return (
        <SocialA href={props.link} target="_blank" id="profile-link">
            <FontAwesomeIcon icon={props.icon} />{props.text}
        </SocialA>
    )
}

export default Social
