import React from 'react';

import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Welcome to<br/> XSTEM</h1>
      <p>An entrepreneurship club incorporating STEM knowledge</p>
      <div className="gpt3__header-content__people">
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
