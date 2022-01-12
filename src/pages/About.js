import React from 'react'
import Feature from '../containers/whatGPT3/WhatGPT3';
import '../containers/features/features.css';
import '../containers/whatGPT3/whatGPT3.css';
import Navebar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function About() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    return (
       <div>
           <Navebar />
           <Feature />
          <Footer />
       </div>
        
    )
}

export default About
