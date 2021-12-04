import React from 'react';
import Earth from '../static/EarthAvatar.jpeg'

const PlanetCarousel = () => {
    return(
        <div>
            <img src={Earth} width="175px"/>
            <ul>
                <li>
                    <p>Name: Earth</p>
                </li>
                <li>
                    <p>Diameter: 12742km</p>
                </li>
            </ul>
            <button>Select Planet</button>
        </div>
    )
}

export default PlanetCarousel;