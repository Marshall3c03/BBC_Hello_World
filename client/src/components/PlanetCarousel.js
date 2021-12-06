import React, {useState} from 'react';
// import Earth from '../static/Earth.png';

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

    return(
        <section>
           {planets.map((planet, index) => {

               const displayImage = (planet) => {
                
               }

               return(
                   <>
                   <div>
                        {index === current && (
                            
                        <div>
                            <p><img src={require(`../static/${planet.name}.png`).default} alt="planet image" width="75%"/></p>
                            <section id = "planet-image">
                                <img src={require('../static/Left-Arrow.png').default} width="35px"  onClick={prevSlide}/>
                                <img src={require(`../static/${planet.name}-Photo.jpeg`).default} alt="planet image" height="175px" width="175px"/>
                                <img src={require('../static/Right-Arrow.png').default} width="35px" onClick={nextSlide}/>
                            </section>
                            <section id = "planet-info">
                            <p>{planet.name}</p>
                                <p>Diameter: {planet.diameter} km</p>
                                <p>Day Length: {planet['day-length']} Hours</p>
                                <button onCLick = {planet.big_image}>View {planet.name}</button>
                            </section>
                            <section id = "planet-data">
                                <p>Discovered in {planet.discovered}</p>
                                <p>Surface Temperature {planet['surface-temperature']} &#8451;</p>
                                <p>Size compared to Earth: {planet.toEarthRatio}</p>
                            </section>
                        </div>)}

                   </div>
                   </>
               )
           })}
        </section>
    )
}

export default PlanetCarousel;