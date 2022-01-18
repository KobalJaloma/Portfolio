import React from "react";
import "./navbar.css"

function NavBar() {

    function firstDisplay() {
        window.location = '/';
    }
    
    return(
        <>
            <nav className="nav-box">
                <div id="item-box">   
                    <div id="nav-item">
                       <button className="main-btn" onClick={firstDisplay}>Kobal Soft</button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;