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

const DonutChart = ({ data }) => {
  // Prepare the data for the chart
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: data.map(item => item.backgroundColor), // Dynamic color
        hoverBackgroundColor: data.map(item => item.hoverBackgroundColor),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            label += context.raw;
            return label;
          },
        },
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
};

export default DonutChart;
