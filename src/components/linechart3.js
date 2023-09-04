import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart3 = () => {
  const data = {
    labels: ['Red', 'Blue', 'Green', 'Yellow', 'Orange'],
    datasets: [
      {
        label: 'Line Chart 3',
        data: [5, 10, 8, 15, 12],
        fill: false,
        borderColor: 'rgba(153, 102, 255, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart3;
