// Footer.js

import React from 'react';
import '../CSs/Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="text-center text-muted copyright">
          &copy; {new Date().getFullYear()} Team Spartans @ Shell. All rights reserved.
        </div>
      </div>
    </footer>
  
  );
};

export default Footer;
