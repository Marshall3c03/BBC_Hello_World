import React from "react";
import { Bar } from 'react-chartjs-2';

const PlanetChart = () => {
    return(
        <div>
            <h1>CHARTS</h1>
            <p> ######## Chart goes here ######## </p>
            <Bar
                datasetIdKey='id'
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets:[
                        {
                            label: '# of Votes',
                            data: [12, 19, 3, 5, 2, 3],
                        },
                    ],
                }}
                // height={200}
                // width={250}
                // options={{
                //     maintainAspectRatio: false,
                // }}
            />
        </div>
    )
}

export default PlanetChart;