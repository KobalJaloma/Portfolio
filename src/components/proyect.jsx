import react from "react";
import './proyect.css'

function Proyect(prop) {

    function getPage() {
        var win = window.open(prop.LinkPage); 
        win.focus();
    }

    return(
        <>
            <div className="proyect-Card">
                <img src={prop.ImageUrl} id="proyect-img"/>
                <div id="proyect-info">
                    <h1>{prop.title}</h1>
                    <h3>{prop.sinopsis}</h3>
                    <button className="proyect-btn" onClick={getPage}>Ver Mas</button>
                </div>
            </div>
        </>
    );
}

export default Proyect;