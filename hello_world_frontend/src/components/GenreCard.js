import React from 'react';
import './GenreCard.css';

// PUBLIC_INTERFACE
const GenreCard = ({ genre }) => {
  return (
    <div className="genre-card">
      {/* 2x2 Image Grid */}
      <div className="genre-card__image-grid">
        <div className="genre-card__image-row">
          <div
            className="genre-card__image"
            style={{ backgroundImage: `url(${genre.images[0]})` }}
          />
          <div
            className="genre-card__image"
            style={{ backgroundImage: `url(${genre.images[1]})` }}
          />
        </div>
        <div className="genre-card__image-row">
          <div
            className="genre-card__image"
            style={{ backgroundImage: `url(${genre.images[2]})` }}
          />
          <div
            className="genre-card__image"
            style={{ backgroundImage: `url(${genre.images[3]})` }}
          />
        </div>
        <div className="genre-card__fade" />
      </div>
      {/* Label Row */}
      <div className="genre-card__footer">
        <span className="genre-card__title">{genre.name}</span>
        <div className="genre-card__arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GenreCard;
