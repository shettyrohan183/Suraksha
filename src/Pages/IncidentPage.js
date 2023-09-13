import React from 'react';
import { useState } from 'react';
import IncidentCard from '../Components/IncidentCard';
import '../App.css';
import { useIncidentContext } from '../IncidentContext'; // Import the hook


export default function IncidentPage() {
    const { incidents } = useIncidentContext();
    // const [incidents, setIncidents] = useState([
    //     {
    //         "id": 1,
    //         "title": "Security Breach",
    //         "description": "Unauthorized access to sensitive data.",
    //         "date": "2023-09-10",
    //         "location": "Office Building A",
    //         "severity": "High",
    //         "imageUrl": "https://th.bing.com/th/id/R.7f34a70a5bee79488309934920d316cb?rik=IRJI6pSFo6OI%2fQ&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2018%2f03%2fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg&ehk=JPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%3d&risl=&pid=ImgRaw&r=0"
    //     },
    //     {
    //         "id": 2,
    //         "title": "Network Outage",
    //         "description": "Complete network outage affecting all departments.",
    //         "date": "2023-09-08",
    //         "location": "Data Center",
    //         "severity": "Medium",
    //         "imageUrl": "https://th.bing.com/th/id/R.7f34a70a5bee79488309934920d316cb?rik=IRJI6pSFo6OI%2fQ&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2018%2f03%2fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg&ehk=JPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%3d&risl=&pid=ImgRaw&r=0",
    //     },
    //     {
    //         "id": 4,
    //         "title": "Power Failure",
    //         "description": "Power outage in the main data center.",
    //         "date": "2023-09-05",
    //         "location": "Data Center",
    //         "severity": "Low",
    //         "imageUrl": "https://th.bing.com/th/id/R.7f34a70a5bee79488309934920d316cb?rik=IRJI6pSFo6OI%2fQ&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2018%2f03%2fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg&ehk=JPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%3d&risl=&pid=ImgRaw&r=0",
    //     },
    //     {
    //         "id": 5,
    //         "title": "Power Failure",
    //         "description": "Power outage in the main data center.",
    //         "date": "2023-09-05",
    //         "location": "Data Center",
    //         "severity": "Low",
    //         "imageUrl": "https://th.bing.com/th/id/R.7f34a70a5bee79488309934920d316cb?rik=IRJI6pSFo6OI%2fQ&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2018%2f03%2fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg&ehk=JPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%3d&risl=&pid=ImgRaw&r=0",
    //     },
    //     {
    //         "id": 6,
    //         "title": "Power Failure",
    //         "description": "Power outage in the main data center.",
    //         "date": "2023-09-05",
    //         "location": "Data Center",
    //         "severity": "Low",
    //         "imageUrl": "https://th.bing.com/th/id/R.7f34a70a5bee79488309934920d316cb?rik=IRJI6pSFo6OI%2fQ&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2018%2f03%2fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg&ehk=JPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%3d&risl=&pid=ImgRaw&r=0",
    //     }
    // ]);


    return (
        <div>
        <IncidentCard incidents={incidents}/>
        </div>
        
    )
}
