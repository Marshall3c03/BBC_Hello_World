import React from 'react';
import PlanetInfo from './PlanetInfo';
import PlanetQuiz from './PlanetQuiz';
import Logo from '../static/Hello-World-Logo.png';

const HelloWorld = () => {

    return(
        <div>
            <img src = {Logo} width = "50%"/>
            <PlanetInfo />
            <PlanetQuiz/>
        </div>
    )
}

export default HelloWorld;