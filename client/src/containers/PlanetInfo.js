import React from 'react';
import PlanetCarousel from '../components/PlanetCarousel';
import { PlanetSliderData } from '../components/PlanetSliderData';

const PlanetInfo = ({ planets }) => {
        
    return(
        <div>
            <PlanetCarousel planets={planets} slides={PlanetSliderData}/>
        </div>
    )
}

export default PlanetInfo;