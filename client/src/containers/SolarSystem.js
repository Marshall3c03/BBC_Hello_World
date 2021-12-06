import React, { useState } from "react";
import SolarInfo from "../components/SolarInfo";
import "./SolarSystem.css"
import AllPlanets from "../static/All Planets.png"

const SolarSystem = () => {

    const [solarDetails, setSolarDetails] = useState([])


    return(
        <div id="solarsystem">
            <img id="allplanets" src={AllPlanets}/>
            <h3>The Solar System</h3>
            <SolarInfo solarDetails={solarDetails}/>
        </div>
    );
};

export default SolarSystem;