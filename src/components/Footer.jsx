import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim() === "" || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="footer">
      <div>
        <div className="footer-logo">
          <img src="https://i.ibb.co.com/tzR6tR0/logo-footer.png" alt="" />
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Subscribe</h3>
            <p className="subscribe-sub">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="subscribe-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleSubscribe}>Subscribe</button>
            </div>
          </div>
        </div>
        <hr className="footer-separator" />
        <div className="footer-bottom">
          <p>©BPL Dream11. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
