import React from "react";
import "./CallToAction.css";
import pic from "../assets/5.png"

const CallToAction = ({
  title = "Light, Fast & Powerful",
  description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
  buttonText = "Purchase Now",
  imageSrc = pic,
}) => {
  return (
    <div className="cta-container">
      <div className="cta-content">
        <div className="cta-image">
          <img src={imageSrc} alt="Illustration" />
        </div>
        <div className="cta-text-block">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-description">{description}</p>
          <button className="cta-button">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
