import React from "react"
import "./Presentation.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default () =>
    <section className="presentation">
        <h1>STUDIO</h1>
        <h1>MOÇA BONITA</h1>
        <p>Unhas e Sobrancelhas</p>
        <a href="https://wa.me/5585985346320" target="_blank"><button><FontAwesomeIcon className="iconPresentation" icon={faWhatsapp}/> AGENDAR</button></a>
    </section>