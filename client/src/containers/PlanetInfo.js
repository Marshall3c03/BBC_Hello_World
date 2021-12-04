import React from 'react';
import PlanetCarousel from '../components/PlanetCarousel';
import PlanetFactFile from '../components/PlanetFactFile';
import PlanetLayout from '../components/PlanetLayout';
import { PlanetSliderData } from '../components/PlanetSliderData';

const PlanetInfo = () => {
    return(
        <div>
            <PlanetLayout/>
            <PlanetCarousel slides={PlanetSliderData}/>
            <PlanetFactFile/>
        </div>
    )
}

export default PlanetInfo;