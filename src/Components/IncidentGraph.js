import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Number of Incidents',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxis: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Incident Statistics</h2>
      <div style={{ height: '400px', width: '600px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
