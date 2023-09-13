

import React from 'react';
import '../CSs/Home.css'; // Import your CSS file for styling
import img1 from '../Logo/Incident-Reporting.jpg';
import img2 from '../Logo/Incident-View.png';
import img3 from '../Logo/Analytics.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="background-image">
        {/* Text in the right bottom corner */}
        <div className="background-text">
          {/* <h1>Welcome to My App</h1>
          <p>Your app description goes here.</p> */}
        </div>
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
          <p>If a dog chews shoes whose shoes does he choose?</p>
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
          <p>If a dog chews shoes whose shoes does he choose?</p>
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
          <p>If a dog chews shoes whose shoes does he choose?</p>
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

