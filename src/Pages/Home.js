import React from 'react';
import '../CSs/Home.css'; // Import your CSS file for styling
import img1 from '../Logo/Incident-Reporting.jpg';



function Home() {
  return (
    <div className="home-container" id='home-cards'>
      {/* Card 1 */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10" id='home-fig'>
          <img src={img1} alt="Shoes" className="rounded-xl" id='home-img'/>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Report Incident</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
          <button className="btn btn-wide btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">Report</button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card w-96 bg-base-100 shadow-xl">
        {/* ... (Same structure as Card 1 with different content) */}
        <figure className="px-10 pt-10" id='home-fig'>
          <img src={img1} alt="Shoes" className="rounded-xl" id='home-img'/>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">View Incidents</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
          <button className="btn btn-wide btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">View</button>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card w-96 bg-base-100 shadow-xl" id='home-card'>
        {/* ... (Same structure as Card 1 with different content) */}
        <figure className="px-10 pt-10" id='home-fig'>
          <img src={img1} alt="Shoes" className="rounded-xl" id='home-img' />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">View Analytics</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            {/* <button className="btn btn-primary">View</button> */}
            <button className="btn btn-wide btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">View</button>

          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Home;

 
