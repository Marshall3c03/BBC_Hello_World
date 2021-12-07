import React, { useEffect, useState } from 'react';
import PlanetChart from '../components/PlanetChart';

const ChartsPage = ({ planets }) => {

    return(
        <>
            <PlanetChart planetsList={planets}/>
        </>
    )
}
export default ChartsPage;