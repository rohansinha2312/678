import React from 'react'
import Navebar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import Feature from '../containers/features/Features';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Work() {
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


export default Work
