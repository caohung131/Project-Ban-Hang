import React from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, DoughnutController} from "chart.js/auto"
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  DoughnutController
)

const LinechartTest = (chartData) => {
  let data =  {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  }

  let options = {
    maintainAspectRadio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    legend: {
      label: {
        fontSize: 26
      }
    }
  }


  return (
    
      <Bar 
        data={data}
        height={400}

      />
  )
}



export default LinechartTest

