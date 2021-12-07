import React, { useState, useEffect } from "react";
import "../static/CSS/SolarInfo.css";

const SolarInfo = ({solarSystem}) => {
    
    const [isLoaded, setIsLoaded ] = useState(false)
    
    

    const checkLoad = () => {
        if (solarSystem.length > 0) {
            setIsLoaded(true) 
        }
      }

    useEffect(() => {
        checkLoad()
    }, []) 

    return(
        <div id="solarinfo">
            {isLoaded && 
                <ul id="list">
                    <li class="list-item">{solarSystem[0].description}</li>
                    <li class="list-item">Age: {solarSystem[0].age}</li>
                    <li class="list-item">Stars:</li>
                    <li class="list-item">Known planets:</li>
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
