import React from 'react';
import './MovieHeroBanner.css';

// PUBLIC_INTERFACE
const MovieHeroBanner = ({ movie, navigate }) => {
  if (!movie) return null;
  return (
    <div className="movie-hero-banner">
      {/* Background */}
      <div
        className="movie-hero-banner__bg"
        style={{ backgroundImage: `url(${movie.heroImage})` }}
      />
      <div className="movie-hero-banner__gradient" />

      {/* Content */}
      <div className="movie-hero-banner__content">
        <div className="movie-hero-banner__text">
          <h1 className="movie-hero-banner__title">{movie.title}</h1>
          <p className="movie-hero-banner__desc">{movie.description}</p>
        </div>
        <div className="movie-hero-banner__actions">
          <button
            className="movie-hero-banner__play-btn"
            onClick={() => navigate && navigate('show-detail', movie)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.2"/>
              <path d="M10 8L16 12L10 16V8Z" fill="white"/>
            </svg>
            <span>Play Now</span>
          </button>
          <div className="movie-hero-banner__icon-btns">
            <button className="movie-hero-banner__icon-btn" aria-label="Add to watchlist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 5V19M5 12H19" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="movie-hero-banner__icon-btn" aria-label="Like">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="movie-hero-banner__icon-btn" aria-label="Volume">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows + Indicators */}
      <div className="movie-hero-banner__nav">
        <button className="movie-hero-banner__nav-btn" aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="movie-hero-banner__indicators">
          {[0,1,2].map(i => (
            <div key={i} className={`movie-hero-banner__dot ${i === 0 ? 'movie-hero-banner__dot--active' : ''}`} />
          ))}
        </div>
        <button className="movie-hero-banner__nav-btn" aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieHeroBanner;
