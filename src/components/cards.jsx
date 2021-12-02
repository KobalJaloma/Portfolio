import react, { useState }from "react";
import './cards.css';
import SocialButton from "./btn-social";

function Cards (){
    const [push, setPush] = useState(false);


    return(
        <div class="Cards">
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
                        <button class="btn-cards"><h1>Proyectos</h1> </button>
                    </div>
                </div>
                <div id="SmallCard">
                    <img src="img/Contact.jpg" id="img-SmallCard"/>
                    <div id="overlay-LongCard">
                        <div id="flex-social">
                            <SocialButton ImageURL="img/facebook.png"/>
                            <SocialButton ImageURL="img/github.png"/>
                            <SocialButton ImageURL="img/telegram.png"/>
                            <SocialButton ImageURL="img/whatsapp.png"/>
                        </div>
                    </div>
                    <div id="Text-SmallCard">
                       <h1 id="main-title-SmallCard">Contacto</h1>
                    </div>
                </div>
                <div id="SmallCard">
                    <img src="img/Vitae.jpg" id="img-SmallCard"/>
                    <div id="overlay">
                        <button class="btn-cards"><h1>Vitae</h1> </button>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Cards;
