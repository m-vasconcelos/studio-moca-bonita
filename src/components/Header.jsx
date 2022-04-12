import React from "react"
import "./Header.css"

import Logo from "../img/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'


export default () =>
    <header className="header">
        <img src={Logo} alt="Logo"/>
        <nav>
            <a href="#aboutUs">SOBRE</a>
            <a href="#services">SERVIÇOS</a>
            <a href="#contact">CONTATO</a>
        </nav>
        <div className="iconsHeader">
            <a href="https://wa.me/5585985346320" target="_blank"><FontAwesomeIcon icon={faWhatsapp}/></a>
            <a href="https://www.instagram.com/moca.bonita13/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
        </div>

        
    </header>