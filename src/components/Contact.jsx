import React from "react"
import "./Contact.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default () =>
    <section id="contact" className="contact">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d767.4336306643667!2d-38.57634342539578!3d-3.820172856227902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74d9ad94779a9%3A0x161ca3757ed643d2!2zRXNwYcOnbyBNb8OnYSBCb25pdGE!5e0!3m2!1spt-BR!2sbr!4v1648707030189!5m2!1spt-BR!2sbr"></iframe>
        <h1>ENDEREÇO</h1>
        <p>Travessa Valéria, 122 - Mondubim, Fortaleza - CE  </p>
        <p>Telefone: +55 (85) 98534-6320</p>
        <div className="iconsContact">
            <a href="https://wa.me/5585985346320" target="_blank"><FontAwesomeIcon icon={faWhatsapp}/></a>
            <a href="https://www.instagram.com/moca.bonita13/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
        </div>
    </section>
    