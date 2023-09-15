

import React,  { useEffect, useState } from 'react';
import '../CSs/Home.css'; // Import your CSS file for styling
import img1 from '../Logo/Incident-Reporting.jpg';
import img2 from '../Logo/Incident-View.jpeg';
import img3 from '../Logo/Analytics.jpeg';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Carousel from '../Components/Carousel';

function Home() {
  const login = JSON.parse(localStorage.getItem('user'));
  const nav = useNavigate();


  const images = [
    '1.jpg',
    '2.png',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    
  ];
  return (
    <div>
      {
        login == null && <Navigate to="/"/>
      }
      
        <div>
          <Carousel images={images}/>
        </div>
      {/* Cards Container */}
      <div className="home-container" id='home-cards'>
          {/* Card 1 */}
      <div className="card w-96 bg-base-100 shadow-xl" id='home-card'>
        <figure className="px-10 pt-10" id='home-fig'>
          <img src={img1} alt="Shoes" className="rounded-xl" id='home-img'/>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Report Incident</h2>
          <p>In our office community, safety and well-being are a shared responsibility. If you witness anything that raises concerns, don't hesitate to report it. Together, we ensure a secure and harmonious workplace.</p>
          <div className="card-actions">
          <Link to="/IncidentForm" className="btn btn-wide btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg" id='home-btn'>Report</Link>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl" id='home-card'>
        {/* ... (Same structure as Card 1 with different content) */}
        <figure className="px-10 pt-10" id='home-fig'>
          <img src={img2} alt="Shoes" className="rounded-xl" id='home-img'/>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">View Incidents</h2>
          <p>Explore Incidents: Gain insights into our incident reports to better understand trends and ensure a safer environment for everyone</p>
          <div className="card-actions">
          <Link to='/incident' className="btn btn-wide btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg" id='home-btn'>View</Link>
          </div>
        </div>
      </div>

       {/* Card 3 */}
      <div className="card w-96 bg-base-100 shadow-xl" id='home-card'>
        {/* ... (Same structure as Card 1 with different content) */}
        <figure className="px-10 pt-10" id='home-fig'>
          <img src={img3} alt="Shoes" className="rounded-xl" id='home-img' />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">View Analytics</h2>
          <p>Unlock Insights: Dive deep into analytics to make data-driven decisions that enhance safety and productivity across our organization</p>
          <div className="card-actions">
            {/* <button className="btn btn-primary">View</button> */}
            <Link to='/Analytics' className="btn btn-wide btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg" id='home-btn'>View</Link>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;

