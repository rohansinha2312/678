import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Join us and Learn the Crucial Skills of the 21st Century.</h1>
    </div>
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
      </div>
      <div className="gpt3__footer-links_div">
      <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About</a></p>
          <p><a href="#possibility">Pedagogy</a></p>
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
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>
        <a href="https://mahitm.com" target="_blank" rel="noreferrer noopener">@</a>
        2022 XSTEM All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
