import React from 'react';
import './StreamVibeLogo.css';

/**
 * StreamVibeLogo – StreamVibe logo component using the official Figma SVG asset.
 *
 * Renders the StreamVibe logo using the downloaded Figma SVG vector asset
 * (node 2006:2479) for the icon, combined with the "StreamVibe" wordmark.
 *
 * The Figma asset is a 50×50 red (#E60000) vector logo mark.
 *
 * @param {Object}  props
 * @param {string}  [props.className='']   – Optional extra CSS class on the root element
 * @param {number}  [props.iconSize=50]    – Height of the logo icon in px (scales proportionally)
 * @param {boolean} [props.showText=true]  – Whether to render the "StreamVibe" wordmark
 * @returns {JSX.Element}
 */
// PUBLIC_INTERFACE
const StreamVibeLogo = ({ className = '', iconSize = 50, showText = true }) => {
  // The Figma SVG asset path (served from public/assets/)
  const logoSrc = '/assets/streamvibe-logo-from-figma.svg';

  if (!showText) {
    // Icon-only mode: render just the Figma SVG asset
    return (
      <div
        className={`sv-logo sv-logo--icon-only ${className}`}
        style={{ display: 'inline-flex', alignItems: 'center' }}
        aria-label="StreamVibe"
        role="img"
      >
        <img
          src={logoSrc}
          alt="StreamVibe logo"
          width={iconSize}
          height={iconSize}
          style={{ display: 'block' }}
        />
      </div>
    );
  }

  // Full lockup: icon + wordmark side by side
  return (
    <div
      className={`sv-logo ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
      }}
      aria-label="StreamVibe"
      role="img"
    >
      {/* Official Figma SVG logo icon */}
      <img
        src={logoSrc}
        alt=""
        aria-hidden="true"
        width={iconSize}
        height={iconSize}
        style={{ display: 'block', flexShrink: 0 }}
      />
      {/* StreamVibe wordmark */}
      <span
        className="sv-logo__wordmark"
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 700,
          fontSize: `${Math.round(18 * (iconSize / 50))}px`,
          color: '#FFFFFF',
          letterSpacing: '0',
          whiteSpace: 'nowrap',
          lineHeight: 1,
        }}
      >
        StreamVibe
      </span>
    </div>
  );
};

export default StreamVibeLogo;
