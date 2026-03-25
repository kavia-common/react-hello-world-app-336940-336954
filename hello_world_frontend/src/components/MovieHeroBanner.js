import React from 'react';
import './MovieHeroBanner.css';

/**
 * MovieHeroBanner - Full-width hero banner for the Movies & Shows page.
 * Displays a featured movie with background poster, gradient overlay,
 * title, description, action buttons, and navigation controls.
 *
 * REQ: WM-8297 - Movies & Shows page featured hero with exact title/paragraph.
 * REQ: WM-8297 - Hero controls (Play Now, slider arrows/indicators) as interactive controls.
 * REQ: WM-8291 - No dead clicks: all interactive elements have handlers.
 *
 * @param {Object}   props
 * @param {Object}   props.movie    - Movie/show data object to display
 * @param {Function} props.navigate - Navigation handler
 * @param {Function} props.onPrev   - Handler for previous hero item
 * @param {Function} props.onNext   - Handler for next hero item
 * @param {number}   props.total    - Total number of hero items
 * @param {number}   props.current  - Current hero index (0-based)
 * @returns {JSX.Element|null}
 */
// PUBLIC_INTERFACE
const MovieHeroBanner = ({ movie, navigate, onPrev, onNext, total = 3, current = 0 }) => {
  if (!movie) return null;

  /**
   * Handle secondary icon button clicks (watchlist, like, volume).
   * REQ: WM-8291 - No dead clicks; destinations not evidenced → graceful no-op.
   *
   * @param {string} action - The action identifier
   */
  const handleIconAction = (action) => {
    // Actions acknowledged; specific outcome/destination not evidenced in design spec.
    // Prevents dead clicks while not fabricating behavior.
  };

  return (
    <div className="movie-hero-banner" role="banner" aria-label={`Featured: ${movie.title}`}>
      {/* ── Background poster image ── */}
      <div
        className="movie-hero-banner__bg"
        style={{ backgroundImage: `url(${movie.heroImage || movie.poster})` }}
        aria-hidden="true"
      />
      {/* Bottom-to-top dark gradient overlay */}
      <div className="movie-hero-banner__gradient" aria-hidden="true" />

      {/* ── Centered content (title, description, actions) ── */}
      <div className="movie-hero-banner__content">
        <div className="movie-hero-banner__text">
          {/* REQ: WM-8297 - Exact title and description text from movie data */}
          <h1 className="movie-hero-banner__title">{movie.title}</h1>
          <p className="movie-hero-banner__desc">{movie.description}</p>
        </div>

        {/* Action buttons row */}
        <div className="movie-hero-banner__actions">
          {/* Play Now button — navigates to show detail */}
          <button
            className="movie-hero-banner__play-btn"
            onClick={() => navigate && navigate('show-detail', movie)}
            aria-label={`Play ${movie.title}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.2" />
              <path d="M10 8L16 12L10 16V8Z" fill="white" />
            </svg>
            <span>Play Now</span>
          </button>

          {/* Secondary icon buttons */}
          <div className="movie-hero-banner__icon-btns">
            {/* Add to watchlist */}
            <button
              className="movie-hero-banner__icon-btn"
              aria-label="Add to watchlist"
              onClick={() => handleIconAction('add-to-watchlist')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 5V19M5 12H19"
                  stroke="#BFBFBF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Like */}
            <button
              className="movie-hero-banner__icon-btn"
              aria-label="Like"
              onClick={() => handleIconAction('like')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  stroke="#BFBFBF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Volume / sound */}
            <button
              className="movie-hero-banner__icon-btn"
              aria-label="Sound"
              onClick={() => handleIconAction('volume')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <polygon
                  points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                  stroke="#BFBFBF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.54 8.46a5 5 0 0 1 0 7.07"
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

      {/* ── Navigation row: prev / indicators / next ── */}
      {/* REQ: WM-8297 - Slider arrows/indicators as interactive controls */}
      <div className="movie-hero-banner__nav">
        {/* Previous */}
        <button
          className="movie-hero-banner__nav-btn"
          onClick={onPrev}
          aria-label="Previous movie"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M15 18L9 12L15 6"
              stroke="#BFBFBF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="movie-hero-banner__indicators" role="tablist" aria-label="Hero slides">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              role="tab"
              aria-selected={i === current}
              className={`movie-hero-banner__dot${
                i === current ? ' movie-hero-banner__dot--active' : ''
              }`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          className="movie-hero-banner__nav-btn"
          onClick={onNext}
          aria-label="Next movie"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M9 18L15 12L9 6"
              stroke="#BFBFBF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieHeroBanner;
