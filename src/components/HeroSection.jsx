import React, { useState, useEffect } from 'react';
import videohero from '../assets/hero1.mp4';
import '../stylesheet/herosection.css';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [videoHeight, setVideoHeight] = useState(isMobile ? '100px' : '90vh');

  useEffect(() => {
    const handleResize = () => {
      const isMobileNow = window.innerWidth < 768;
      setIsMobile(isMobileNow);
      setVideoHeight(isMobileNow ? '100px' : '90vh');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`relative ${isMobile ? 'top-100' : ''}`}>
      <div className="video-hero" style={{ height: videoHeight }}>
        <video autoPlay loop muted src={videohero}></video>
      </div>
      <div className="hero-Content ">
        <h1>Welcome to <span>J.e Dental clinic</span></h1>
        <p >Discover the best services we offer</p>
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Book Now</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
