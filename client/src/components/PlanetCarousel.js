import React, {useState} from 'react';
import { PlanetSliderData } from './PlanetSliderData';

const PlanetCarousel = ({ slides }) => {

    const [current, setCurrent] = useState(3)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    console.log(current)

    return(
        <section>
            
           {PlanetSliderData.map((slide, index) => {
               return(
                   <div>
                        {index === current && (
                        <div>
                            <p><img src={slide.planet_icon} alt="planet image" width="75%"/></p>
                            <div id = "planet-image">
                                <img src = { require('../static/Left-Arrow.png').default } width="35px"  onClick={prevSlide}/>
                                <img src={slide.image} alt="planet image" height="175px" width="175px"/>
                                <img src = { require('../static/Right-Arrow.png').default } width="35px" onClick={nextSlide}/>
                            </div>
                                <section id = "planet-info"> 
                                    <h1>{slide.name}</h1>
                                    <p>Diameter: {slide.diameter} km</p>
                                    <p>Day Length: {slide['day-length']} Hours</p>
                                    <button>View {slide.name}</button>
                                </section>
                                <section id = "planet-facts">
                                    <p>Cool facts here</p>
                                </section>
                        </div>)}
                   </div>
               )
           })}
        </section>
    )
}

export default PlanetCarousel;