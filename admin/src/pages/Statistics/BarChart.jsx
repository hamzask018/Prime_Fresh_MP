import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = ({ datasets , options }) => {
  // Prepare the data for the chart
  const chartData = {
    labels: datasets.map(item => item.label), // Extract labels
    datasets: [
      {
        label: 'Dataset 1',
        data: datasets.map(item => item.value), // Extract values
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)', // Border color
        borderWidth: 1,
      },
    ],
  };
  
  return <Bar data={chartData} options={options} />;
};

export default BarChart;
