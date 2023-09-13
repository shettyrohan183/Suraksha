import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSs/Nav.css'
import '../App.css';
import Logo from '../Logo/logo-suraksha.jpeg'
export default function Navigation() {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} id='nav-logo' alt="" width="50" height="50" />
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
                            <Link className="nav-link" to="/">Abous us</Link>
                        </li>

                        {/* Add more navigation links as needed */}
                    </ul>
                </div>

                <div className="avatar placeholder" id='nav-avatar'>
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                        <span>MX</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
