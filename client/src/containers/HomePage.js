import React, { useEffect, useState } from 'react';
import PlanetCarousel from '../components/PlanetCarousel';
import SolarSystem from '../components/SolarSystem';

//CSS ===============
import '../static/CSS/HomePage_style.css';
//CSS ===============

const HomePage = ({ planets }) => {

    return(
        <>
            <div className = "carousel-container">
                <PlanetCarousel planets={planets}/>
            </div>
            <div className ='solarsystem-container'>
                <SolarSystem/>
            </div>
        </>
    )
}

export default HomePage;