import React from "react";
import "./PricingSection.css";

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-content">
        <div className="pricing-header">
          <h2 className="pricing-title">A Price To Suit Everyone</h2>
          <p className="pricing-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
        </div>
        <div className="pricing-details">
          <span className="price">$40</span>
          <h3 className="product-title">UI Design Kit</h3>
          <p className="product-description">See, One price. Simple.</p>
          <button className="purchase-button">Purchase Now</button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
