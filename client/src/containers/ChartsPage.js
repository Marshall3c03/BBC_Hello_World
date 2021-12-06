import React, { useEffect, useState } from 'react';
import PlanetChart from '../components/PlanetChart';

const ChartsPage = ({ planets }) => {

    const [planetsList, setPlanetsList] = useState([]);

    useEffect(() => {
        loadPlanets(planets[0].url)
        console.log('planets loaded')
        // loadPlanets(planets[1].url)

        return () => {
            console.log('planets unloaded')
        }
    }, [])


    const loadPlanets = url => {
        fetch(url)
        .then(result => result.json())
        .then(planetsJson => setPlanetsList(planetsJson))
    }

    return(
        <div>
            <PlanetChart planetsList={planetsList}/>
        </div>
    )
}
export default ChartsPage;