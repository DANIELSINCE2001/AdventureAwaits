// components/Footer.js

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer" id="contact-us">

    <div className="footer-top">
      <div className="container">

        <div className="footer-brand">

          <a href="#" className="logo">
            <img src="./images/logo.svg" alt="AdventureAwaits logo"></img>
          </a>

          <p className="footer-text">
          Embark on a journey of a lifetime with Adventure Awaits. Our travel website is dedicated to bringing you the best in adventure travel, with in-depth guides, expert advice, and inspiring stories from around the globe. Whether you’re planning a solo expedition or a family vacation, let us help you discover the adventures that await you.
          </p>

        </div>

        <div className="footer-contact">

          <h4 className="contact-title">Contact Us</h4>

          <p className="contact-text">
            Feel free to contact and reach us !!
          </p>

          <ul>

            <li className="contact-item">
              <ion-icon name="call-outline"></ion-icon>

              <a href="tel:+918431955548" className="contact-link">+91 8431955548</a>
            </li>

            <li className="contact-item">
              <ion-icon name="mail-outline"></ion-icon>

              <a href="mailto:danielsadananda7@gmail.com" className="contact-link">adventureawaits@gmail.com</a>
            </li>

            <li className="contact-item">
              <ion-icon name="location-outline"></ion-icon>

              <address>1145/5 Ravindranagar Hassan-573201, Karnataka,India</address>
            </li>

          </ul>

        </div>

        <div className="footer-form">

          <p className="form-text">
            Subscribe our newsletter for more update & news !!
          </p>

          <form action="" className="form-wrapper">
            <input type="email" name="email" className="input-field" placeholder="Enter Your Email" required></input>

            <button type="submit" className="btn btn-secondary">Subscribe</button>
          </form>

        </div>

      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">

        <p className="copyright">
          &copy; 2024 <a href="">DanielJSadananda</a>. All rights reserved
        </p>

        <ul className="footer-bottom-list">

          <li>
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
          </li>

          <li>
            <a href="#" className="footer-bottom-link">Terms & Condition</a>
          </li>

          <li>
            <a href="#" className="footer-bottom-link">FAQ</a>
          </li>

        </ul>

      </div>
    </div>

  </footer>

  );
};

export default Footer;
