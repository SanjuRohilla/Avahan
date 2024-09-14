import React from 'react';
import './ContactPage.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-heading">संपर्क करें</h1>
      <div className="contact-box">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span><strong>ईमेल:</strong> contact@yourcompany.com</span>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span><strong>फोन:</strong> +1 (123) 456-7890</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span><strong>पता:</strong> ग्रेट ईस्टर्न रोड, अमनाका, एनआईटी रायपुर</span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
