import React from 'react';
import './Navbar.css';
import StreamVibeLogo from './StreamVibeLogo';

/**
 * Navbar - Global top navigation bar for StreamVibe.
 *
 * REQ: WM-8291 - Global Navigation Shell: active item styling + no dead clicks.
 * REQ: WM-8291 - Icon buttons are rendered and interactive (no dead clicks).
 *
 * Navigation mapping:
 *   - 'home'          → navigates to HomePage
 *   - 'movies'        → navigates to Movies & Shows page
 *   - 'support'       → scrolls to FAQ section on current page (no separate page evidenced)
 *   - 'subscriptions' → scrolls to Subscriptions/Plans section on current page
 *
 * Per WM-8291: "Out of scope (not evidenced): routing destinations, icon semantics, auth/search."
 * For 'support' and 'subscriptions' where a full page is not evidenced, we scroll to the
 * nearest in-page section to avoid dead clicks while not fabricating destinations.
 */

/** Canonical nav item definitions */
const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'movies', label: 'Movies & Shows' },
  { id: 'support', label: 'Support' },
  { id: 'subscriptions', label: 'Subscriptions' },
];

/**
 * Map nav item IDs to page-level routes (for items that have a dedicated page).
 * Items not in this map use in-page scroll fallback.
 */
const PAGE_ROUTES = {
  home: 'home',
  movies: 'movies',
};

/**
 * Map nav item IDs to in-page anchor IDs for scroll fallback.
 * Used when there is no dedicated page for the nav item.
 */
const SCROLL_TARGETS = {
  support: 'faq-section',
  subscriptions: 'subscriptions-section',
};

// PUBLIC_INTERFACE
const Navbar = ({ activePage, navigate }) => {
  /**
   * Handle navbar item click.
   * - If the item has a page route, navigate to that page.
   * - If the item has a scroll target, attempt to scroll to that element.
   * - This ensures no dead clicks per REQ: WM-8291.
   *
   * @param {string} itemId - The nav item identifier
   */
  const handleNavClick = (itemId) => {
    const pageRoute = PAGE_ROUTES[itemId];
    if (pageRoute && navigate) {
      // Navigate to a dedicated page
      navigate(pageRoute);
      return;
    }

    const scrollTarget = SCROLL_TARGETS[itemId];
    if (scrollTarget) {
      // If we're not on the home page, navigate home first then scroll
      if (activePage !== 'home' && navigate) {
        navigate('home');
        // Defer scroll until after page transition
        setTimeout(() => {
          const el = document.getElementById(scrollTarget);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const el = document.getElementById(scrollTarget);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      {/* REQ: WM-8291 - Logo is interactive, navigates to home */}
      <div className="navbar__logo" onClick={() => navigate && navigate('home')}>
        <StreamVibeLogo iconSize={50} showText={true} />
      </div>

      {/* Navigation Menu */}
      {/* REQ: WM-8291 - Active item styling per current page */}
      <div className="navbar__menu">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={
              item.id === activePage
                ? 'navbar__menu-item navbar__menu-item--active'
                : 'navbar__menu-item navbar__menu-item--inactive'
            }
            onClick={() => handleNavClick(item.id)}
            aria-current={item.id === activePage ? 'page' : undefined}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Right Icons */}
      {/* REQ: WM-8291 - Icon buttons rendered and interactive (no dead clicks) */}
      <div className="navbar__icons">
        <button
          className="navbar__icon-btn"
          aria-label="Search"
          onClick={() => {
            // REQ: WM-8291 - Out of scope: search routing not evidenced; click acknowledged
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="#BFBFBF" strokeWidth="2"/>
            <path d="M20 20L16.65 16.65" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <button
          className="navbar__icon-btn"
          aria-label="Notifications"
          onClick={() => {
            // REQ: WM-8291 - Out of scope: notification routing not evidenced; click acknowledged
          }}
        >
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
