import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05, blog06, blog07, blog08, blog09} from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Here are, <br /> our challenges.</h1>
    </div>
    <div className="gpt3__blog-container">
      {/* <div className="gpt3__blog-container_groupA">
      <Article imgUrl={blog01} date="Jan 7, 2022" text="Diamond Challenge" />
      </div> */}
      <div className="gpt3__blog-container_groupB">
        <Article href="https://www.conradchallenge.org/conrad-challenge" imgUrl={blog02} date="Nov 5, 2022" text="Conrad Challenge" /> 
        <Article href="https://blueoceancompetition.org/" imgUrl={blog03} date="Feb 8, 2022" text="Blue Ocean" />
        <Article href="https://www.nfte.com/fall-2021-nfte-world-series-of-innovation/" imgUrl={blog04} date="Dec 15, 2022" text="NFTE World Series of Innovation" />
        <Article href="https://www.projectparadigm.org/#" imgUrl={blog05} date="May 1, 2022" text="Paradigm Challenge (age restriction)" />
        <Article href="https://technovationchallenge.org/get-started/" imgUrl={blog06} date="Mar 25, 2022" text="Technovation Challange (Girls Only)" />
        <Article href="https://www.cooperhewitt.org/national-design-awards/national-design-awards-submission-guidelines/#:~:text=Submission%20Deadline,11%3A59%20p.m.%20Eastern%20Time." imgUrl={blog07} date="Feb 22, 2022" text="Cooper Hewitt" />
        <Article href="https://www.google.com/url?q=https://diamondchallenge.org/summit/&sa=D&source=editors&ust=1641028739470951&usg=AOvVaw3ll6klLUQRTiC0rbYIyW0R" imgUrl={blog08} date="Jan 17, 2022" text="Diamond Challenge" />
        <Article href="https://www.businessbootcamp101.org/pitchnj-1" imgUrl={blog09} date="Jan 1, 2022" text="Pitch NJ" />
      </div>
    </div>
  </div>
);

export default Blog;
