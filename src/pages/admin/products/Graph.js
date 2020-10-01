import React, { Component } from 'react';
import { Line } from 'react-chartjs-2'

function Graph() {
    
    const data = {
        labels: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August'
        ],
        datasets: [
            {
                label: 'Sales for 2020 (M)',
                data: [20, 20, 40, 40, 60, 60, 80, 80, 95],
                borderColor: ['rgb(67, 113, 241)'],
                backgroundColor: ['rgb(147, 169, 230)'],
                pointBackgroundColor: 'rgb(120, 152, 243)',
                pointBorderBackgroundColor: 'rgb(67, 113, 241)'
            }
        ]
    }
    
    const options = {
        title: {
            display: true,
            text: "Прогресс навиков"
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 100,
                        
                    }
                }
            ]
        }
    }

    return (
        
        <Line data={data} options={options} />
    )
}

export default Graph;