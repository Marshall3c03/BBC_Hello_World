import React, { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';

const PlanetChart = ({ planetsList }) => {

    const planetNames = []
    const planetDistance = []

    const planetsNames = planetsList.map((planet) => {
        planetNames.push(planet.name)
    })

    const planetsDistances = planetsList.map((planet) => {
        planetDistance.push(planet.distanceFromEarth)
    })

    console.log(planetsList)
    console.log(planetNames)

    return(
        <div>
            <h1>CHARTS</h1>
            <p> ######## Chart goes here ######## </p>
            <Bar
                data={{
                    labels: planetNames,
                    datasets:[
                        {
                            label: 'Distance from Earth',
                            data: planetDistance,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                        },
                    ],
                }}
                height={1000}
                width={2000}
            />
        </div>
    )
}
export default PlanetChart;