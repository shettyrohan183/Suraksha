import React from 'react'
import { Pie } from '@nivo/pie';
export default function PieChart({incidents}) {
    const transformDataForPieChart = (data) => {
        const severityCounts = {};
      
        data.forEach((incident) => {
          const { severity } = incident;
          severityCounts[severity] = (severityCounts[severity] || 0) + 1;
        });
      
        return Object.entries(severityCounts).map(([severity, count]) => ({
          id: severity,
          label: severity,
          value: count,
        }));
      };
      const pieChartData = transformDataForPieChart(incidents);
  return (
    <div className="analytics-container">
    <div className="analytics-card">
      <h2 className="chart-title">Incident Severity Distribution</h2>
      <div className="pie-chart-container">
        <Pie
          width={400} // Adjust width as needed
          height={400} // Adjust height as needed
          data={pieChartData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          colors={{ scheme: 'set3' }} // You can change the color scheme
          borderColor={{ from: 'color', modifiers: [['darker', 0.6]] }}
          radialLabelsSkipAngle={10}
          radialLabelsTextColor="#333333"
          radialLabelsLinkColor={{ from: 'color' }}
          sliceLabelsSkipAngle={10}
          sliceLabelsTextColor="#333333"
        />
      </div>
    </div>
  </div>
  )
}
