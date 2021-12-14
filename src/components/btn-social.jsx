import react, { useState } from "react";
import "./btn-social.css";

function SocialButton(prop) {

    function SocialOpen() {
        var socialKey= prop.socialKey;

        if(socialKey == "github"){
            var win = window.open('https://github.com/KobalJaloma?tab=repositories'); 
            win.focus();
        }   
        if(socialKey == "facebook"){
            var win = window.open('https://www.facebook.com/profile.php?id=100066328096375'); 
            win.focus();
        }   
        if(socialKey == "telegram"){
            var win = window.open('https://web.telegram.org/k/'); 
            win.focus();
        }   
        if(socialKey == "whatsapp"){
            var win = window.open('https://web.whatsapp.com/'); 
            win.focus();
        }  
    }

    return(
        <>
            <button class="btn-social" onClick={SocialOpen}><img src={prop.ImageURL} alt="" class="image-icon"/></button>
        </>
    );
};

export default SocialButton;