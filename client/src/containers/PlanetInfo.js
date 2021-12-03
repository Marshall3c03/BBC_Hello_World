import React from 'react';
import PlanetCarousel from '../components/PlanetCarousel';
import PlanetFactFile from '../components/PlanetFactFile';
import PlanetLayout from '../components/PlanetLayout';

const PlanetInfo = () => {
    return(
        <div>
            <PlanetLayout/>
            <PlanetCarousel/>
            <PlanetFactFile/>
        </div>
    )
}

export default PlanetInfo;