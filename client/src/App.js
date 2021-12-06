import React from 'react';
import HelloWorld from './containers/HelloWorld';
import ChartsPage from './containers/ChartsPage';
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

  return (
    <div className="App">
      <NavHeader/>
      <main>
        <Routes>
          <Route path='/' element={<HelloWorld planets={PlanetsApi}/>} />
          <Route path='charts' element={<ChartsPage planets={PlanetsApi}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
