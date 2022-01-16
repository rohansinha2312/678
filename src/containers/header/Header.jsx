import React from "react";
import ai from "../../assets/ai.gif";
import "./header.css";

const Header = () => (
  <div className="xstem3__header section__padding" id="home">
    <div className="xstem3__header-content" data-tilt>
      <h1 className="gradient__text" data-tilt>
        Welcome to XSTEM
        <br />
        Join us and Explore Your Possibilites
      </h1>
      <p>An entrepreneurship club incorporating STEM knowledge</p>
      <div className="xstem3__header-content__people" data-tilt></div>
    </div>

    <div className="xstem3__header-image">
      <img src={ai} alt="not loaded" />
    </div>
    <script src="vanilla-tilt.min.js"></script>
  </div>
);
export default Header;
