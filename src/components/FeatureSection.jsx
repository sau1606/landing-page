import React from "react";
import "./FeatureSection.css";
import pic from "../assets/fa.png";
import p from "../assets/2.png";

const FeatureSection = ({
  title = "Assassins",
  description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
  features = [
    {
      icon: pic,
      title: "Title Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    },
    {
      icon: pic,
      title: "Title Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    },
  ],
}) => {
  return (
    <section className="feature-section">
      <div className="feature-section__content">
        <div className="feature-section__text">
          <div className="feature-section__main">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <div className="feature-section__cards">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-card__icon">
                  <img src={feature.icon} alt="" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="feature-section__image">
          <img src={p} alt="Feature illustration" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
