import react from "react";
import "./btn-social.css";

function SocialButton(prop) {
    return(
        <>
            <button class="btn-social"><img src={prop.ImageURL} alt="" class="image-icon"/></button>
        </>
    );
}

export default SocialButton;