
import React from 'react';
import { useParams } from 'react-router-dom';
import { useIncidentContext } from '../IncidentContext'; // Import the context hook
import { Link } from 'react-router-dom';
import '../App.css';
import '../CSs/IncDetail.css'; 

function IncidentDetails() {
  const { id } = useParams(); // Get the incident ID from the route parameter
  const { incidents } = useIncidentContext(); // Access the incidents data from the context

  // Find the incident with the matching ID
  const incident = incidents.find((item) => item.id === parseInt(id));

  if (!incident) {
    // Handle the case where the incident is not found
    return <div>Incident not found.</div>;
  }

  return (
    <div className="container" id="incident-details-container">
      <div className="card w-70 bg-base-100 shadow-xl" id="expanded-card">
        <figure>
          <img src={incident.imageUrl} alt={incident.title} id="Incident-details-img" />
        </figure>
        <div className="card-body">
        <div className="card-actions justify-between">
          <h2 className="card-title"> Incident Title :{incident.title}</h2>
          <h2 className="card-title"> Reported By :{incident.reportedBy}</h2>
          </div>
          <div className="card-actions justify-between">
          <p id="expanded-description">{incident.description}</p>
          <h2 className="card-title"> Time and Date:{incident.timestamp}</h2>
          </div>
          <div className="card-actions justify-start">
            <div className="badge badge-primary badge-outline">
             Priority : {incident.severity}
            </div>
            <div className="badge badge-primary badge-outline">
              Location : {incident.location}
            </div>
            <div className="badge badge-primary badge-outline">
              Type : {incident.type}
            </div>
          </div>
          <div id='IncBut-div'>
          <Link className="btn btn-wide btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg" id='home-btn'to='/incident'>
            Close
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncidentDetails;
