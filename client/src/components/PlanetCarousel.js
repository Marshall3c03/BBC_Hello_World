import React, {useState} from 'react';

//CSS ===============
import '../static/CSS/PlanetCarousel.css';
//CSS ===============

const PlanetCarousel = ({ planets }) => {

    const [current, setCurrent] = useState(3)
    const length = planets.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(planets) || planets.length <= 0){
        return null;
    }

    console.log('carousel rendered')

    return(
        <>
            {planets.map((planet, index) => {
                return(
                    <>
                    {index === current && (
                        <div className='carousel'>
                            <p><img src={planet.planet_icon} alt="planet image" width="75%"/></p>
                            <img src={require('../static/Left-Arrow.png').default} width="35px"  onClick={prevSlide}/>
                            <img src={planet.image} alt="planet image" height="175px" width="175px"/>
                            <img src={require('../static/Right-Arrow.png').default} width="35px" onClick={nextSlide}/>
                            <p>{planet.name}</p>
                            <p>Diameter: {planet.diameter} km</p>
                            <p>Day Length: {planet['day-length']} Hours</p>
                            <button>View {planet.name}</button>
                        </div>)}
                    </>
                )
            })}
        </>
    )
}

export default PlanetCarousel;