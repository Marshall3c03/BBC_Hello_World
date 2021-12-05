import React from 'react';
import HelloWorld from './containers/HelloWorld';
import './App.css';


function App() {

  const solarSystemBodies = [
    {
      name: "SolarBodies", 
      // url: "https://api.le-systeme-solaire.net/rest/bodies"
      url: "http://localhost:5000/api/planets"

    }
  ]
  return (
    <div className="App">
      <HelloWorld planets={solarSystemBodies}/>
    </div>
  );
}

export default App;
