import React, { useState } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { PiButterfly } from "react-icons/pi";
import { faXmark } from '@fortawesome/free-solid-svg-icons';



const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className='menu-wrapper'>
        <div className="header-content">
          <div className="header-icons">
            <a href='https://github.com/moonlynnmelodies' className="single-icon" ><FontAwesomeIcon icon={faGithub} /></a>
            <a href='https://www.linkedin.com/in/evelyn-levina-diva/' className="single-icon" ><FontAwesomeIcon className="single-icon" icon={faLinkedin} /></a>
            <a href='https://www.instagram.com/itsmewho.e/' className="single-icon" ><FontAwesomeIcon className="single-icon" icon={faInstagram} /></a>
          </div>

          <div className="navbar" onClick={toggleMenu} >
            <PiButterfly />
          </div>

          {menuOpen&& (
            <nav className='responsive-menu'>
              <FontAwesomeIcon className="close-btn" icon={faXmark} onClick={closeMenu}/>
              <ul>
                <li><a href="#home" 
                       onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth'});
                        closeMenu();
                       }}>Home</a></li>

                <li><a href="#about" 
                       onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        closeMenu();
                       }}> About</a></li>

                <li><a href="#">Work</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          )}
        </div>
      </div>
      
    </header>
  );
};

export default Header;
