import React, { useState } from 'react';
// import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLinks = (
    <>
      <a href="#podcasting" className="nav-link nav-dropdown">
        PODCASTING <span className="dropdown-arrow"></span>
      </a>
      <a href="#ai-studio" className="nav-link">AI STUDIO</a>
      <a href="#clipping" className="nav-link">CLIPPING</a>
      <a href="#case-studies" className="nav-link">CASE STUDIES</a>
    </>
  );

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        
        {/* Logo/Brand Name */}
        <div className="navbar-logo">Atomik <span style={{color: 'blue'}}>Growth</span></div>

        {/* Desktop Navigation Links */}
        <div className="navbar-desktop-links">
          {NavLinks}
        </div>

        {/* Book a Call Button (Always visible on desktop) */}
        <button className="navbar-cta-btn">BOOK A CALL</button>

        {/* Mobile Menu Button (Hamburger/X, only visible on mobile) */}
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          {/* On a real site, you'd use a hamburger icon here */}
          {isMobileMenuOpen ? 'X' : '☰'} 
        </button>
      </nav>

      {/* ------------------------------------------------------------------- */}
      {/* Mobile Menu (Image 4: The Sidebar)                                    */}
      {/* ------------------------------------------------------------------- */}
      <div className={`mobile-menu-sidebar ${isMobileMenuOpen ? 'is-open' : ''}`}>
        <button className="sidebar-cta-btn">BOOK A CALL</button>
        <button className="sidebar-close-btn" onClick={toggleMenu}>
          &times; {/* Close 'X' button */}
        </button>
        <div className="sidebar-links">
          {NavLinks}
        </div>
      </div>
    </header>
  );
};

export default Navbar;