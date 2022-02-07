import React from "react";
import { Link } from 'react-router-dom';
import "../Styles/Card.css"

export default function (props){
    return(
        <div className="card">
            <img className="image" src={`./Images/${props.image}`}/>
            <div className="description">
                <div className="info">
                    <img className="location-img" src="./Images/location.png"/>
                    <p className="location">{props.location}</p>
                    <a className="link" href={props.link}>View on Google Maps</a>
                </div>
                <h1 className="title">{props.title}</h1>
                <p className="date">{props.date}</p>
                <p className="about">{props.description}</p>
            </div>
        </div>
    )
}