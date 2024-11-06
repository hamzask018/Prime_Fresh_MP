import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ datasets , options }) => {
  // Prepare the data for the chart
  const chartData = {
    labels: datasets.map(item => item.label),
    datasets: [
      {
        data: datasets.map(item => item.value),
        backgroundColor: datasets.map(item => item.backgroundColor), // Dynamic color
        hoverBackgroundColor: datasets.map(item => item.hoverBackgroundColor),
      },
    ],
  };

  return <Doughnut data={chartData} options={options} />;
};

export default DonutChart;
