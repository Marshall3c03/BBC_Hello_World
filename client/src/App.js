import React from 'react';
import HelloWorld from './containers/HelloWorld';
import './App.css';
import {Routes, Route} from 'react-router-dom'; 
import ChartsPage from './containers/ChartsPage';


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
      <Routes>
        <Route path='/' element={<HelloWorld planets={PlanetsApi}/>} />
        <Route path='charts' element={<ChartsPage planets={PlanetsApi}/>} />
      </Routes>
    </div>
  );
}

export default App;
