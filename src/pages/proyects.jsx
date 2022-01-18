import React from "react";
import "./proyects.css"
import NavBar from '../components/navbar'
import Proyect from '../components/proyect'

function Proyects() {
    return(
        <>
        <main className="main">
            <NavBar/>
           {/* <div className="banner">
                <h1>-OOPS-</h1>
                <h3>No tenemos proyectos por el momento</h3>
                <h3>Pero de todas formas esperen "Witch Hunt Tycoon"</h3>
            </div>* */}
            <Proyect title="Proyect" LinkPage="https://youtu.be/F9kXstb9FF4?list=RDF9kXstb9FF4" ImageUrl="img/Proyects.jpg" sinopsis="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, quaerat! Quibusdam tempore ad unde minus facilis. Odit neque minus mollitia repellendus possimus nesciunt eveniet pariatur magni. Neque aspernatur corrupti quas."/>
        </main>
        </>
    );
}

export default Proyects;