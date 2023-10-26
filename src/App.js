import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/HomePage/LandingPage'
import AboutUs from './Components/HomePage/AboutUs'
import ContactUs from './Components/HomePage/ContactUs'


function App() {
  return (
    <div className="App">
      <div className="section landing">
        <LandingPage />
      </div>
      <div className="section about">
        <AboutUs />
      </div>
      <div className="section contact" style={{ backgroundColor: '#f5f5f5' }}>
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
