import React from 'react'
import { Line } from '@nivo/line';
import  '../CSs/Analytics.css'
export default function LineChart({incidents}) {
    const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
const currentYear = currentDate.getFullYear();

// Filter incidents for the current month and year
const incidentsThisMonth = incidents.filter((incident) => {
  const incidentDate = new Date(incident.timestamp);
  return (
    incidentDate.getMonth() + 1 === currentMonth &&
    incidentDate.getFullYear() === currentYear
  );
});

// Group incidents by date and count them
const incidentsByDate = incidentsThisMonth.reduce((acc, incident) => {
  const incidentDate = new Date(incident.timestamp).getDate();
  if (acc[incidentDate]) {
    acc[incidentDate]++;
  } else {
    acc[incidentDate] = 1;
  }
  return acc;
}, {});

const chartData = Object.keys(incidentsByDate).map((date) => ({
    x: date,
    y: incidentsByDate[date],
  }));
  return (
    <div className="analytics-container">
      <div className="analytics-card">
        <h2 className="chart-title">Incidents This Month</h2>
        <div className="line-chart-container">
        <Line
          width={600}
          height={400}
          data={[
            {
              id: 'Incidents',
              data: chartData,
            },
          ]}
          margin={{ top: 40, right: 30, bottom: 40, left: 60 }}
          xScale={{ type: 'point' }}
          xFormat="time:%d"
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Date',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Incidents',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          enableGridX={false}
          colors={{ scheme: 'nivo' }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
        />
        </div>
      </div>
    </div>
    
  );
}
