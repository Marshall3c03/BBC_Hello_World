import React from "react";
import SolarInfo from "./SolarInfo";
import SolarSystemImage from "../static/SolarSystem.png";

//CSS ===============
import '../static/CSS/SolarSystem.css';
//CSS ===============

const SolarSystem = ({solarSystem}) => {

    console.log('solarsystem rendered')

    return(
        <div className="solarsystem">
            <img id="allplanets" src={SolarSystemImage}/>
            <h3>THE SOLAR SYSTEM</h3>
            <SolarInfo solarSystem={solarSystem}/>
        </div>
    );
};

export default SolarSystem;