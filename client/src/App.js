import React, { useState, useEffect } from 'react';
import HomePage from './containers/HomePage';
import ChartsPage from './containers/ChartsPage';
import PlanetQuiz from './containers/PlanetQuiz';
import NavHeader from './components/NavHeader';
import AboutPage from './components/AboutPage';
import EasterEgg from './components/EasterEgg';
import EarthPage from './components/EarthPage';
import Jupiter from './components/Jupiter';
import Uranus from './components/Uranus';
import Pluto from './components/Pluto';
import Saturn from './components/Saturn';
import Mars from './components/Mars';
import Mercury from './components/Mercury';
import Sun from './components/Sun';
import Venus from './components/Venus';
import Neptune from './components/Neptune';
import SplashPage from './components/SplashPage';
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

          <Route path='/' element={<SplashPage />}/>
          <Route path='/home' element={<HomePage planets={planetsList} solarSystem={solarSystem}/>} />
          <Route path='charts' element={<ChartsPage planets={planetsList}/>} />
          <Route path='quiz' element={<PlanetQuiz />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='easteregg' element={<EasterEgg />}/>

          <Route path='earth' element={<EarthPage />}/>
          <Route path='jupiter' element={<Jupiter />}/>
          <Route path='uranus' element={<Uranus />}/>
          <Route path='pluto' element={<Pluto />}/>
          <Route path='saturn' element={<Saturn />}/>
          <Route path='mars' element={<Mars />}/>
          <Route path='mercury' element={<Mercury />}/>
          <Route path='sun' element={<Sun />}/>
          <Route path='venus' element={<Venus />}/>
          <Route path='neptune' element={<Neptune />}/>

        </Routes>
      </main>
    </div>
  );
}
export default App;
