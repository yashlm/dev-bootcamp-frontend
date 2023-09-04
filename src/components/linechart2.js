import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart2 = () => {
  const data = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        label: 'Line Chart 2',
        data: [10, 5, 15, 8, 12],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart2;
