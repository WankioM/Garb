import React from 'react';
import './Header.css'; 
import logo from '../../Assets/logo.png';


const Header = () => {
  return (
    <header className="header">
      
      <div className="logo">
      <img src="https://logowik.com/content/uploads/images/nature-energy-park1376.logowik.com.webp" alt="Icon" style={{ maxWidth: '100%', maxHeight: '100%' }}/>
      </div>

      <div className="menu">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Sign In</li>
          </ul>
        </nav>
      </div>
      
    </header>
  );
};

export default Header;
