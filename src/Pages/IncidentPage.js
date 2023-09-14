import React from 'react';
import { useState } from 'react';
import IncidentCard from '../Components/IncidentCard';
import '../App.css';
import { useIncidentContext } from '../IncidentContext'; // Import the hook
import { Navigate, useNavigate } from 'react-router-dom';


export default function IncidentPage() {
    const { incidents } = useIncidentContext();

    const login = JSON.parse(localStorage.getItem('user'));
    const nav = useNavigate();
    
    return (
      <div>
        {
          login == null && <Navigate to="/"/>
        }
        <IncidentCard incidents={incidents}/>
        </div>
        
    )
}
