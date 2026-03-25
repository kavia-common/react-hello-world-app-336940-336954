import React from 'react';
import './StreamVibeLogo.css';

/**
 * StreamVibeLogo - Accurate StreamVibe logo component based on Figma design.
 *
 * The logo consists of:
 * - A 50x50 dark (#1A1A1A) rounded-rectangle icon container (border-radius: 12px)
 *   with a 1px #262626 border
 * - Inside the icon: two red (#E50000) right-pointing chevrons/play shapes
 *   forming a stylized double-play / "stream" symbol
 * - "StreamVibe" text in Manrope Bold (700), 18px, white (#FFFFFF), letter-spacing: 0
 *
 * @param {Object}  props
 * @param {string}  [props.className] - Optional extra class
 * @param {number}  [props.iconSize=50] - Icon box size in px
 * @param {boolean} [props.showText=true] - Whether to render the wordmark
 * @returns {JSX.Element}
 */
// PUBLIC_INTERFACE
const StreamVibeLogo = ({ className = '', iconSize = 50, showText = true }) => {
  return (
    <div className={`sv-logo ${className}`} aria-label="StreamVibe">
      {/* Icon container */}
      <div className="sv-logo__icon" style={{ width: iconSize, height: iconSize }}>
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Dark rounded rectangle background */}
          <rect
            width="50"
            height="50"
            rx="12"
            fill="#1A1A1A"
          />
          {/* Border */}
          <rect
            x="0.5"
            y="0.5"
            width="49"
            height="49"
            rx="11.5"
            stroke="#262626"
          />

          {/*
            Double-chevron / double-play symbol:
            Two overlapping rightward-pointing triangular shapes in red (#E50000).
            Left chevron: pointing right, slightly smaller
            Right chevron: pointing right, full size
            Together they form the StreamVibe "stream" / play icon.
          */}

          {/* Left play chevron */}
          <path
            d="M14 17L22 25L14 33"
            stroke="#E50000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right play chevron */}
          <path
            d="M24 17L32 25L24 33"
            stroke="#E50000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Small accent dot at the tip of the right chevron */}
          <circle cx="32" cy="25" r="2.5" fill="#E50000" />
        </svg>
      </div>

      {/* Wordmark */}
      {showText && (
        <span className="sv-logo__text">StreamVibe</span>
      )}
    </div>
  );
};

export default StreamVibeLogo;
