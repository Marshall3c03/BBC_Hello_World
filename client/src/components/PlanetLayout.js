import React from 'react';
// import AllPlanets from '../static/All-Planets.png';
import Earth from '../static/Earth.png';
import Jupiter from '../static/Jupiter.png';
import Mars from '../static/Mars.png';
import Mercury from '../static/Mercury.png';
import Neptune from '../static/Neptune.png';
import Pluto from '../static/Pluto.png';
import Saturn from '../static/Saturn.png';
import Sun from '../static/The-Sun.png';
import Uranus from '../static/Uranus.png';
import Venus from '../static/Venus.png';

const PlanetLayout = ({onPlanetClick}) => {

        return(
            <div>
                <p>
                <button onClick = {onPlanetClick(Sun)}> The Sun </button>
                <button onClick = {onPlanetClick(Mercury)}> Mercury </button>
                <button onClick = {onPlanetClick(Venus)}> Venus </button>
                <button onClick = {onPlanetClick(Earth)}> Earth </button>
                <button onClick = {onPlanetClick(Mars)}> Mars </button>
                <button onClick = {onPlanetClick(Jupiter)}> Jupiter </button>
                <button onClick = {onPlanetClick(Saturn)}> Saturn </button>
                <button onClick = {onPlanetClick(Uranus)}> Uranus </button>
                <button onClick = {onPlanetClick(Neptune)}> Neptune </button>
                <button onClick = {onPlanetClick(Pluto)}> Pluto </button>
                </p>
            </div>
        )
    }
    
export default PlanetLayout;
