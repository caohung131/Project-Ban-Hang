import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = [
  "T1",
  "T2",
  "T3",
  "T4",
  "T5",
  "T6",
  "T7",
  "T8",
  "T9",
  "10",
  "11",
  "12",
];

// const cou = prop.countUser
// console.log(cou)

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [111, 103, 22, 151, 20, 30, 45,33,55,22,13,55],
    },
  ],
};

const LineChart = (prop) => {

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
