import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart1 = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Line Chart 1',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart1;
