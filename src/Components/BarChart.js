import React from 'react'
import { Bar } from '@nivo/bar';
export default function BarChart({incidents}) {
    const incidentTypesCount = incidents.reduce((acc, incident) => {
        const { type } = incident;
        if (acc[type]) {
          acc[type]++;
        } else {
          acc[type] = 1;
        }
        return acc;
      }, {});
      const chartData = Object.keys(incidentTypesCount).map((type) => ({
        id: type,
        value: incidentTypesCount[type],
      }));
  return (
    <div className="analytics-container">
      <div className="analytics-card">
        <h2 className="chart-title">Incidents This Month</h2>
        <div className="line-chart-container">
        <Bar
        width={600}
        height={400}
        data={chartData}
        keys={['value']}
        indexBy="id"
        margin={{ top: 40, right: 30, bottom: 40, left: 60 }}
        padding={0.2}
        colors={{ scheme: 'nivo' }}
        enableGridX={false}
        enableGridY={true}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
      />
        </div>
      </div>
    </div>
    
  )
}
