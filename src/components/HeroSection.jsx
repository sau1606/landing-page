import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import pic from "../assets/designer_1.png";

const HeroSection = ({
  title = "Assassins",
  description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
  onSignUp = () => {},
}) => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="text-block">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-description">{description}</p>
          <div className="button-group">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
            <button className="btn btn-secondary" onClick={onSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={pic} alt="Designer" className="designer-image" />
      </div>
    </div>
  );
};

export default HeroSection;
