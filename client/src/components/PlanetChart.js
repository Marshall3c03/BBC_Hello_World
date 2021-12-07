import React from "react";
import {Bar, Doughnut, Radar } from 'react-chartjs-2';

//CSS ===============
import '../static/CSS/chart_style.css';
//CSS ===============

const PlanetChart = ({ planetsList }) => {

    const planetNames = []
    const planetNamesBar = []
    const planetNamesPolar = []
    const planetDistance = []
    const planetDiameter = []
    const planetDayLength = []
    const toEarthRatios = []

    const planetsNames = planetsList.map((planet) => {
        planetNames.push(planet.name)
    })
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
    const planetsDayLengths = planetsList.map((planet) => {
        planetDayLength.push(planet['day-length'])
    })
    const EarthRatios = planetsList.map((planet) => {
        if (planet.name !== 'Sun'){
            toEarthRatios.push(planet.toEarthRatio)
        }
    })

    console.log(planetsList);
    console.log(planetNamesBar);
    console.log(planetDayLength)
    console.log(toEarthRatios)
    
    return(
        <>
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
                    responsive: true,
                    layout: {
                        padding: {
                            right: 20
                        }
                    },
                    // borderColor: 'rgba(255, 255, 255, 1)',
                    indexAxis: 'y',
                    scales: {
                        x: {
                             grid: {
                                color: 'rgba(255, 255, 255, 1)'
                             }
                        },
                        y: {
                          grid: {
                            display: false
                          }
                        },
                    }
                }}
            />
            </div>
            <div className='chart-polar'>
            <Bar
                data={{
                    labels: planetNamesPolar,
                    datasets:[{
                            label: 'Planet Diameter (km)',
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
                    responsive: true,
                    scales: {
                        x: {
                             grid: {
                                 display: false
                             }
                        },
                        y: {
                          grid: {
                              color: 'rgba(255, 255, 255, 1)'
                          }
                        },
                      } 
                }}
            />
            </div>
            <div className='chart-bar'>
            <Bar

                
                data={{
                    
                    labels: planetNames,
                    datasets:[{
                            label: 'Length of day (hrs)',
                            data: planetDayLength,
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
                    minBarLength: 1,
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                            align: 'bottom'
                        }
                    }
               
                }}
            />
            </div>
            <div className='chart-polar'>
            <Bar
                data={{
                    labels: planetNamesPolar,
                    datasets:[{
                            label: '(times) ratio to earth ',
                            data: toEarthRatios,
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
                    plugins: {
                        legend: {
                            display: true,
                            labels: {
                                color: 'rgba(255, 255, 255, 1)'
                            }
                        }
                    },
                    responsive: true,
                    indexAxis: 'y',
                    scales: {
                        text: 'sam',
                        color: 'rgba(255, 255, 255, 1)',
                        x: {
                            
                            color: 'rgba(255, 255, 255, 1)',
                            grid: {
                                color: 'rgba(255, 255, 255, 1)'
                            },
                        },
                        y: {
                          grid: {
                            display: false
                          }
                        },
                    }
                }}
                
            />
            </div>
        </div>
        </>
    )
}
export default PlanetChart;