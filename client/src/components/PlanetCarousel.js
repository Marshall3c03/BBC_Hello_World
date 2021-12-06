import React, {useState} from 'react';

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
               return(
                   <div>
                        {index === current && (
                        <div>
                            <p><img src={planet.planet_icon} alt="planet image" width="75%"/></p>
                            <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39040/preview.png" width="35px"  onClick={prevSlide}/>
                            <img src={planet.image} alt="planet image" height="175px" width="175px"/>
                            <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39041/preview.png" width="35px" onClick={nextSlide}/>
                            <p>{planet.name}</p>
                            <p>Diameter: {planet.diameter} km</p>
                            <p>Day Length: {planet['day-length']} Hours</p>
                            <button>View {planet.name}</button>
                        </div>)}
                   </div>
               )
           })}
        </section>
    )
}

export default PlanetCarousel;