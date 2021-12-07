import React, { useEffect, useState } from 'react';
import PlanetCarousel from '../components/PlanetCarousel';
import SolarSystem from '../components/SolarSystem';

const HomePage = ({ planets, solarSystem }) => {
    
  
    return(
        <div>
            <PlanetCarousel planets={planets}/>
            <SolarSystem solarSystem={solarSystem}/>
        </div>
    )
}
export default HomePage;