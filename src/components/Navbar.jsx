import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ logo = "Landing", isSignedIn = false, onLogout }) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (isSignedIn) {
      // Perform the logout action
      if (onLogout) {
        onLogout(); // Call the passed logout function
      }
      navigate("/"); // Redirect to homepage or login page
    } else {
      navigate("/login"); // Navigate to login page if not signed in
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">{logo}</div>
      <div className="nav-links">
        <a href="/" className="nav-link">
          Home
        </a>
        <a href="/about" className="nav-link">
          About
        </a>
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </div>
      <button className="get-started-btn" onClick={handleGetStarted}>
        {isSignedIn ? "Logout" : "Get Started"}
      </button>
    </nav>
  );
};

export default Navbar;
