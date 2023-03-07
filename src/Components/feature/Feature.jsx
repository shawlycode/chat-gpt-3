import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
  return (
    <>
      <div className="feature-container">
        <div className="line-bar"></div>
        <div className="feature-title">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="feature-text">
        <p>{text}</p>
      </div>
    </>
  );
};

export default Feature;
