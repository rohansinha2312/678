import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Join us and Learn the Crucial Skills of the 21st Century.</h1>
    </div>
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <p className="header">XSTEM</p>
      </div>
      <div className="gpt3__footer-links_div">
      <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About</a></p>
          <p><a href="#possibility">Club</a></p>
          <p><a href="#features">Work</a></p>
          <p><a href="#blog">Challenges</a></p>
          <p>
            <a 
              rel="noreferrer noopener" 
              target="_blank" 
              href="https://docs.google.com/document/d/17rIfdVM2UBkeNNcickJoBA93nrm3aPcJtreZE4uk5PE/edit?usp=sharing"
            >
              Gallery
            </a>
          </p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>
        @2022 XSTEM All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
