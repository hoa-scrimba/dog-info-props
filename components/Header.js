import React from "react";
import link from "../link.js";

function Header() {
    
    return (
        <header className="header--container">
            <img 
            src={link.dogLogo}>
            </img>
            <h3>my dog blog.</h3>
        </header>
    );
};


export default Header;