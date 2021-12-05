import React from 'react';
import HelloWorld from './containers/HelloWorld';
import './App.css';


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
      <HelloWorld planets={PlanetsApi}/>
    </div>
  );
}

export default App;
