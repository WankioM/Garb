import React, { useState, useEffect } from 'react';
import Header from '../Header/Header'; // Import the Header component
import './LandingPage.css'; // You can create this CSS file for styling

const LandingPage = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['CLEAN', 'GREEN', 'SUSTAINABLE'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
    }, 3000); // Rotate words every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="landing-page">
      <Header />
      <div className="image-container">
      <div class="top">
        <div className="rotating-words">
          {words.map((word, index) => (
            <span
              key={index}
              className={`rotating-word ${index === currentWord ? 'active' : ''}`}
            >
              {word}
            </span>
          ))}

          </div>

        
            
        
        
        </div>
        <div class="para">
                <p>Nurturing Nature Through Responsible Waste Management</p>
         </div>

        <div class="bottom">
        <button className="contact-button">Contact Us</button>
        </div>
      </div>
      
    </div>
  );
};

export default LandingPage;
