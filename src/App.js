import logo from './logo.svg';
import './App.css';
import {  Router, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import { Route } from 'react-router-dom';
import DashBoard from './Pages/DashBoard';
import Home from './Pages/Home';
import Navigation from './Components/Navigation';
// import Incident from './Components/IncidentCard';
import IncidentPage from './Pages/IncidentPage';
import IncidentDetails from './Pages/IncidentDetails';

function App() {
  return (
    
      
    <div>
      <Navigation />
    <Routes>
      <Route path='/' Component={LoginPage}/>
      <Route path='/Home' Component={Home}/>
        <Route path='/incident'  Component={IncidentPage}/>
        <Route path='/incident/:id' Component={IncidentDetails{}} />   
    </Routes>
    </div>
   
  );
}

export default App;
