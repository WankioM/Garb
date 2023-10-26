import React from 'react';
import './AboutUs.css'; // Create this CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>WE ARE THE NJERI'S</h2>
      <p>Your trusted partner in sustainable waste management and efficiency.</p>

      <div className="key-points">
        <div className="key-point">
          <div className="circle">
          <img src="https://svgsilh.com/svg/36103.svg" alt="Icon" style={{ maxWidth: '100%', maxHeight: '100%' }}/>
          </div>
          <h3>Waste Management</h3>
          <p>Efficient and eco-friendly waste solutions for a greener future.</p>
        </div>

        <div className="key-point">
          <div className="circle">
            {/* Logo for 'Efficiency' */}
            <img src="https://svgsilh.com/svg/36103.svg" alt="Icon" style={{ maxWidth: '100%', maxHeight: '100%' }}/>
          </div>
          <h3>Efficiency</h3>
          <p>Streamlined processes for optimal waste collection and disposal.</p>
        </div>

        <div className="key-point">
          <div className="circle">
            {/* Logo for another point */}
          </div>
          <h3>...</h3>
          <p>...</p>
        </div>

        <div className="key-point">
          <div className="circle">
            {/* Logo for another point */}
          </div>
          <h3>...</h3>
          <p>...</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
