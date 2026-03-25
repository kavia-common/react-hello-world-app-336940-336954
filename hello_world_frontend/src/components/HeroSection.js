import React from 'react';
import './HeroSection.css';

const heroBgImages = [
  '/assets/movie-bg-1.png', '/assets/movie-bg-2.png', '/assets/movie-bg-3.png',
  '/assets/movie-bg-4.png', '/assets/movie-bg-5.png', '/assets/movie-bg-6.png',
  '/assets/movie-bg-7.png', '/assets/movie-bg-8.png', '/assets/movie-bg-9.png',
  '/assets/movie-bg-10.png', '/assets/movie-bg-11.png', '/assets/movie-bg-12.png',
  '/assets/movie-bg-13.png', '/assets/movie-bg-14.png', '/assets/movie-bg-15.png',
  '/assets/movie-bg-16.png', '/assets/movie-bg-17.png', '/assets/movie-bg-18.png',
];

// PUBLIC_INTERFACE
const HeroSection = ({ navigate }) => {
  const rows = [
    heroBgImages.slice(0, 9),
    heroBgImages.slice(9, 18),
  ];

  return (
    <div className="hero">
      {/* Background Image Grid */}
      <div className="hero__bg-container">
        <div className="hero__fade-top" />
        <div className="hero__fade-bottom" />
        <div className="hero__bg-grid">
          {rows.map((row, rowIdx) => (
            <div className="hero__bg-row" key={rowIdx}>
              {row.map((img, i) => (
                <div
                  key={i}
                  className="hero__bg-image"
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Abstract Design / Logo Center */}
      <div className="hero__abstract">
        <div className="hero__abstract-circle">
          <svg width="101" height="101" viewBox="0 0 101 101" fill="none">
            <circle cx="50.88" cy="50.88" r="48.88" stroke="rgba(229,0,0,0.4)" strokeWidth="2"/>
            <circle cx="50.88" cy="50.88" r="32" stroke="rgba(229,0,0,0.6)" strokeWidth="2"/>
            <circle cx="50.88" cy="50.88" r="16" fill="#E50000" opacity="0.8"/>
            <path d="M43 46L50.88 57L58.75 46" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Hero Content */}
      <div className="hero__content">
        <div className="hero__text-container">
          <h1 className="hero__heading">The Best Streaming Experience</h1>
          <p className="hero__paragraph">
            StreamVibe is the best streaming experience for watching your favorite movies and shows on demand,
            anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest
            blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists,
            so you can easily find the content you want to watch.
          </p>
        </div>
        <button className="hero__cta-btn" onClick={() => navigate('movies')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
            <path d="M10 8L16 12L10 16V8Z" fill="white"/>
          </svg>
          <span>Start Watching Now</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
