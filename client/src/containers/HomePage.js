import React, { useEffect, useState } from 'react';
import PlanetCarousel from '../components/PlanetCarousel';
import SolarSystem from '../components/SolarSystem';

const HomePage = ({ planets, solarsystem }) => {

    return(
        <div>
            <PlanetCarousel planets={planets}/>
            <SolarSystem solarsystem={solarsystem}/>
        </div>
    )
}
export default HomePage;