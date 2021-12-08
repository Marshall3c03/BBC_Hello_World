import React, { useState, useEffect } from 'react';
import HomePage from './containers/HomePage';
import ChartsPage from './containers/ChartsPage';
import PlanetQuiz from './containers/PlanetQuiz';
import NavHeader from './components/NavHeader';
import AboutPage from './components/AboutPage';
import EasterEgg from './components/EasterEgg';
import Earth from './components/Earth';
import {Routes, Route} from 'react-router-dom'; 

//CSS ===============
import './App.css';
//CSS ===============

function App() {

  const PlanetsApi = [
    {
      name: "seededPlanets", 
      url: "http://localhost:5000/api/planets"
    },
    {
      name: "SolarSystem", 
      url: "http://localhost:5000/api/solarsystem"
    }
  ]

  const [planetsList, setPlanetsList] = useState([]);
  const [solarSystem, setSolarSystem] = useState([]);

    useEffect(() => {
        loadPlanets(PlanetsApi[0].url)
        loadSolarSystem(PlanetsApi[1].url)
        // console.log('planets loaded')
        // loadPlanets(planets[1].url)

        return () => {
            // console.log('planets unloaded')
        }
    }, [])

    const loadPlanets = url => {
        fetch(url)
        .then(result => result.json())
        .then(planetsJson => setPlanetsList(planetsJson))
    }

    const loadSolarSystem = url => {
      fetch(url)
      .then(result => result.json())
      .then(solarSystemJson => setSolarSystem(solarSystemJson))
    }

  return (
    <div className="App">
      <NavHeader/>
      <main className='page-components'>
        <Routes>
          <Route path='/home' element={<HomePage planets={planetsList} solarSystem={solarSystem}/>} />
          <Route path='charts' element={<ChartsPage planets={planetsList}/>} />
          <Route path='quiz' element={<PlanetQuiz />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='easteregg' element={<EasterEgg />}/>
          <Route path='earth' element={<Earth />}/>
        </Routes>
      </main>
    </div>
  );
}
export default App;
