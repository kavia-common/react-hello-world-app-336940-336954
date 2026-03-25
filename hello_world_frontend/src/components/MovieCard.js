import React, { useState } from 'react';
import './MovieCard.css';

// PUBLIC_INTERFACE
const MovieCard = ({ movie, navigate }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`movie-card ${hovered ? 'movie-card--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate && navigate('show-detail', movie)}
    >
      {/* Poster */}
      <div className="movie-card__poster">
        <img
          src={movie.poster}
          alt={movie.title}
          className="movie-card__img"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        {hovered && (
          <div className="movie-card__overlay">
            <button className="movie-card__play-btn" aria-label="Play">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="rgba(229,0,0,0.9)"/>
                <path d="M10 8L16 12L10 16V8Z" fill="white"/>
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="movie-card__info">
        <div className="movie-card__meta">
          <span className="movie-card__year">{movie.year}</span>
          {movie.rating && (
            <span className="movie-card__rating">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#E50000">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              {movie.rating}
            </span>
          )}
        </div>
        <h4 className="movie-card__title">{movie.title}</h4>
        <div className="movie-card__genre-tags">
          {movie.genres && movie.genres.slice(0, 2).map((g, i) => (
            <span key={i} className="movie-card__genre-tag">{g}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
