import React, { useState } from 'react'

export default function DashBoard() {
    const  [incident, setIncidents]  = useState([
      {
        "id": 1,
        "title": "Security Breach",
        "description": "Unauthorized access to sensitive data.",
        "date": "2023-09-10",
        "location": "Office Building A",
        "severity": "High"
      },
      {
        "id": 2,
        "title": "Network Outage",
        "description": "Complete network outage affecting all departments.",
        "date": "2023-09-08",
        "location": "Data Center",
        "severity": "Medium"
      },
      {
        "id": 3,
        "title": "Power Failure",
        "description": "Power outage in the main data center.",
        "date": "2023-09-05",
        "location": "Data Center",
        "severity": "Low"
      }
    ]);
    
  return (
    <div className='container mt-5'>
      <h2>DashBoard</h2>
      <div className='row'>
        <div className='col-md-8'>
          <h3>incident List</h3>
          <ul className='list-groupo'>
            {incident.map((incident)=>(
              <li key={incident.id} className='list-group-item'>
                <strong>title:</strong>{incident.title}<br/>
                <strong>Description</strong>{incident.description}<br/>
                <strong>Location :</strong>{incident.location}<br/>
                <strong>Time </strong>{incident.date}<br/>
                <strong>Severity :</strong>{incident.severity}<br/>
              </li>
            )
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
