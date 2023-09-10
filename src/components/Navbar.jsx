import '../styles/header.css'
import  { useState } from 'react';
import { useEffect } from 'react';



 const Navbar = () => {
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

        <div className="hamburger-icon " onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
      </div>
      
      <nav className="navbar">
  <a href="#" className="active">
    Home
  </a>
  <a href="#about-skills" onClick={() => scrollToSection('about-skills')}>
    About
  </a>
  <a href="#projects" onClick={() => scrollToSection('projects')}>
    Portfolio
  </a>
  <a href="#contact-me" onClick={() => scrollToSection('contact-me')}>
    Contact me
  </a>
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