import React from "react";
import "../Styles/Navbar.css"

export default function Navbar(){
    return(
        <nav>
            <img className="logo" src="./Images/logo.png"/>
            <p className="paragraph">my travel journal.</p>
        </nav>
    )
}