import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSs/IncidentForm.css';
import { useIncidentContext } from '../IncidentContext';

function IncidentForm({ addIncident }) {
  const { incidents } = useIncidentContext();
  const [incident, setIncident] = useState({
    title: '',
    description: '',
    timestamp: '',
    location: '',
    severity: '',
    reportedBy: '',
    type: '',
    imageUrl: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uniqueId = incidents.length + 1;
    console.log(uniqueId);

    // Create a new incident object with the generated ID
    const newIncident = { ...incident, id: uniqueId };
    // addIncident(newIncident);
    // Your code for sending data to the backend
    const response = await sendFormDataToBackend(incident);

    if (response.status === 200) {
      // Data successfully updated in the backend
      // Add the new incident to the incidents array
      addIncident(newIncident);

      // Clear the form fields
      setIncident({
        title: '',
        description: '',
        timestamp: '',
        location: '',
        severity: '',
        reportedBy: '',
        type: '',
        imageUrl: '',
      });
    } else {
      // Handle errors or show an error message
      console.error('Failed to update data in the backend.');
    }
  };

  // Function to send form data to the backend
  const sendFormDataToBackend = async (formData) => {
    try {
      // Make a POST request to your backend API endpoint
      // const response = await fetch('/api/incidents', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      const response = { status: 200, message: 'Data successfully updated.' };
    return response;
      
    } catch (error) {
      console.error('Error sending data to the backend:', error);
      return null;
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // You can perform additional validation on the file if needed
      // For now, we'll assume it's an image
      const reader = new FileReader();
      reader.onload = (event) => {
        setIncident({ ...incident, imageUrl: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="incident-form-card">
      <h2>Add New Incident</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={incident.title}
            onChange={(e) =>
              setIncident({ ...incident, title: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={incident.description}
            onChange={(e) =>
              setIncident({ ...incident, description: e.target.value })
            }
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="timestamp">Timestamp:</label>
            <input
              type="datetime-local"
              id="timestamp"
              value={incident.timestamp}
              onChange={(e) =>
                setIncident({ ...incident, timestamp: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={incident.location}
              onChange={(e) =>
                setIncident({ ...incident, location: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <select
              id="type"
              value={incident.type}
              onChange={(e) =>
                setIncident({ ...incident, type: e.target.value })
              }
              required
            >
              <option value="">Select Type</option>
              <option value="Security">Security</option>
              <option value="Network">Network</option>
              <option value="Infracture">Infracture</option>
              <option value="Data">Data</option>
              <option value="Software">Softwar</option>
              <option value="Fire">Fire</option>
              <option value="Safety">Safety</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="severity">Severity:</label>
            <select
              id="severity"
              value={incident.severity}
              onChange={(e) =>
                setIncident({ ...incident, severity: e.target.value })
              }
              required
            >
              <option value="">Select Severity</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="imageUrl">Image Upload:</label>
            <input
              type="file"
              accept="image/*"
              id="imageUpload"
              onChange={handleImageUpload}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="reportedBy">Reported By:</label>
            <input
              type="text"
              id="reportedBy"
              value={incident.reportedBy}
              onChange={(e) =>
                setIncident({ ...incident, reportedBy: e.target.value })
              }
              required
            />
          </div>
        </div>
        <Link  to='/AnotherIncident' className="btn btn-wide btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg" id='AddIncident-btn' type="submit">Add Incident</Link>
      </form>
    </div>
  );
}

export default IncidentForm;
