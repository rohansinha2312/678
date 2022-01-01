import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is XSTEM" text="The X-STEM club will give South Brunswick High School Students opportunities to use their creativity, collaboration, and critical thinking skills in order to create their own companies. Through this club students will gain direct access to one-on-one mentors, MIT backed curriculum, and community of like-minded driven students in order to gather research, create prototypes, and implement their business plans to create innovative products impactful to their community." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Problem-solving" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Maintanence" text="Learn how to maintain and grow the compan" />
      <Feature title="Awards" text="Pitch your business to judges to win prestigious awards" />
    </div>
  </div>
);

export default WhatGPT3;
