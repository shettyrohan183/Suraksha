import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const IncidentContext = createContext();

export function useIncidentContext() {
  const context = useContext(IncidentContext);
  if (!context) {
    throw new Error('useIncidentContext must be used within an IncidentProvider');
  }
  return context;
}

export function IncidentProvider({ children }) {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data from your first API endpoint
        const response1 = await axios.get('http://localhost:5295/api/Incident');

        // Fetch data from your second API endpoint
        const response2 = await axios.get('http://localhost:5295/api/Incident'); // Replace with the actual URL

        // Combine the data from both responses
        const combinedData = response1.data.map((incident) => {
          // Find attachments related to this incident (you may need to adjust this logic based on your data structure)
          const attachments = response2.data.filter((attachment) => attachment.incidentId === incident.incidentId);

          // Return a combined object
          return {
            id: incident.incidentId,
            title: incident.incidentTitle,
            description: incident.incidentDetails,
            timestamp: incident.timeStamp,
            location: incident.location,
            severity: incident.severity,
            reportedBy: incident.reportedby,
            type: incident.incidentType,
            imageUrl: attachments.length > 0 ? attachments[0].imageUrl : 'https://www.alamy.com/aggregator-api/download?url=https://c8.alamy.com/comp/2GXE8WM/incident-text-written-on-red-round-vintage-rubber-stamp-2GXE8WM.jpg',
          };
        });

        // Set the combined data to the 'incidents' state
        setIncidents(combinedData);
        setLoading(false);
        console.log("this is the data ", combinedData);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error
      }
    }

    fetchData();
  }, []);

  return (
    <IncidentContext.Provider value={{ incidents, setIncidents }}>
      {children}
    </IncidentContext.Provider>
  );
}
