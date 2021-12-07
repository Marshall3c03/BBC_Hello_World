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
      name: "SolarBodies", 
      url: "https://api.le-systeme-solaire.net/rest/bodies"
    }
  ]

  const [planetsList, setPlanetsList] = useState([]);

    useEffect(() => {
        loadPlanets(PlanetsApi[0].url)
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

  return (
    <div className="App">
      <NavHeader/>
      <main>
        <Routes>
          <Route path='/home' element={<HomePage planets={planetsList}/>} />
          <Route path='charts' element={<ChartsPage planets={planetsList}/>} />
          <Route path='quiz' element={<PlanetQuiz />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
