import React, { useState, useEffect } from 'react';
import HomePage from './containers/HomePage';
import ChartsPage from './containers/ChartsPage';
import PlanetQuiz from './containers/PlanetQuiz';
import NavHeader from './components/NavHeader';
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

    const loadSolarSystem = url => {
      fetch(url)
      .then(result => result.json())
      .then(solarSystemJson => setSolarSystem(solarSystemJson))
    }

  return (
    <div className="App">
      <NavHeader/>
      <main>
        <Routes>
          <Route path='/home' element={<HomePage planets={planetsList} solarsystem={solarSystem}/>} />
          <Route path='charts' element={<ChartsPage planets={planetsList}/>} />
          <Route path='quiz' element={<PlanetQuiz />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
