import React from 'react';
import './ContactUs.css'; // Create this CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <p>Reach out to us for inquiries and information.</p>

      <div className="contact-form">
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="4"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
