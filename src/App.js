
import './App.css';
import {  Navigate } from 'react-router-dom';
import { useAuth } from './services/AuthProvider';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import { Route } from 'react-router-dom';
import DashBoard from './Pages/DashBoard';
import Home from './Pages/Home';
// import Incident from './Components/IncidentCard';
import IncidentPage from './Pages/IncidentPage';
import IncidentDetails from './Pages/IncidentDetails';
import { IncidentProvider } from './IncidentContext'; // Import the IncidentProvider
import { AuthProvider } from './services/AuthProvider';
import Analytics from './Pages/Analytics';
import IncidentFormPage from './Pages/IncidentFormPage';
import Navigation from './Components/Navigation';
import AnotherIncident from './Pages/AnotherIncident';
// import PrivateRoute from './PrivateRoute'; // Import the PrivateRoute component


function App() {
  const login = JSON.parse(localStorage.getItem('user'))
  console.log(login)
  return (
    
<div>

      <IncidentProvider>
        <AuthProvider>
        <Navigation/>
          <Routes>
            <Route exact path='/' Component={LoginPage} />
            {
              login !== null ?
              <>
             
              <Route exact path='/Home' Component={Home} />
            <Route exact path='/incident' Component={IncidentPage} />
            <Route exact path='/incident/:id' Component={IncidentDetails} />
            <Route exact path='/Analytics' Component={Analytics} />
            <Route exact path='/IncidentForm' Component={IncidentFormPage} />
            <Route exact path='/AnotherIncident' Component={AnotherIncident} />
              </>:
              <Route exact path='/' Component={LoginPage} />
            }
            {/* <Route exact path='/' Component={LoginPage} /> */}
          </Routes>
        </AuthProvider>
      </IncidentProvider>
    </div>
        
    
  );
}
export default App;
