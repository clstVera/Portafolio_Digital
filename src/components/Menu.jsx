import React from 'react'
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav'

const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--main-red);
    box-shadow: 0 2px 0 rgb(0 0 0 / 40%);
    z-index: 10;
`;

const Item = styled.a`
    display: block;
    font-size: 1.5rem;
    padding: 2rem;
    text-decoration: none;
    color: var(--main-white);
    cursor: pointer;
    @media (max-width: 768px) {
    font-size: 1rem;
}
`

const Menu = () => {
    return (
        <NavBar id="navbar">
            <Nav activeKey="#about">
                <Nav.Item>
                    <Item href="#welcome-section">About</Item>
                </Nav.Item>
                <Nav.Item>
                    <Item href="#projects">Work</Item>
                </Nav.Item>
                <Nav.Item>
                    <Item href="#contact">Contact</Item>
                </Nav.Item>
            </Nav>
        </NavBar>
    )
}

export default Menu;
