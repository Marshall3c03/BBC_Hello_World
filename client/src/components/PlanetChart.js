import React from "react";
import {Bar} from 'react-chartjs-2';

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
            <div className='chart-one'>
            <Bar
                data={{
                    labels: planetNamesBar,
                    datasets:[{
                            label: 'Distance from Earth (km)',
                            data: planetDistance,
                            backgroundColor: [
                                'rgba(224, 12, 9, 1)',
                                'rgba(252, 171, 16, 1)',
                                'rgba(252, 171, 100, 1)',
                                'rgba(4, 114, 77, 1)',
                                'rgba(0, 168, 120, 1)',
                                'rgba(60, 145, 230, 1)',
                                'rgba(66, 202, 253,  1)',
                                'rgba(148, 75, 187,  1)',
                                'rgba(164, 145, 211,  1)',
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
                    layout: {
                        padding: {
                            right: 20
                        }
                    },
                    // borderColor: 'rgba(255, 255, 255, 1)',
                    indexAxis: 'y',
                    scales: {
                        x: {
                            ticks: {
                                color: 'rgba(255, 255, 255, 1)'
                            },
                             grid: {
                                color: 'rgba(255, 255, 255, 0.5)'
                             }
                        },
                        y: {
                            ticks: {
                                color: 'rgba(255, 255, 255, 1)'
                            },
                          grid: {
                            display: false
                          }
                        },
                    }
                }}
            />
            </div>
            <div className='chart-two'>
            <Bar
                data={{
                    labels: planetNamesPolar,
                    datasets:[{
                            label: 'Planet Diameter (km)',
                            data: planetDiameter,
                            backgroundColor: [
                                'rgba(224, 12, 9, 1)',
                                'rgba(252, 171, 16, 1)',
                                'rgba(252, 171, 100, 1)',
                                'rgba(4, 114, 77, 1)',
                                'rgba(0, 168, 120, 1)',
                                'rgba(60, 145, 230, 1)',
                                'rgba(66, 202, 253,  1)',
                                'rgba(148, 75, 187,  1)',
                                'rgba(164, 145, 211,  1)',
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
                    scales: {
                        x: {
                            ticks: {
                                color: 'rgba(255, 255, 255, 1)'
                            },
                             grid: {
                                 display: false
                             }
                        },
                        y: {
                            ticks: {
                                color: 'rgba(255, 255, 255, 1)'
                            },
                          grid: {
                              color: 'rgba(255, 255, 255, 0.5)'
                          }
                        },
                      } 
                }}
            />
            </div>
            <div className='chart-three'>
            <Bar
                data={{
                    labels: planetNames,
                    datasets:[{
                            label: 'Length of day (hrs)',
                            data: planetDayLength,
                            backgroundColor: [
                                'rgba(224, 12, 9, 1)',
                                'rgba(252, 171, 16, 1)',
                                'rgba(252, 171, 100, 1)',
                                'rgba(4, 114, 77, 1)',
                                'rgba(0, 168, 120, 1)',
                                'rgba(60, 145, 230, 1)',
                                'rgba(66, 202, 253,  1)',
                                'rgba(148, 75, 187,  1)',
                                'rgba(164, 145, 211,  1)',
                            ]
                    }]
                }}
                options = {{
                    minBarLength: 3,
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                            align: 'bottom',
                            labels: {
                                color: 'rgba(255, 255, 255, 1)'
                            }
                        }
                    },
                    scales: {
                        color: 'rgba(255, 255, 255, 1)',
                        x: {
                            ticks: {
                                color: 'rgba(255, 255, 255, 1)'
                            },
                            grid: {
                                display: false
                              }
                        },
                        y: {
                            ticks: {
                                color: 'rgba(255, 255, 255, 1)'
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            },
                        },
                        },
                    }
                }
            />
            </div>
            <div className='chart-four'>
            <Bar
                data={{
                    labels: planetNamesPolar,
                    datasets:[{
                            label: '(times) ratio to earth ',
                            data: toEarthRatios,
                            backgroundColor: [
                                'rgba(224, 12, 9, 1)',
                                'rgba(252, 171, 16, 1)',
                                'rgba(252, 171, 100, 1)',
                                'rgba(4, 114, 77, 1)',
                                'rgba(0, 168, 120, 1)',
                                'rgba(60, 145, 230, 1)',
                                'rgba(66, 202, 253,  1)',
                                'rgba(148, 75, 187,  1)',
                                'rgba(164, 145, 211,  1)',
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
                        x: {
                            ticks: {
                                color: 'rgba(255, 255, 255, 1)'
                            },
                            grid: {
                                // drawTicks: 'true',
                                // tickColor: 'rgba(255, 255, 255, 1)',
                                color: 'rgba(255, 255, 255, 0.5)'
                            },
                        },
                        y: {
                            ticks: {
                                color: 'rgba(255, 255, 255, 1)'
                            },
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