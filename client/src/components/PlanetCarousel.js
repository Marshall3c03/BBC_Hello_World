import React, {useState} from 'react';
import '../static/CSS/PlanetCarousel.css';
import {Link} from 'react-router-dom';

const PlanetCarousel = ({ planets, slides }) => {

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
                            <p><img id="banner-image" src={require(`../static/${planet.name}.jpg`).default} alt="planet image"/></p>

                            <section id = "planet-slide-block">

                                    <div id = "duplicate-left">
                                    <section id = "planet-image">
                                        <img src={require(`../static/${planet.left_planet.name}-Photo.jpeg`).default} alt="planet image" height="175px" width="175px"/>
                                    </section>
                                    <section id = "planet-info">
                                    <h2>{planet.left_planet.name}</h2>
                                        <p>Diameter: {planet.left_planet.diameter} km</p>
                                        <p>Day Length: {planet.left_planet.day_length} Hours</p>
                                        <button>View {planet.left_planet.name}</button>
                                    </section>
                                    </div>

                                <div id = "planet-main">
                                <section id = "planet-image">
                                    <img id="arrow-l" src={require('../static/Left-Arrow.png').default} width="35px"  onClick={prevSlide}/>
                                    <img src={require(`../static/${planet.name}-Photo.jpeg`).default} alt="planet image" height="175px" width="175px"/>
                                    <img id="arrow-r" src={require('../static/Right-Arrow.png').default} width="35px" onClick={nextSlide}/>
                                </section>
                                <section id = "planet-info">
                                <h2>{planet.name}</h2>
                                    <p>Diameter: {planet.diameter} km</p>
                                    <p>Day Length: {planet['day-length']} Hours</p>
                                    <button>View {planet.name}</button>
                                </section>
                                </div>

                                <div id = "duplicate-right">
                                    <section id = "planet-image">
                                        <img src={require(`../static/${planet.right_planet.name}-Photo.jpeg`).default} alt="planet image" height="175px" width="175px"/>
                                    </section>
                                    <section id = "planet-info">
                                    <h2>{planet.right_planet.name}</h2>
                                        <p>Diameter: {planet.right_planet.diameter} km</p>
                                        <p>Day Length: {planet.right_planet.day_length} Hours</p>
                                        <button>View {planet.right_planet.name}</button>
                                    </section>
                                    </div>

                            </section>

                            <section id = "planet-data">
                                <p>Discovered in {planet.discovered}</p>
                                <p>Surface Temperature {planet['surface-temperature']} &#8451;</p>
                                <p>Size compared to Earth: {planet.toEarthRatio}</p>
                                <p>Fun Fact: {planet.fact}</p>
                            </section>
                        </div>)}

                   </div>
                   </>
               )
           })}

        <Link to='/easteregg'><img id = "easteregg" src = {require('../static/Star.png').default} alt="star"/></Link>

        </section>
    )
}

export default PlanetCarousel;