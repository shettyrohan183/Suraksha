import React ,{useState} from 'react'
import { useIncidentContext } from '../IncidentContext'; // Import the context hook
import IncidentForm from '../Components/IncidentForm';

export default function IncidentFormPage() {
    const { incidents, setIncidents } = useIncidentContext();

  const addIncident = (newIncident) => {
    setIncidents([...incidents, newIncident]);
  };

  return (
    <IncidentForm addIncident={addIncident} />
  )
}
