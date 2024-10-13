import React from "react";
import "./registerButton.css"
// import "./regBx`utton2.css"

const RegisterButton = ({ link }) => {
    return (
        <a href={link} target="_blank" style={{"--text":"'Register'","--c":"rgb(0, 255, 213)"}} className="reg-btn z-50">
            Register
        </a>
    );
};

export default RegisterButton;
