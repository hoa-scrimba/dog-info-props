import React from "react";
import link from "../link.js";
import data from "../data.js";


function Card(props) {
    
    return (
        <main>
            <div className="img-info-container">
                <div>
                    <img 
                        className="dog-img" 
                        src={props.dog.imageUrl} 
                    />
                </div>
                <div>
                    <div className="location-link-container">
                        <span>
                            <img 
                                className="location-logo" 
                                src={link.locationLogo} 
                            />
                            <span className="country-text">
                                {props.dog.country}
                            </span>
                        </span>
                        <a 
                            className="web-link" 
                            href={props.dog.link}>View on AKC
                        </a>
                    </div>
                    <h1 className="dog-name">{props.dog.name}</h1>
                    <h3 className="dog-info">Life Expectancy: </h3>
                    <h4 className="dog-info">{props.dog.lifeExpect} years</h4>
                    <h3 className="dog-info">Height: </h3>
                    <h4 className="dog-info">
                        M: {props.dog.sex.male.height} inches | 
                        F: {props.dog.sex.female.height} inches
                    </h4>
                    <h3 className="dog-info">Weight: </h3>
                    <h4 className="dog-info">
                        M: {props.dog.sex.male.weight} pounds | 
                        F: {props.dog.sex.female.weight} pounds
                    </h4>
                </div>
            </div>
            <div>
                <p className="dog-desc">{props.dog.description}</p>
            </div>
            {props.dog.id < data.length && <hr className="line-break" />}
        </main>
    );
};


export default Card;