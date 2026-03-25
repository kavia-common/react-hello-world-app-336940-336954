import React, { useState, useRef } from 'react';
import './MoviesShowsPage.css';
import Navbar from '../components/Navbar';
import MovieHeroBanner from '../components/MovieHeroBanner';
import MovieCard from '../components/MovieCard';
import NavArrows from '../components/NavArrows';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';
import { movies, shows, genres } from '../data/streamData';

// All available genre filter labels
const allGenres = [
  'All', 'Action', 'Adventure', 'Comedy', 'Drama', 'Horror',
  'Sci-Fi', 'Thriller', 'Crime', 'Fantasy', 'History',
];

// Number of cards per page in each section
const CARDS_PER_PAGE = 10;

/**
 * MoviesShowsPage - Displays the Movies & Shows catalog page.
 * Matches the Figma design node 2005:873 with hero banner, genre filter,
 * movies grid, shows grid, CTA banner, and footer.
 *
 * @param {Object} props
 * @param {Function} props.navigate - Navigation handler
 * @returns {JSX.Element}
 */
// PUBLIC_INTERFACE
const MoviesShowsPage = ({ navigate }) => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [heroMovieIndex, setHeroMovieIndex] = useState(0);
  const [moviesPage, setMoviesPage] = useState(0);
  const [showsPage, setShowsPage] = useState(0);

  const genreScrollRef = useRef(null);

  // Hero banner cycling through featured movies
  const heroMovies = movies.slice(0, 5);
  const heroMovie = heroMovies[heroMovieIndex];

  const handleHeroPrev = () =>
    setHeroMovieIndex((i) => (i === 0 ? heroMovies.length - 1 : i - 1));
  const handleHeroNext = () =>
    setHeroMovieIndex((i) => (i === heroMovies.length - 1 ? 0 : i + 1));

  // Filter movies/shows by selected genre
  const filteredMovies =
    selectedGenre === 'All'
      ? movies
      : movies.filter((m) => m.genres.includes(selectedGenre));

  const filteredShows =
    selectedGenre === 'All'
      ? shows
      : shows.filter((s) => s.genres.includes(selectedGenre));

  // Pagination helpers for movies section
  const totalMoviesPages = Math.ceil(filteredMovies.length / CARDS_PER_PAGE);
  const visibleMovies = filteredMovies.slice(
    moviesPage * CARDS_PER_PAGE,
    (moviesPage + 1) * CARDS_PER_PAGE
  );

  const handleMoviesPrev = () =>
    setMoviesPage((p) => (p === 0 ? totalMoviesPages - 1 : p - 1));
  const handleMoviesNext = () =>
    setMoviesPage((p) => (p === totalMoviesPages - 1 ? 0 : p + 1));

  // Pagination helpers for shows section
  const totalShowsPages = Math.ceil(filteredShows.length / CARDS_PER_PAGE);
  const visibleShows = filteredShows.slice(
    showsPage * CARDS_PER_PAGE,
    (showsPage + 1) * CARDS_PER_PAGE
  );

  const handleShowsPrev = () =>
    setShowsPage((p) => (p === 0 ? totalShowsPages - 1 : p - 1));
  const handleShowsNext = () =>
    setShowsPage((p) => (p === totalShowsPages - 1 ? 0 : p + 1));

  // Reset pagination when genre changes
  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    setMoviesPage(0);
    setShowsPage(0);
  };

  return (
    <div className="movies-page">
      {/* ─── Hero Section ─── */}
      <div className="movies-page__hero-wrapper">
        <Navbar activePage="movies" navigate={navigate} />
        <div className="movies-page__hero-container">
          <MovieHeroBanner
            movie={heroMovie}
            navigate={navigate}
            onPrev={handleHeroPrev}
            onNext={handleHeroNext}
            total={heroMovies.length}
            current={heroMovieIndex}
          />
        </div>
      </div>

      {/* ─── Genre Filter Bar ─── */}
      <div className="movies-page__genre-section">
        <div className="movies-page__genre-panel">
          {/* Section header row */}
          <div className="movies-page__genre-header">
            <div className="movies-page__genre-title-block">
              <h2 className="movies-page__genre-title">Our Genres</h2>
              <p className="movies-page__genre-subtitle">
                Explore our wide variety of genres and find your perfect movie or show.
              </p>
            </div>
            <NavArrows
              onPrev={() => {
                if (genreScrollRef.current) {
                  genreScrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
                }
              }}
              onNext={() => {
                if (genreScrollRef.current) {
                  genreScrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
                }
              }}
              total={0}
              current={0}
            />
          </div>

          {/* Scrollable genre tab pills */}
          <div className="movies-page__genre-scroll" ref={genreScrollRef}>
            {allGenres.map((genre) => (
              <button
                key={genre}
                className={`movies-page__genre-btn${
                  selectedGenre === genre ? ' movies-page__genre-btn--active' : ''
                }`}
                onClick={() => handleGenreChange(genre)}
                aria-pressed={selectedGenre === genre}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Movies Section ─── */}
      <section className="movies-page__section" aria-labelledby="movies-heading">
        {/* Section header */}
        <div className="movies-page__section-header">
          <div className="movies-page__section-title-block">
            <div className="movies-page__section-label" id="movies-heading">
              Movies
            </div>
            <p className="movies-page__section-subtitle">
              Explore the latest and greatest movies in your favourite genres.
            </p>
          </div>
          <NavArrows
            onPrev={handleMoviesPrev}
            onNext={handleMoviesNext}
            total={totalMoviesPages}
            current={moviesPage}
          />
        </div>

        {/* Movie grid */}
        <div className="movies-page__content-panel">
          {visibleMovies.length > 0 ? (
            <div className="movies-page__grid">
              {visibleMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} navigate={navigate} />
              ))}
            </div>
          ) : (
            <p className="movies-page__empty">No movies found for this genre.</p>
          )}
        </div>
      </section>

      {/* ─── Shows Section ─── */}
      <section className="movies-page__section" aria-labelledby="shows-heading">
        {/* Section header */}
        <div className="movies-page__section-header">
          <div className="movies-page__section-title-block">
            <div className="movies-page__section-label" id="shows-heading">
              Shows
            </div>
            <p className="movies-page__section-subtitle">
              Dive into the best TV shows and series across every genre.
            </p>
          </div>
          <NavArrows
            onPrev={handleShowsPrev}
            onNext={handleShowsNext}
            total={totalShowsPages}
            current={showsPage}
          />
        </div>

        {/* Shows grid */}
        <div className="movies-page__content-panel">
          {visibleShows.length > 0 ? (
            <div className="movies-page__grid">
              {visibleShows.map((show) => (
                <MovieCard key={show.id} movie={show} navigate={navigate} />
              ))}
            </div>
          ) : (
            <p className="movies-page__empty">No shows found for this genre.</p>
          )}
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="movies-page__cta">
        <CTABanner />
      </section>

      {/* ─── Footer ─── */}
      <Footer navigate={navigate} />
    </div>
  );
};

export default MoviesShowsPage;
