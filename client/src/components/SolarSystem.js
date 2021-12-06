import React, { useState } from "react";
import SolarInfo from "../components/SolarInfo";
import "../static/CSS/SolarSystem.css"
import AllPlanets from "../static/All Planets.png"

const SolarSystem = ({solarsystem}) => {

    

    return(
        <div id="solarsystem">
            <img id="allplanets" src={AllPlanets}/>
            <h3>The Solar System</h3>
            <SolarInfo solarsystem={solarsystem}/>
        </div>
    );
};

export default SolarSystem;