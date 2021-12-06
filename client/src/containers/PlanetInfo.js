import React from 'react';
import PlanetCarousel from '../components/PlanetCarousel';
import PlanetFactFile from '../components/PlanetFactFile';

const PlanetInfo = ({ planets }) => {
        
    return(
        <div>
            <PlanetCarousel planets={planets}/>
            <PlanetFactFile/>
        </div>
    )
}

export default PlanetInfo;