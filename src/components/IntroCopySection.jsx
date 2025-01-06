import React from "react";
import "./IntroCopySection.css";
import pic from "../assets/4.png"

const IntroCopySection = () => {
  return (
    <section className="intro-copy-section">
      <div className="intro-copy-content">
        <div className="intro-copy-image">
          <img
            src={pic}
            alt="Illustration"
          />
        </div>
        <div className="intro-copy-text">
          <h2 className="intro-copy-title">Light, Fast & Powerful</h2>
          <p className="intro-copy-description">
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

export default IntroCopySection;
