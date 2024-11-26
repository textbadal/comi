// src/pages/ContactUs.js
import React from 'react';
import './ContactUs.css';
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Get in Touch</h1>
      <p>
        We’d love to hear from you! Whether you have questions, feedback, or need assistance,
        don’t hesitate to reach out. Our team is here to help.
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope size={24} />
          <span>Email: <a href="mailto:support@interncourse.online">support@interncourse.online</a></span>
        </div>
        <div className="contact-item">
          <FaPhoneAlt size={24} />
          <span>Phone: <a href="tel:+91 93042 45362">+91 93042 45362</a></span>
        </div>
        <div className="contact-item">
          <FaPhoneAlt size={24} />
          <span>Phone: <a href="tel:+91 97710 41512">+91 97710 41512</a></span>
        </div>
        <div className="contact-item">
          <FaPhoneAlt size={24} />
          <span>Phone: <a href="tel:+91 97716 80721">+91 97716 80721</a></span>
        </div>
        <div className="contact-item">
          <FaPhoneAlt size={24} />
          <span>Phone: <a href="tel:+91 70610 18297">+91 70610 18297</a></span>
        </div>
      </div>

      <h2>Or send us a message</h2>
      <form className="contact-form">
        <label>Name</label>
        <input type="text" placeholder="Your Name" />

        <label>Email</label>
        <input type="email" placeholder="Your Email" />

        <label>Message</label>
        <textarea placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="social-media">
        <p>Connect with us on social media:</p>
        <div className="social-icons">
        <a href="https://x.com/07InternCourse" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-twitter"></i> 
        </a>
        <a href="https://www.instagram.com/interncourse/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-facebook"></i> 
        </a>
        <a href="https://www.linkedin.com/in/interncourse/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin"></i> 
        </a>
        <a href="https://www.instagram.com/interncourse/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-instagram"></i>  
        </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
