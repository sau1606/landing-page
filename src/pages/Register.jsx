import React, { useState } from "react";
import "./Register.css";

const Register = ({ onRegister }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    // Call the onRegister function passed from App.jsx
    onRegister({
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
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
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
