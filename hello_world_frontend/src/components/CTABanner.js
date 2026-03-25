import React from 'react';
import './CTABanner.css';

const bgImages = [
  '/assets/movie-bg-1.png', '/assets/movie-bg-2.png', '/assets/movie-bg-3.png',
  '/assets/movie-bg-4.png', '/assets/movie-bg-5.png', '/assets/movie-bg-6.png',
  '/assets/movie-bg-7.png', '/assets/movie-bg-8.png', '/assets/movie-bg-9.png',
  '/assets/movie-bg-10.png', '/assets/movie-bg-11.png', '/assets/movie-bg-12.png',
  '/assets/movie-bg-13.png', '/assets/movie-bg-14.png', '/assets/movie-bg-15.png',
  '/assets/movie-bg-16.png', '/assets/movie-bg-17.png', '/assets/movie-bg-18.png',
];

// PUBLIC_INTERFACE
const CTABanner = () => {
  const rows = [
    bgImages.slice(0, 9),
    bgImages.slice(9, 18),
  ];

  return (
    <div className="cta-banner">
      {/* Background images */}
      <div className="cta-banner__bg" aria-hidden="true">
        {rows.map((row, rowIdx) => (
          <div className="cta-banner__bg-row" key={rowIdx}>
            {row.map((img, i) => (
              <div
                key={i}
                className="cta-banner__bg-img"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
        ))}
        <div className="cta-banner__bg-fade" />
      </div>

      {/* Content */}
      <div className="cta-banner__content">
        <div className="cta-banner__text">
          <h2 className="cta-banner__title">Start your free trial today!</h2>
          <p className="cta-banner__subtitle">
            This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
          </p>
        </div>
        <button className="cta-banner__btn">Start a Free Trail</button>
      </div>
    </div>
  );
};

export default CTABanner;
