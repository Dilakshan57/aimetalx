import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">AI Metal X</h3>
            <p className="footer-description">
              Leading the future of metal fabrication with precision, innovation, and excellence.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/materials">Materials</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={18} />
                <span>123 Metalworks Lane, Toronto, ON, A1A 2B2
                </span>
              </li>
              <li className="footer-contact-item">
                <Phone size={18} />
                <span>+1 (647) 336-867</span>
              </li>
              <li className="footer-contact-item">
                <Mail size={18} />
                <span>theaimetalx@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Follow Us</h4>
            <div className="footer-social">
              <a href="#" className="social-link">
                <Facebook size={24} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={24} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={24} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AI Metal X. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;