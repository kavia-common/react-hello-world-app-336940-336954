import React from 'react';
import './NavArrows.css';

// PUBLIC_INTERFACE
const NavArrows = ({ onPrev, onNext, total, current }) => {
  return (
    <div className="nav-arrows">
      <button
        className="nav-arrows__btn"
        onClick={onPrev}
        aria-label="Previous"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {total > 0 && (
        <div className="nav-arrows__indicators">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`nav-arrows__dot ${i === current ? 'nav-arrows__dot--active' : ''}`}
            />
          ))}
        </div>
      )}
      <button
        className="nav-arrows__btn"
        onClick={onNext}
        aria-label="Next"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default NavArrows;
