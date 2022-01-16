import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => (
  <div className="xstem3__features-container__feature">
    <div className="xstem3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="xstem3__features-container_feature-texts">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;