import React, { useState, useEffect } from "react";
import "../static/CSS/SolarInfo.css";

const SolarInfo = ({solarSystem}) => {
    
    const [isLoaded, setIsLoaded ] = useState(false)
    
    

    const checkLoad = () => {
        if (solarSystem.length > 0) {
            setIsLoaded(true) 
        }
      }

    const stars = solarSystem[0].stars.map(star => {
        return <p>{star.name}</p>
    })

    const planets = solarSystem[0].planets.map(planet => {
        return <p>{planet.name},</p>
    })

    useEffect(() => {
        checkLoad()
    }, []) 

    return(
        <div id="solarinfo">
            {isLoaded && 
                <ul id="list">
                    <li class="list-item">{solarSystem[0].description}</li>
                    <li class="list-item">Age: {solarSystem[0].age}</li>
                    <li class="list-item">Stars: {stars}</li>
                    <li class="list-item">Known planets: {planets}</li>
                    <li class="list-item">Known dwarf planets:</li>
                    <li class="list-item"></li>
                    <li class="list-item"></li>
                    <li class="list-item"></li>
                    <li class="list-item"></li>
                    <li class="list-item"></li>
                </ul>
            }
        </div>
    );
};

export default SolarInfo;
