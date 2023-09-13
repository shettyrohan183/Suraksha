
import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function IncidentCard({ incidents }) {
  const [expandedIncident, setExpandedIncident] = useState(null);

  // Function to handle card click and expand the incident
  const handleCardClick = (incident) => {
    setExpandedIncident(incident);
  };

  // Function to close the expanded card
  const handleCloseClick = () => {
    setExpandedIncident(null);
  };

  return (
    <div className="container" id="incident-container">
      <div className="row">
        {incidents.map((incident) => (
          <div key={incident.id} className="col-md-4 mb-4">
            <div
              className="card w-96 bg-base-100 shadow-xl"
              id="incident-card"
            >

              <figure>
                <img src={incident.imageUrl} alt={incident.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {incident.title}
                  <div className="badge badge-secondary badge-outline" id="date-card">
                    {incident.date}
                  </div>
                </h2>
                <p id="incident_description">{incident.description}</p>
                <div className="card-actions" id='card-badge-readmore'>
                  <div className="card-actions justify-start">
                    <div className="badge badge-primary badge-outline">{incident.severity}</div>
                    <div className="badge badge-primary badge-outline">{incident.location}</div>
                  </div>
                  <div className='card-actions justify-end'>
                  <Link to={`/incident/${incident.id}`} className="badge badge-primary">
                      Read More
                    </Link>
                    {/* <div className="badge badge-primary" >Read More</div> */}
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IncidentCard;

