import React from "react";
import "./registerButton.css"

const RegisterButton = ({link}) => {
    return (
        /* From Uiverse.io by 212004ALJI */
        <a href={link} style={{"--text":"'REGISTER'","--c":"rgb(0, 255, 213)"}} className="reg-btn">
            REGISTER
        </a>
    );
};

export default RegisterButton;
