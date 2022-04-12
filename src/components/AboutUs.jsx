import React from "react";
import "./AboutUs.css"

import alicateAboutUs from "../img/alicate-aboutus.png"

export default () =>
    <section id="aboutUs" className="aboutUs">
        <h1>SOBRE NÓS</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <img src={alicateAboutUs} alt="Sobrencelha" />
    </section>