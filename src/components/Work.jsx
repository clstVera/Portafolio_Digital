import React from 'react'
import styled from 'styled-components'
import Project from './Project'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'

const WorkStyle = styled.div`
    text-align: center;
    padding: 10rem 2rem;
    background: var(--main-blue);

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem;
    width: 100%;    
    margin: 0 auto;
`

const Work = () => {
    return (

        <WorkStyle className="Work" id="projects">
            <Project link="https://clstvera.github.io/Pagina_Tributo/" image={img2} title="Tribute Page"></Project>
            <Project link="https://clstvera.github.io/Formulario_Encuesta/" image={img3} title="Survey Form"></Project>
            <Project link="https://clstvera.github.io/Producto_Comercial/" image={img4} title="Product Landing Page"></Project>
            <Project link="https://clstvera.github.io/Documentacion_Tecnica/" image={img5} title="Technical Documentation Page"></Project>
            <Project link="https://clstvera.github.io/Adopcion-de-Mascotas/html/home.html" image={img6} title="Pet Adoption App"></Project>
        </WorkStyle>
    )
}

export default Work
