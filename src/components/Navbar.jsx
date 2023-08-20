import '../styles/header.css'
import  { useState } from 'react';

 const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    console.log("Toggle mobile menu");
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact me</a>
      </nav>
  

      <nav className={`navbar-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu">
          <span className="close" onClick={closeMobileMenu}>&times;</span>
          <div className="menu-items">
            <a href="#" className="active">
              Home
            </a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact me</a>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Navbar