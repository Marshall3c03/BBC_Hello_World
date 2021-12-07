import React, { useEffect, useState } from 'react';
import PlanetCarousel from '../components/PlanetCarousel';
import SolarSystem from '../components/SolarSystem';

const HomePage = ({ planets }) => {

    return(
        <div>
            <PlanetCarousel planets={planets}/>
            <SolarSystem/>
        </div>
    )
}

export default HomePage;