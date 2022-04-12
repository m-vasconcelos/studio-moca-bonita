import React, {Component} from "react";
import "./Main.css"

import Header from "../components/Header"
import Presentation from "../components/Presentation";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Presentation/>
                <AboutUs/>
                <Services/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}