import React from 'react';
import './StreamVibeLogo.css';

/**
 * StreamVibeLogo – Accurate StreamVibe vector logo component.
 *
 * Renders the StreamVibe logo using an inline SVG vector that precisely
 * matches the Figma design:
 *
 *  • Icon: 50×50 px dark (#1A1A1A) rounded rectangle (rx=12), 1px #262626 border,
 *    with two right-pointing chevron strokes in red (#E50000).
 *  • Wordmark: "StreamVibe" in Manrope Bold 700, 18px, white (#FFFFFF).
 *
 * The entire lockup is rendered as a single inline SVG for true vector
 * quality at any resolution.
 *
 * @param {Object}  props
 * @param {string}  [props.className='']   – Optional extra CSS class on the root element
 * @param {number}  [props.iconSize=50]    – Height of the logo in px (scales proportionally)
 * @param {boolean} [props.showText=true]  – Whether to render the "StreamVibe" wordmark
 * @returns {JSX.Element}
 */
// PUBLIC_INTERFACE
const StreamVibeLogo = ({ className = '', iconSize = 50, showText = true }) => {
  // Calculate proportional width:
  // icon is 50px wide; full lockup (icon 50 + gap 8 + text ~108) = ~166px at iconSize=50
  const scale = iconSize / 50;
  const iconW = 50 * scale;
  const iconH = 50 * scale;
  const totalW = showText ? Math.round(166 * scale) : iconW;
  const totalH = iconH;

  if (!showText) {
    // Icon-only: return the icon SVG
    return (
      <svg
        className={`sv-logo sv-logo--icon-only ${className}`}
        width={iconW}
        height={iconH}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="StreamVibe"
        role="img"
      >
        {/* Dark rounded-rectangle background */}
        <rect width="50" height="50" rx="12" fill="#1A1A1A" />
        {/* Border */}
        <rect x="0.5" y="0.5" width="49" height="49" rx="11.5" stroke="#262626" strokeWidth="1" />
        {/* Left chevron */}
        <path
          d="M14 17L22 25L14 33"
          stroke="#E50000"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right chevron */}
        <path
          d="M24 17L32 25L24 33"
          stroke="#E50000"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Full lockup: icon + wordmark in one SVG for pixel-perfect vector rendering
  return (
    <svg
      className={`sv-logo ${className}`}
      width={totalW}
      height={totalH}
      viewBox="0 0 166 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="StreamVibe"
      role="img"
    >
      {/* ── Icon ─────────────────────────────────────────────── */}
      {/* Dark rounded-rectangle background */}
      <rect width="50" height="50" rx="12" fill="#1A1A1A" />
      {/* Border */}
      <rect x="0.5" y="0.5" width="49" height="49" rx="11.5" stroke="#262626" strokeWidth="1" />
      {/* Left chevron */}
      <path
        d="M14 17L22 25L14 33"
        stroke="#E50000"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right chevron */}
      <path
        d="M24 17L32 25L24 33"
        stroke="#E50000"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ── Wordmark ─────────────────────────────────────────── */}
      {/* Gap between icon and text: 8px (icon ends at x=50, text starts at x=58) */}
      <text
        x="58"
        y="33"
        fontFamily="Manrope, sans-serif"
        fontWeight="700"
        fontSize="18"
        fill="#FFFFFF"
        letterSpacing="0"
        dominantBaseline="auto"
      >
        StreamVibe
      </text>
    </svg>
  );
};

export default StreamVibeLogo;
