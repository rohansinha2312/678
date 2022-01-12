import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './containers/footer/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Teamsupplier from './Teamsupplier';


function Team() {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    
    return (
        <div>
            <Navbar />
            <Teamsupplier />
            <Footer />
        </div>
    )
}

export default Team
