import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section brand">
          <h2 className="footer-logo">White</h2>
          <p>Premium fashion & lifestyle products crafted for elegance.</p>
          <div className="footer-socials">
            <span>📘</span>
            <span>📷</span>
            <span>🐦</span>
            <span>📌</span>
          </div>
        </div>

        {/* Shop Links */}
        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sale</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li>Help Center</li>
            <li>Returns & Refunds</li>
            <li>Shipping Info</li>
            <li>Track Order</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@white.com</p>
          <p>Phone: +91 77480 79615</p>
          <p>Bhopal, India</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2025 White. All rights reserved.</p>
        <ul className="footer-bottom-links">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
