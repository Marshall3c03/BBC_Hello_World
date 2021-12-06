import React from 'react';
import PlanetCarousel from '../components/PlanetCarousel';

const PlanetInfo = ({ planets }) => {
        
    return(
        <div>
            <PlanetCarousel planets={planets}/>
        </div>
    )
}

export default PlanetInfo;