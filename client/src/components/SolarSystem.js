import React, { useState } from "react";
import SolarInfo from "../components/SolarInfo";
import "../static/CSS/SolarSystem.css"
import AllPlanets from "../static/All Planets.png"

const SolarSystem = ({solarSystem}) => {


    return(
        <div id="solarsystem">
            <img id="allplanets" src={AllPlanets}/>
            <h3>The Solar System</h3>
            <SolarInfo solarSystem={solarSystem}/>
        </div>
    );
};

export default SolarSystem;