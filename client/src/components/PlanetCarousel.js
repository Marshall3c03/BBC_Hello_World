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
            <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39040/preview.png" width="35px"  onClick={prevSlide}/>
            
           {PlanetSliderData.map((slide, index) => {
               return(
                   <div>
                       {index === current && (
                        <div>
                       <img src={slide.image} alt="planet image" width="175px" height="175px"/>
                       <p>{slide.name}</p>
                       <p>Diameter: {slide.diameter} km</p>
                       <p>Day Length: {slide['day-length']} Hours</p>
                       <button>View {slide.name}</button>
                       </div>)}
                   </div>
               )
           })}
           <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39041/preview.png" width="35px" onClick={nextSlide}/>
        </section>
    )
}

export default PlanetCarousel;