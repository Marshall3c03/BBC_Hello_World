import React, { useState, useEffect } from "react";

//CSS ===============
import "../static/CSS/SolarInfo.css";
//CSS ===============

const SolarInfo = ({solarSystem}) => {
    
    const [isLoaded, setIsLoaded ] = useState(false)    
    

    const checkLoad = () => {
        if (solarSystem.length > 0) {
            setIsLoaded(true)
      }}

    useEffect(() => {
        checkLoad()
    })

    return(
        <div id="solarinfo">
            {isLoaded && 
                <ul id="list">
                    <li class="list-item">{solarSystem[0].description}</li>
                    <li class="list-item">Age: {solarSystem[0].age}</li>
                    <li class="list-item">Stars: {solarSystem[0].stars.length}</li>
                    <li class="list-item">Known planets: {solarSystem[0].planets.length}</li>
                    <li class="list-item">Known dwarf planets: {solarSystem[0].dwarfplanets.length}</li>
                    <li class="list-item">Location: {solarSystem[0].location}</li>
                    <li class="list-item">Fact #1: {solarSystem[0].fact1}</li>
                    <li class="list-item">Fact #2: {solarSystem[0].fact2}</li>
                    <li class="list-item">Fact #3: {solarSystem[0].fact3}</li>
                    <li class="list-item">Fact #4: {solarSystem[0].fact4}</li>
                    <li class="list-item">Fact #5: {solarSystem[0].fact5}</li>
                </ul>
            }
        </div>
    );
};


export default SolarInfo;
