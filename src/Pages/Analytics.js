import React from 'react';
import { useIncidentContext } from '../IncidentContext'; // Import the context hook
import BarChart from '../Components/BarChart';
import LineChart from '../Components/LineChart';
import PieChart from '../Components/PieChart';
import '../CSs/Analytics.css'

function Analytics() {
    const { incidents } = useIncidentContext();
    
  return (
  <div className='analytics-container' id='Analytics-con'>
  <div className='chart-container' id='Ana-chart-con'>
    <BarChart incidents={incidents} />
  </div>
  <div className='chart-container' id='Ana-chart-con'>
    <LineChart incidents={incidents} />
  </div>
  <div className='chart-container' id='Ana-chart-con'>
    <PieChart incidents={incidents} />
  </div>
</div>

    // <div className='Container ' id='Analytics-con'>
    // <BarChart incidents={incidents} />
    // <LineChart incidents={incidents} />
    // <BarChart incidents={incidents} />
    // </div>
  );
}

export default Analytics;
