import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <p className="copyright">©2023 Assassins</p>
          <Link to="/" className="landing">
            Landing{" "}
          </Link>
          <button className="purchase-button">Purchase now</button>
        </div>
        <div className="footer-line"></div>
      </div>
    </footer>
  );
};

export default Footer;
