import React from "react";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./static/css/styles.css";
// import "./static/js/scripts.js";
import "./static/js/main.js";

import Navbar from "./components/Navbar/Navbar";
import MastHead from "./components/MastHead/MastHead";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Client from "./components/Client/Client";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="">
            <Navbar></Navbar>
            <MastHead></MastHead>
            <Services></Services>
            <Portfolio></Portfolio>
            <About></About>
            <Team></Team>
            <Client></Client>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default App;
