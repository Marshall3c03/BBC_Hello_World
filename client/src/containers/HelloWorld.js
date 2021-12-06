import React, { useEffect, useState } from 'react';
import PlanetInfo from './PlanetInfo';
import PlanetQuiz from './PlanetQuiz';
import SolarSystem from './SolarSystem';

import Logo from '../static/Hello-World-Logo.png';
import PlanetChart from '../components/PlanetChart';

const HelloWorld = ({ planets }) => {

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
            <img src = {Logo} width = "50%"/>
            <PlanetInfo planets={planetsList}/>
            <SolarSystem/>
            <PlanetQuiz/>
            <PlanetChart planetsList={planetsList}/>
        </div>
    )
}

export default HelloWorld;