import React from "react";
import {Bar, PolarArea } from 'react-chartjs-2';

//CSS ===============
import '../static/CSS/chart_style.css';
//CSS ===============

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
        <>
            <h1>CHARTS</h1>
        <div className='all-charts'>
            <div className='chart-bar'>
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
            />
            </div>
            <div className='chart-polar'>
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
        </div>
        </>
    )
}
export default PlanetChart;