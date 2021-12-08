import React from "react";
import ReactGlobe from 'react-globe';

//CSS ===============
import '../static/CSS/EarthPage_style.css' ;
//CSS ===============


const EarthPage = () => {

    const markers = [
        {
          id: 'marker1',
          city: 'Singapore',
          info: 'info',
          color: 'red',
          coordinates: [1.3521, 103.8198],
          value: 50,
        },
        {
          id: 'marker2',
          city: 'New York',
          info: 'info',
          color: 'blue',
          coordinates: [40.73061, -73.935242],
          value: 25,
        },
        {
          id: 'marker3',
          city: 'San Francisco',
          info: 'info',
          color: 'orange',
          coordinates: [37.773972, -122.431297],
          value: 35,
        },
        {
          id: 'marker4',
          city: 'Beijing',
          info: 'info',
          color: 'gold',
          coordinates: [39.9042, 116.4074],
          value: 135,
        },
        {
          id: 'marker5',
          city: 'London',
          info: 'info',
          color: 'green',
          coordinates: [51.5074, 0.1278],
          value: 80,
        },
        {
          id: 'marker6',
          city: 'Los Angeles',
          info: 'info',
          color: 'gold',
          coordinates: [29.7604, -95.3698],
          value: 54,
        },
      ];

      const options = {
        cameraRotateSpeed: 0.5,
        focusAnimationDuration: 2000,
        focusEasingFunction: ['Linear', 'None'],
        // pointLightIntensity: 1.5,
        globeGlowColor: 'white',
        markerTooltipRenderer: marker => `${marker.city} (${marker.info})`,
      };

    return (
        <>
            <div className='globe-container'>
                <ReactGlobe className='globe' height="50vh" markers={markers} options={options}/>
            </div>
            <div height="50vh" backgroundColor="red">
                <p>
                    Information about earth here
                    -fact1
                    -fact2
                    -fact3
                </p>
            </div>
        </>
    );

};

export default EarthPage;