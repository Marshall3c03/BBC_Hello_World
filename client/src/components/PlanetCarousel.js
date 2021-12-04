import React, {useState} from 'react';
import { PlanetSliderData } from './PlanetSliderData';

const PlanetCarousel = () => {

    const [current, setCurrent] = useState(3)
    // const length = slides.length


    return(
        <div>
           {PlanetSliderData.map((slide, index) => {
               return(
                   <div>
                        <img src={slide.image} alt="planet image" width="175px"/>
                   </div>
               )
           })}
        </div>
    )
}

export default PlanetCarousel;