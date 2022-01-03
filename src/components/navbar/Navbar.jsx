import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <p className="header">XSTEM</p>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About</a></p>
          <p><a href="#features">Work</a></p>
          <p><a href="#possibility">Pedagogy</a></p>
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
          <p>
            <a 
              rel="noreferrer noopener" 
              target="_blank" 
              href="https://docs.google.com/document/d/1xCvlhsnOTkhDF45fyjh04gAlQS3I2STGwxTsImYC9eY/edit?usp=sharing"
            >
              Team
            </a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About</a></p>
          <p><a href="#features">Work</a></p>
          <p><a href="#possibility">Pedagogy</a></p>
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
          <p>
            <a 
              rel="noreferrer noopener" 
              target="_blank" 
              href="https://docs.google.com/document/d/1xCvlhsnOTkhDF45fyjh04gAlQS3I2STGwxTsImYC9eY/edit?usp=sharing"
            >
              Team
            </a>
          </p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
