import React from "react";
import {Bar, PolarArea } from 'react-chartjs-2';

const PlanetChart = ({ planetsList }) => {

    const planetNamesBar = []
    const planetNamesPolar = []
    const planetDistance = []
    const planetDiameter = []

    const planetsNamesBar = planetsList.map((planet) => {
        if (planet.name !== 'Earth'){
            planetNamesBar.push(planet.name)
        }
    })
    const planetsNamesPolar = planetsList.map((planet) => {
        if (planet.name !== 'Sun'){
            planetNamesPolar.push(planet.name)
        }
    })
    const planetsDistances = planetsList.map((planet) => {
        if (planet.name !== 'Earth'){
            planetDistance.push(planet.distanceFromEarth)
        }
    })
    const planetsDiameters = planetsList.map((planet) => {
        if (planet.name !== 'Sun'){
            planetDiameter.push(planet.diameter)
        }
    })

    console.log(planetsList);
    console.log(planetNamesBar);

    return(
        <div>
            <h1>CHARTS</h1>
            {/* <p> ######## Chart goes here ######## </p> */}
            <Bar
                data={{
                    labels: planetNamesBar,
                    datasets:[{
                            label: 'Distance from Earth (km)',
                            data: planetDistance,
                            backgroundColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ]
                    }]
                }}
                options = {{
                    indexAxis: 'y' 
                }}
                height={1000}
                width={2000}
            />

            <PolarArea
                data={{
                    labels: planetNamesPolar,
                    datasets:[{
                            label: 'Planet Diamete (km)',
                            data: planetDiameter,
                            backgroundColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ]
                    }]
                }}
                options = {{
                }}
            />
        </div>
    )
}
export default PlanetChart;