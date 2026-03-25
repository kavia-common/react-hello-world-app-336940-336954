import React, { useState } from 'react';
import './MoviesShowsPage.css';
import Navbar from '../components/Navbar';
import MovieHeroBanner from '../components/MovieHeroBanner';
import MovieCard from '../components/MovieCard';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';
import { movies, shows, genres } from '../data/streamData';

const allGenres = ['All', ...genres.map(g => g.name), 'Sci-Fi', 'Thriller', 'Crime', 'Fantasy'];

// PUBLIC_INTERFACE
const MoviesShowsPage = ({ navigate }) => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [heroMovie] = useState(movies[0]);

  const filteredMovies = selectedGenre === 'All'
    ? movies
    : movies.filter(m => m.genres.includes(selectedGenre));

  const filteredShows = selectedGenre === 'All'
    ? shows
    : shows.filter(s => s.genres.includes(selectedGenre));

  return (
    <div className="movies-page">
      {/* Hero wrapper */}
      <div className="movies-page__hero-wrapper">
        <Navbar activePage="movies" navigate={navigate} />
        <div className="movies-page__hero-container">
          <MovieHeroBanner movie={heroMovie} navigate={navigate} />
        </div>
      </div>

      {/* Genre Filter */}
      <div className="movies-page__genre-filter-wrapper">
        <div className="movies-page__genre-filter">
          <div className="movies-page__genre-scroll">
            {allGenres.map((genre) => (
              <button
                key={genre}
                className={`movies-page__genre-btn ${selectedGenre === genre ? 'movies-page__genre-btn--active' : ''}`}
                onClick={() => setSelectedGenre(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Movies Section */}
      <section className="movies-page__section">
        <div className="movies-page__section-header">
          <div className="movies-page__section-label">
            <span>Movies</span>
          </div>
        </div>
        <div className="movies-page__content-container">
          {filteredMovies.length > 0 ? (
            <div className="movies-page__grid">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} navigate={navigate} />
              ))}
            </div>
          ) : (
            <p className="movies-page__empty">No movies found for this genre.</p>
          )}
        </div>
      </section>

      {/* Shows Section */}
      <section className="movies-page__section">
        <div className="movies-page__section-header">
          <div className="movies-page__section-label">
            <span>Shows</span>
          </div>
        </div>
        <div className="movies-page__content-container">
          {filteredShows.length > 0 ? (
            <div className="movies-page__grid">
              {filteredShows.map((show) => (
                <MovieCard key={show.id} movie={show} navigate={navigate} />
              ))}
            </div>
          ) : (
            <p className="movies-page__empty">No shows found for this genre.</p>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="movies-page__cta">
        <CTABanner />
      </section>

      <Footer navigate={navigate} />
    </div>
  );
};

export default MoviesShowsPage;
