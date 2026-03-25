import React from 'react';
import './Navbar.css';
import StreamVibeLogo from './StreamVibeLogo';

// PUBLIC_INTERFACE
const Navbar = ({ activePage, navigate }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'movies', label: 'Movies & Shows' },
    { id: 'support', label: 'Support' },
    { id: 'subscriptions', label: 'Subscriptions' },
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo" onClick={() => navigate('home')}>
        <StreamVibeLogo iconSize={50} showText={true} />
      </div>

      {/* Navigation Menu */}
      <div className="navbar__menu">
        {navItems.map((item) => (
          item.id === activePage ? (
            <button
              key={item.id}
              className="navbar__menu-item navbar__menu-item--active"
              onClick={() => navigate(item.id)}
            >
              {item.label}
            </button>
          ) : (
            <button
              key={item.id}
              className="navbar__menu-item navbar__menu-item--inactive"
              onClick={() => navigate(item.id)}
            >
              {item.label}
            </button>
          )
        ))}
      </div>

      {/* Right Icons */}
      <div className="navbar__icons">
        <button className="navbar__icon-btn" aria-label="Search">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="#BFBFBF" strokeWidth="2"/>
            <path d="M20 20L16.65 16.65" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <button className="navbar__icon-btn" aria-label="Notifications">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
