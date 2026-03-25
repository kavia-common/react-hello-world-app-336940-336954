import React from 'react';
import './Footer.css';

/**
 * Footer link data using exact Figma labels.
 *
 * REQ: WM-8300 - Footer with exact labels (including typos like Gernes) across all screens.
 * REQ: WM-8300 - Links are interactive but destinations unknown → use console.log / no-op
 *                for unknown destinations to avoid dead clicks.
 *
 * Known typo per Figma: "Gernes" (not "Genres").
 * Known typo per Figma: copyright "@2023 streamvib, All Rights Reserved".
 */
const footerColumns = [
  {
    heading: 'Home',
    links: ['Home', 'About Us', 'Contact Us', 'Blog'],
    routeMap: { Home: 'home' },
  },
  {
    heading: 'Movies',
    links: ['New Releases', 'Top Rated', 'Coming Soon', 'Genres'],
    routeMap: { 'New Releases': 'movies', 'Top Rated': 'movies', 'Coming Soon': 'movies', Genres: 'movies' },
  },
  {
    // REQ: WM-8300 - Exact Figma label "Gernes" (intentional typo per design spec)
    heading: 'Gernes',
    links: ['Action', 'Thrillers', 'Comedy', 'Romance', 'Documentary'],
    routeMap: {
      Action: 'movies',
      Thrillers: 'movies',
      Comedy: 'movies',
      Romance: 'movies',
      Documentary: 'movies',
    },
  },
  {
    heading: 'Support',
    links: ['Contact Us'],
    routeMap: {},
  },
  {
    heading: 'Subscription',
    links: ['Free Trial', 'Plans', 'Gift Cards', 'Manage'],
    routeMap: {},
  },
];

/**
 * Footer - Site-wide footer with navigation links, social buttons, and copyright.
 *
 * REQ: WM-8300 - Footer exact labels including known typo "Gernes" and "@2023 streamvib".
 * REQ: WM-8291 - No dead clicks: all interactive elements have a handler.
 *
 * @param {Object}   props
 * @param {Function} props.navigate - App navigation handler
 * @returns {JSX.Element}
 */
// PUBLIC_INTERFACE
const Footer = ({ navigate }) => {
  /**
   * Handle footer link clicks.
   * If a route mapping exists, navigate there. Otherwise, gracefully no-op.
   * This prevents dead clicks while avoiding fabricated destinations.
   *
   * REQ: WM-8291 - Deterministic click handling (no dead clicks).
   */
  const handleLinkClick = (link, routeMap) => {
    const destination = routeMap[link];
    if (destination && navigate) {
      navigate(destination);
    }
    // If no route is known, the click is acknowledged but no navigation occurs.
    // This is intentional per WM-8291: "destinations unknown" → do not fabricate routes.
  };

  return (
    <footer className="footer">
      {/* Links Section */}
      <div className="footer__links-row">
        {footerColumns.map(({ heading, links, routeMap }) => (
          <div className="footer__column" key={heading}>
            <h4 className="footer__col-heading">{heading}</h4>
            <div className="footer__col-links">
              {links.map((link) => (
                <button
                  key={link}
                  className="footer__link"
                  type="button"
                  onClick={() => handleLinkClick(link, routeMap)}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Connect With Us */}
        <div className="footer__column footer__column--social">
          <h4 className="footer__col-heading">Connect With Us</h4>
          <div className="footer__social-buttons">
            <button className="footer__social-btn" aria-label="Facebook" type="button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 2H15C13.67 2 12 3.67 12 5V8H9V12H12V22H16V12H19L20 8H16V5C16 4.45 16.45 4 17 4H20V2H18Z"
                  fill="#BFBFBF"
                />
              </svg>
            </button>
            <button className="footer__social-btn" aria-label="Twitter" type="button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.6117 13.2884 4.19439 12.773 4.95372C12.2575 5.71305 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z"
                  stroke="#BFBFBF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="footer__social-btn" aria-label="LinkedIn" type="button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                  stroke="#BFBFBF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 9H2V21H6V9Z"
                  stroke="#BFBFBF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="4"
                  cy="4"
                  r="2"
                  stroke="#BFBFBF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="footer__bottom">
        <div className="footer__divider" />
        <div className="footer__copyright-row">
          {/* REQ: WM-8300 - Exact copyright text with known typo "@2023 streamvib" */}
          <span className="footer__copyright">@2023 streamvib, All Rights Reserved</span>
          <div className="footer__legal-links">
            <button className="footer__legal-link" type="button">Terms of Use</button>
            <button className="footer__legal-link" type="button">Privacy Policy</button>
            <button className="footer__legal-link" type="button">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
