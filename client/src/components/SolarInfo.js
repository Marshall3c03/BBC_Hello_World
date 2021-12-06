import React from "react";
import "../static/CSS/SolarInfo.css";

const SolarInfo = ({solarsystem}) => {
    
    return(
        <div id="solarinfo">
            <ul id="list">
                <li class="list-item">{solarsystem[0].age}</li>
                <li class="list-item"></li>
                <li class="list-item"></li>
                <li class="list-item"></li>
                <li class="list-item"></li>
                <li class="list-item"></li>
                <li class="list-item"></li>
                <li class="list-item"></li>
                <li class="list-item"></li>
                <li class="list-item"></li>
            </ul>
        </div>
    );
};

export default SolarInfo;
