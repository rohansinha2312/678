import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Resources=()=>{
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
    return( <div>
        <Navbar />
        <h1 className="gradient__text"> <a href='https://blueoceancompetition.org/'>Conrad</a></h1>
        <h1 className="gradient__text"> <a href='https://blueoceancompetition.org/'>Blue Ocean</a></h1>


        <Footer />
    </div>)
}

export default Resources
