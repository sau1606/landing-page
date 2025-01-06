import React from "react";
import "./IntroSection.css";
import pic from "../assets/3.png";

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-content">
        <div className="intro-image">
          <img src={pic} alt="Illustration" />
        </div>
        <div className="intro-text">
          <h2 className="intro-title">Light, Fast & Powerful</h2>
          <p className="intro-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
