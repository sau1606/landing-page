import React, { useState } from "react";
import "./LoginSection.css";
import g from "../assets/g.png";
import f from "../assets/f.png";
import a from "../assets/a.png";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    // Call the login function
    onLogin({
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Assassins</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          <div className="input-group">
            <label htmlFor="email">Email or Phone</label>
            <input
              type="text"
              id="email"
              placeholder="Enter email or phone"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <div className="divider">
          <span className="divider-line"></span>
          <span className="divider-text">Or</span>
          <span className="divider-line"></span>
        </div>
        <div className="social-buttons">
          <button type="button" className="google-button">
            Google
          </button>
          <button type="button" className="apple-button">
            Apple
          </button>
          <button type="button" className="facebook-button">
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
