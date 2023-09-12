import logo from './logo.svg';
import './App.css';
import {  Router, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import { Route } from 'react-router-dom';
import DashBoard from './Pages/DashBoard';
import Home from './Pages/Home';
import Navigation from './Components/Navigation';

function App() {
  return (
    
      
    <div>
      <Navigation />
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='login' Component={LoginPage}/>
        <Route path='/dashboard' Component={DashBoard}/>   
    </Routes>
    </div>
   
  );
}

export default App;
