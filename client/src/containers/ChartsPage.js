import React, { useEffect, useState } from 'react';
import PlanetChart from '../components/PlanetChart';

const ChartsPage = ({ planets }) => {

    return(
        <div>
            <PlanetChart planetsList={planets}/>
        </div>
    )
}
export default ChartsPage;