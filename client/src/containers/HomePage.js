import React, { useEffect, useState } from 'react';
import PlanetCarousel from '../components/PlanetCarousel';
import SolarSystem from '../components/SolarSystem';

//CSS ===============
import '../static/CSS/HomePage_style.css';
//CSS ===============

const HomePage = ({ planets, solarSystem }) => {

    return(
        <>
            <div className = "carousel-container">
                <PlanetCarousel planets={planets}/>
            </div>
            <div className ='solarsystem-container'>
                <SolarSystem solarSystem={solarSystem}/>
            </div>
        </>
    )
}

export default HomePage;