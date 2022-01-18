import react, { useState } from "react";
import './cards.css';
import SocialButton from "../components/btn-social";

function Cards (){
    
    function openPDF() {
        window.open("PDF/Vitae.PDF");
    }
    function redirectProyect() {
        window.location = '/proyects';
    }

    return(
    <>
        <div className="title">
          <h1>Kobal Soft</h1>
          <h3>Software Developer</h3>
        </div>
        <div className="Cards">
            <div id="LongCard">
                <img  src="img/Sistemas.jpg" id="img-LongCard"/>
                <div id="overlay-LongCard">
                    <div id="LongCard-Sinop">Kobal Soft es el nombre de la marca de proyectos del desarrollador Leonardo Jaloma, que busca el entretenimiento y resolucion de problemas informaticos.</div>
                </div>
                <div id="Text-LongCard">
                    <h1 id="main-title">¿Qué somos?</h1>
                </div>
            </div>
            <div id="Container-SmallCards">
                <div id="SmallCard">
                    <img src="img/Proyects.jpg" id="img-SmallCard"/>
                    <div id="overlay">
                        <button className="btn-cards" onClick={redirectProyect}><h1>Proyectos</h1></button>
                    </div>
                </div>
                <div id="SmallCard">
                    <img src="img/Contact.jpg" id="img-SmallCard"/>
                    <div id="overlay-LongCard">
                        <div id="flex-social">
                            <SocialButton ImageURL="img/facebook.png" socialKey="facebook"/>
                            <SocialButton ImageURL="img/github.png" socialKey="github"/>
                            <SocialButton ImageURL="img/telegram.png" socialKey="telegram"/>
                            <SocialButton ImageURL="img/whatsapp.png" socialKey="whatsapp"/>
                        </div>
                    </div>
                    <div id="Text-SmallCard">
                       <h1 id="main-title-SmallCard">Contacto</h1>
                    </div>
                </div>
                <div id="SmallCard">
                    <img src="img/Vitae.jpg" id="img-SmallCard"/>
                    <div id="overlay">
                        <button className="btn-cards" onClick={openPDF}><h1>Vitae</h1> </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
} 

export default Cards;
