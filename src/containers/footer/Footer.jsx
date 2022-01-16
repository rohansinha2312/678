import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="xstem3__footer section__padding">
    <div className="xstem3__footer-heading">
      <h1 className="gradient__text">
        Join us and Learn the Crucial Skills of the 21st Century.
      </h1>
    </div>
    <div className="xstem3__footer-links">
      <div className="xstem3__footer-links_logo">
        <p className="header">XSTEM</p>
      </div>
      <div className="xstem3__footer-links_div">
        <p>
          <Link to="/" style={{ color: "#FFF" }}>
            {" "}
            Home{" "}
          </Link>
        </p>
        <p>
          <Link to="/about" style={{ color: "#FFF" }}>
            {" "}
            About{" "}
          </Link>
        </p>
        <p>
          <Link to="/work" style={{ color: "#FFF" }}>
            {" "}
            Work{" "}
          </Link>
        </p>
        <p>
          <Link to="/pedagogy" style={{ color: "#FFF" }}>
            {" "}
            Pedagogy{" "}
          </Link>
        </p>
        <p>
          <Link to="/challenges" style={{ color: "#FFF" }}>
            {" "}
            Challenges{" "}
          </Link>
        </p>
        <p>
          <Link to="/gallery" style={{ color: "#FFF" }}>
            {" "}
            Gallery{" "}
          </Link>
        </p>

        <p>
          <Link to="/team"> Team </Link>
        </p>
      </div>
    </div>

    <div className="xstem3__footer-copyright">
      <p>@2022 XSTEM All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
