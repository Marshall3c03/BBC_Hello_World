import React from 'react';
import PlanetInfo from './PlanetInfo';
import PlanetQuiz from './PlanetQuiz';
import PlanetChart from '../components/PlanetChart';

const HelloWorld = () => {
    return(
        <div>
            <h1>Hello World</h1>
            <PlanetInfo/>
            <PlanetQuiz/>
            <PlanetChart/>
        </div>
    )
}

export default HelloWorld;