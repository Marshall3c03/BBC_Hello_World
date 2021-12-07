import React from "react";
import SolarInfo from "./SolarInfo";
import AllPlanets from "../static/All Planets.jpg";

//CSS ===============
import '../static/CSS/SolarSystem.css';
//CSS ===============

const SolarSystem = () => {

    console.log('solarsystem rendered')

    return(
        <div className="solarsystem">
            <img id="allplanets" src={AllPlanets}/>
            <h3>The Solar System</h3>
            <SolarInfo solarSystem={solarSystem}/>
        </div>
    );
};

export default SolarSystem;