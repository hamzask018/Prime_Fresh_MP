import React from 'react';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
);

const TimeSeriesChart = ({datasets, title , options}) => {
  const data = {
    datasets: datasets
  };

  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: {
  //       position: 'top'
  //     },
  //     title: {
  //       display: true,
  //       text: title
  //     }
  //   },
  //   scales: {
  //     x: {
  //       type: 'time',
  //       time: {
  //         unit: 'day', // Can be 'day', 'month', 'year', etc. depending on data granularity
  //       },
  //       title: {
  //         display: true,
  //         text: 'Date'
  //       }
  //     },
  //     y: {
  //       title: {
  //         display: true,
  //         text: 'Price ($)'
  //       }
  //     }
  //   }
  // };

  return <Line data={data} options={options} />;
};

export default TimeSeriesChart;