import '../styles/header.css'
import  { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { AiFillBackward } from "react-icons/ai";


 const Navbar = () => {

  const navigate = useNavigate();

  const onHandleNavigate = () => {
    navigate(-2);
  };

  const location = useLocation();
  const isHome = location.pathname === '/';
  const isProjectInfo = location.pathname.startsWith('/projectItem/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    console.log("Toggle mobile menu");
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = ''; 
    }
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
    closeMobileMenu();
 
  };
  
  
  return (
    <header className="header">
        <a href="#" className="logo">Daniela</a>
        {isProjectInfo && (
        <AiFillBackward className='back-icon' onClick={onHandleNavigate} />
        )}
        <div className="hamburger-icon " onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
      </div>
      
      <nav className="navbar">
      {isHome && (
        <>
          <a href="#" className="active">Home</a>
          <a href="#about-skills">About</a>
          <a href="#projects">Portfolio</a>
          <a href="#contact-me">Contact me</a>
        </>
      )}

      {isProjectInfo && (
        <>
          <Link to="/">Home</Link>
  
        </>
      )}
    </nav>
  

      <nav className={`navbar-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu">
          <span className="close-nav" onClick={closeMobileMenu}>&times;</span>
          <div className="menu-items">
            <a href="#" className="active">
              Home
            </a>
            <a href="#about-skills" onClick={() => scrollToSection('about-skills')}>
             
            About 
          </a>
          <a href="#projects" onClick={() => scrollToSection('projects')}>Portfolio</a>
            <a href="#">Contact me</a>
          </div>
        </div>
      </nav>
  

    </header>
  )
}

export default Navbar