import React, { useState } from "react";
import ReactGlobe from 'react-globe';
// import { allMarkers } from './markers.js';

//CSS ===============
import '../static/CSS/EarthPage_style.css' ;
//CSS ===============

const EarthPage = () => {

    const markers= [
        {
            id: 'marker1',
            facility: 'Kennedy Space Center',
            location: 'Cape Canaveral',
            info: 'info',
            color: 'rgba(224, 12, 9, 1)',
            coordinates: [28.57427, -80.64907],
            value: 50,
            image: '../static/SpaceCenters/kennedy_space_center.jpeg'
        },
        {
            id: 'marker2',
            facility: 'Baikonur Cosmodrome',
            location: 'Kazakhstan',
            info: 'info',
            color: 'rgba(252, 171, 16, 1)',
            coordinates: [45.96480, 63.30523],
            value: 25,
            image: '../static/SpaceCenters/kazakhstan.jpg'
        },
        {
            id: 'marker3',
            facility: 'Guiana Space Center',
            location: 'Korurou (French Guiana)',
            info: 'info',
            color: 'rgba(60, 145, 230, 1)',
            coordinates: [5.16756, -52.68326],
            value: 35,
            image: '../static/SpaceCenters/guiana.jpg'
        },
        {
            id: 'marker4',
            facility: 'Jiuquan Satellite Launch Center',
            location: 'China',
            info: 'info',
            color: 'rgba(148, 75, 187,  1)',
            coordinates: [40.98426, 100.20861],
            value: 135,
            image: '../static/SpaceCenters/china.jpg'
        },
        {
            id: 'marker5',
            facility: 'Satish Dhawan Space Center',
            location: 'India',
            info: 'info',
            color: 'rgba(0, 168, 120, 1)',
            coordinates: [13.72611, 80.22655],
            value: 54,
            image: '../static/SpaceCenters/india.jpg'
        },
        {
            id: 'marker6',
            facility: 'Rocket Lab Launch Complex One',
            location: 'New Zealand',
            info: 'info',
            color: 'rgba(148, 75, 187,  1)',
            coordinates: [-39.26027, 177.86624],
            value: 54,
            image: '../static/SpaceCenters/newzeland.jpeg'
        },
    ]


    // const [markers, setMarkers] = useState([]);
    // const [event, setEvent] = useState(null);
    // const [details, setDetails] = useState(null);

    // const initMarkers = (mark) => {
    //     const marks = allMarksImported[mark].markers,map(marker => ({
    //         ...marker,
    //         value: marker.value,
    //     }))
    //     return marks
    // }
    
    // console.log(markers)
    // const getTooltipContent = markers.map(({ marker }) => {
    //     console.log(markers)
    //     return(
    //         <div>
    //             <h2>{marker}</h2>
    //             <p>{marker}</p>
    //         </div>
    //     )
    // });

    // const onClickMarker = (marker, markerObject, event) => {
    //     setEvent({
    //         type: 'CLICK',
    //         marker,
    //         markerObjectID: markerObject.uuid,
    //         PointerEventPosition: { x: event.clientX, y: event.clientY },
    //     });
    //     setDetails(getTooltipContent(marker));
    // }

    const options = {
        initialCoordinates: [28.57427, -80.64907],
        markerType: 'bar',
        cameraRotateSpeed: 1.5,
        focusAnimationDuration: 1000,
        focusEasingFunction: ['Linear', 'None'],
        globeGlowColor: 'white',
        markerRadiusScaleRange: [0.3, 0.3],
        markerTooltipRenderer: marker => { const tooltipContent = document.createElement("div");
                                            tooltipContent.innerHTML = `<div style='background-color:black;' ><img src="${marker.image}" /> ${marker.facility} at (${marker.location})</div>`; 
                                            return tooltipContent;
                                        }
      };
    return (
        <>
            <div className='globe-container'>
                <ReactGlobe 
                    // onClickMarker={onClickMarker}
                    className='globe' 
                    height="75vh" 
                    markers={markers} 
                    options={options}
                    globeBackgroundTexture={null}
                />
            </div>
            <div>
                
            </div>
        </>
    );

};

export default EarthPage;