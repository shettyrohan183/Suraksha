import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSs/Nav.css'
import '../App.css';
import Logo from '../Logo/logo-suraksha.jpeg';
export default function Navigation() {
  const backgroundtext={
    color: 'linear-gradient(to bottom, #ffffff, #f5f5f5);', /* Reddish-yellow color */
    textshadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',/* Shadow with blur */
    fontweight: 'bold', /* Make the text bold */
    // color: 'red', /* Text color */
  }
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };
    const nav = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

  const handleAvatarClick = () => {
    setShowDropdown(!showDropdown); // Toggle the dropdown visibility
  };

  const handleLogoutClick = () => {
    localStorage.setItem('user',null);
        nav('/');
    // Handle logout logic here
    // For example, you can clear the user's session or token and redirect to the login page
    setShowDropdown(false); // Close the dropdown after clicking Logout
  };
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbarid">
            <div className="container" id='nav-con'>
                <Link className="navbar-brand" to="/Home">
                    <img src={Logo} id='nav-logo' alt="" width="80" height="80" />
                </Link>
                <button
                    className={`navbar-toggler ${isNavOpen ? '' : 'collapsed'}`}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={isNavOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                    onClick={toggleNav}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/incident">Incidents</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/Analytics">Analytics</Link>
                        </li>
                        

                        {/* Add more navigation links as needed */}
                    </ul>
                    
                </div>
                <div className="navbar-text text-center" style={backgroundtext} id='navbartext'>
          <h1>Welcome to Suraksha</h1>
          <p>Report an Incident, Be the Change.</p>
        </div>

                 <div className="avatar placeholder " id='nav-avatar' onClick={handleAvatarClick}>
        <div className="  bg-neutral-focus text-neutral-content rounded-full w-12  ">
          <span>AD</span>
        </div>
        
      </div>
      {showDropdown && (
        <div className="dropdown">
          <button className="btn btn-primary" id='logout-button' onClick={handleLogoutClick}>
            Logout
          </button>
        </div>
      )}
            </div>
        </nav>
    );
}
