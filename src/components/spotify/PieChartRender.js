import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, defaults } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

defaults.color = "white";
defaults.font.size = 20;
if (window.matchMedia('(max-device-width: 500px)').matches) {
    defaults.font.size = '10'
}
const options = {
    responsive: true,
    maintainAspectRatio: true,
    
    elements: {

    },
    responsive: true,
    plugins: {
        legend: {
            display: true
        }
    },
};


export function PieChartRender(props) {
    if(window.matchMedia('(min-device-width: 1350px)').matches){
        return <div style={{ margin: "0 auto", height: "auto", width: "40vw" }}><Pie data={props.data} options={options} /></div>
    }
    else if (window.matchMedia('(min-device-width: 800px)').matches){
        return <div style={{ margin: "0 auto", height: "auto", width: "60vw" }}><Pie data={props.data} options={options} /></div>
    }
    else
        return <Pie data={props.data} options={options} />
}
