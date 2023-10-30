import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logo.png';
import '../stylesheet/navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {windowWidth < 768 ? (
        <div className={`windows-phone ${isScrolled ? ' fixed top-0 left-0 right-0 z-50' : ''}`}>
          <div className=" h-25 relative">
            <div className='logo'>
              <h1>J.E Dental Clinic</h1>
              <p>General Dentistry|orthodontics </p>
            </div>
            <AiOutlineMenu
              className="oulineMenu "
              onClick={toggleMenu}
            />
          </div>
          {showMenu && (
            <div className=" navbar-item">
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Location</li>
                <li>Contact us </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className={`windowscreen ${isScrolled ? ' fixed top-0 left-0 right-0 z-50' : ''} flex justify-between`}>
          <div className='logo'>
            <h1>J.E Dental Clinic</h1>
            <p>General Dentistry|orthodontics </p>
          </div>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
