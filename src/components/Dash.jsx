import React from "react";
import { useNavigate } from "react-router-dom";

import pic from "../assets/designer_1.png";
import "./Dash.css";

const Dash = ({
  title = "Assassins",
  description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
}) => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="text-block">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-description">{description}</p>
        </div>
      </div>
      <div className="hero-image">
        <img src={pic} alt="Designer" className="designer-image" />
      </div>
    </div>
  );
};

export default Dash;
