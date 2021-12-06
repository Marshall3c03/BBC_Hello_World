import React from 'react';
import PlanetCarousel from '../components/PlanetCarousel';
import PlanetFactFile from '../components/PlanetFactFile';
import { PlanetSliderData } from '../components/PlanetSliderData';

const PlanetInfo = ({ planets }) => {
        
    return(
        <div>
            <PlanetCarousel planets={planets} slides={PlanetSliderData}/>
            <PlanetFactFile/>
        </div>
    )
}

export default PlanetInfo;