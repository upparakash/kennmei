import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Get In Touch Section */}
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <p>Kennwei plays a crucial role in providing clean and safe drinking water.</p>
        </div>

        {/* Contact Details */}
        <div className="footer-section">
          <h3>Contact Details</h3>
          <p><strong>Phone:</strong></p>
          <p>74163 11333</p>
          <p>74164 11333</p>
          <p><strong>Email:</strong></p>
          <p>info@kennwei.com</p>
        </div>

        {/* Address */}
        <div className="footer-section">
          <h3>Address</h3>
          <p>VICTORYY AQUA TECHNOLOGIES</p>
          <p>8-4-24/5, Pavanpuri Colony, Champapet, Hyderabad.</p>
          <p>Telangana 500079</p>
        </div>

        {/* Follow Me Section */}
        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
