import React from 'react';
import { useIncidentContext } from '../IncidentContext'; // Import the context hook
import BarChart from '../Components/BarChart';
import LineChart from '../Components/LineChart';


function Analytics() {
    const { incidents } = useIncidentContext();
    
  return (
    <div>
    <BarChart incidents={incidents} />
    <LineChart incidents={incidents} />
    </div>
  );
}

export default Analytics;
