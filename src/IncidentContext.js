import React, { createContext, useContext, useState } from 'react';

const IncidentContext = createContext();

export function useIncidentContext() {
  const context = useContext(IncidentContext);
  if (!context) {
    throw new Error('useIncidentContext must be used within an IncidentProvider');
  }
  return context;
}

export function IncidentProvider({ children }) {
  const [incidents, setIncidents] = useState([

    {
      "id": 1,
      "title": "Security Breach",
      "description": "Unauthorized access to sensitive data.",
      "timestamp": "2023-09-10 14:30:00",
      "location": "Office Building A",
      "severity": "High",
      "reportedBy": "John Doe",
      "type": "Security",
      "imageUrl": "https://th.bing.com/th/id/OIP.8W1-m6WmRFIL37q5FVyNwwHaEK?pid=ImgDet&rs=1",
    },
    {
      "id": 2,
      "title": "Network Outage",
      "description": "Complete network outage affecting all departments.",
      "timestamp": "2023-09-08 09:45:00",
      "location": "Data Center",
      "severity": "Medium",
      "reportedBy": "Alice Smith",
      "type": "Network",
      "imageUrl": "https://th.bing.com/th/id/OIP.8W1-m6WmRFIL37q5FVyNwwHaEK?pid=ImgDet&rs=1",
        },
    {
      "id": 3,
      "title": "Power Failure",
      "description": "Power outage in the main data center.",
      "timestamp": "2023-09-05 11:15:00",
      "location": "Data Center",
      "severity": "Low",
      "reportedBy": "Bob Johnson",
      "type": "Infrastructure",
      "imageUrl": "https://th.bing.com/th/id/OIP.8W1-m6WmRFIL37q5FVyNwwHaEK?pid=ImgDet&rs=1",
    },
    {
      "id": 4,
      "title": "Server Crash",
      "description": "Critical server failure impacting online services.",
      "timestamp": "2023-09-03 16:20:00",
      "location": "Data Center",
      "severity": "High",
      "reportedBy": "Eva Martinez",
      "type": "Infrastructure",
      "imageUrl": "https://th.bing.com/th/id/OIP.8W1-m6WmRFIL37q5FVyNwwHaEK?pid=ImgDet&rs=1",
    },
    {
      "id": 5,
      "title": "Data Loss",
      "description": "Irrecoverable data loss incident.",
      "timestamp": "2023-08-30 13:50:00",
      "location": "Data Center",
      "severity": "High",
      "reportedBy": "David Wilson",
      "type": "Data",
      "imageUrl": "https://th.bing.com/th/id/OIP.8W1-m6WmRFIL37q5FVyNwwHaEK?pid=ImgDet&rs=1",
    },
    {
      "id": 6,
      "title": "Fire Alarm",
      "description": "Fire alarm triggered in the office building.",
      "timestamp": "2023-08-25 10:05:00",
      "location": "Office Building A",
      "severity": "Medium",
      "reportedBy": "Mia Lee",
      "type": "Safety",
      "imageUrl": "https://th.bing.com/th/id/OIP.8W1-m6WmRFIL37q5FVyNwwHaEK?pid=ImgDet&rs=1",
     },
    {
      "id": 7,
      "title": "Software Bug",
      "description": "Critical software bug causing system crashes.",
      "timestamp": "2023-08-20 15:30:00",
      "location": "Development Area",
      "severity": "High",
      "reportedBy": "Sam Carter",
      "type": "Software",
      "imageUrl": "https://th.bing.com/th/id/OIP.8W1-m6WmRFIL37q5FVyNwwHaEK?pid=ImgDet&rs=1",
    },
    {
      "id": 8,
      "title": "Water Leak",
      "description": "Water leak detected in the server room.",
      "timestamp": "2023-08-15 08:40:00",
      "location": "Data Center",
      "severity": "Medium",
      "reportedBy": "Sophia Brown",
      "type": "Infrastructure",
      "imageUrl": "https://th.bing.com/th/id/OIP.8W1-m6WmRFIL37q5FVyNwwHaEK?pid=ImgDet&rs=1",
    },
    {
      "id": 9,
      "title": "Phishing Attempt",
      "description": "Phishing attempt targeting company emails.",
      "timestamp": "2023-08-10 12:55:00",
      "location": "Remote",
      "severity": "Low",
      "reportedBy": "Daniel Smith",
      "type": "Security",
      "imageUrl": "https://th.bing.com/th/id/OIP.8W1-m6WmRFIL37q5FVyNwwHaEK?pid=ImgDet&rs=1",
    },
    {
      "id": 10,
      "title": "Website Outage",
      "description": "Website outage affecting customer access.",
      "timestamp": "2023-08-05 17:10:00",
      "location": "Data Center",
      "severity": "Medium",
      "reportedBy": "Olivia Taylor",
      "type": "Network",
      "imageUrl": "https://th.bing.com/th/id/OIP.8W1-m6WmRFIL37q5FVyNwwHaEK?pid=ImgDet&rs=1",
    }


  ]);

  return (
    <IncidentContext.Provider value={{ incidents, setIncidents }}>
      {children}
    </IncidentContext.Provider>
  );
}
