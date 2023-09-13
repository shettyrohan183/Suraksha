
import React , {useSelector} from 'react';
import { useParams, Link } from 'react-router-dom';
// import IncidentDetailCard from '../Components/IncidentDetailCard';
function IncidentDetails({ incidents }) {
    console.log();
    console.log("This is incident detials page ");
  const { id } = useParams();

  // Find the incident with the matching 'id' parameter
  const incident =  incidents.find((incident) => incident.id === id);
  console.log(incident);
  
    // Handle the case when the incident with the specified ID is not found
    return (
    <div className="container" id="incident-details-container">
      <h1>Incident Details</h1>
      <div className="card w-96 bg-base-100 shadow-xl" id="expanded-card">
        <figure>
          <img src={incident.imageUrl} alt={incident.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{incident.title}</h2>
          <p>Description: {incident.description}</p>
          <p>ID: {incident.id}</p>
          <p>Location: {incident.location}</p>
          {/* <p>Reported by: {incident.reportedBy}</p> */}
          {/* Add more details as needed */}
          <Link to="/" className="btn btn-link">
            Back to Incidents
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IncidentDetails;
