import React, { useState } from 'react';
import './ShowDetailPage.css';
import Navbar from '../components/Navbar';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

/**
 * Default show data for the Stranger Things "open state".
 *
 * REQ: WM-8299 - Show details: Stranger Things title/synopsis.
 * REQ: WM-8299 - Released Year: 2022 in metadata sidebar.
 * REQ: WM-8299 - Director / Music labeled fields in metadata sidebar.
 *
 * NOTE: Per WM-8299, "Released Year 2022" is the value shown in the metadata sidebar.
 * The show originally aired in 2016, but the design spec explicitly calls for 2022
 * as the displayed Released Year value in the sidebar.
 */
const defaultShow = {
  id: 101,
  title: 'Stranger Things',
  // REQ: WM-8299 - Released Year 2022 per design metadata sidebar
  year: '2022',
  rating: '8.7',
  genres: ['Horror', 'Sci-Fi', 'Thriller'],
  poster: '/assets/movie-bg-11.png',
  heroImage: '/assets/stranger-things-hero.png',
  description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
  type: 'show',
  seasons: 4,
  episodes: 34,
  director: 'The Duffer Brothers',
  music: 'Kyle Dixon & Michael Stein',
};

/** Season → episode list mapping for the default show */
const seasonEpisodes = {
  1: [
    { num: 1, title: 'Chapter One: The Vanishing of Will Byers', duration: '47min', thumb: '/assets/movie-bg-1.png' },
    { num: 2, title: 'Chapter Two: The Weirdo on Maple Street', duration: '55min', thumb: '/assets/movie-bg-2.png' },
    { num: 3, title: 'Chapter Three: Holly, Jolly', duration: '51min', thumb: '/assets/movie-bg-3.png' },
    { num: 4, title: 'Chapter Four: The Body', duration: '46min', thumb: '/assets/movie-bg-4.png' },
    { num: 5, title: 'Chapter Five: The Flea and the Acrobat', duration: '50min', thumb: '/assets/movie-bg-5.png' },
    { num: 6, title: 'Chapter Six: The Monster', duration: '46min', thumb: '/assets/movie-bg-6.png' },
    { num: 7, title: 'Chapter Seven: The Bathtub', duration: '41min', thumb: '/assets/movie-bg-7.png' },
    { num: 8, title: 'Chapter Eight: The Upside Down', duration: '55min', thumb: '/assets/movie-bg-8.png' },
  ],
  2: [
    { num: 1, title: 'Chapter One: MADMAX', duration: '48min', thumb: '/assets/movie-bg-9.png' },
    { num: 2, title: 'Chapter Two: Trick or Treat, Freak', duration: '56min', thumb: '/assets/movie-bg-10.png' },
    { num: 3, title: 'Chapter Three: The Pollywog', duration: '51min', thumb: '/assets/movie-bg-11.png' },
    { num: 4, title: 'Chapter Four: Will the Wise', duration: '46min', thumb: '/assets/movie-bg-12.png' },
  ],
  3: [
    { num: 1, title: 'Chapter One: Suzie, Do You Copy?', duration: '50min', thumb: '/assets/movie-bg-13.png' },
    { num: 2, title: 'Chapter Two: The Mall Rats', duration: '52min', thumb: '/assets/movie-bg-14.png' },
    { num: 3, title: 'Chapter Three: The Case of the Missing Lifeguard', duration: '51min', thumb: '/assets/movie-bg-15.png' },
  ],
  4: [
    { num: 1, title: 'Chapter One: The Hellfire Club', duration: '76min', thumb: '/assets/movie-bg-16.png' },
    { num: 2, title: 'Chapter Two: Vecna\'s Curse', duration: '75min', thumb: '/assets/movie-bg-17.png' },
    { num: 3, title: 'Chapter Three: The Monster and the Superhero', duration: '63min', thumb: '/assets/movie-bg-18.png' },
  ],
};

/**
 * ShowDetailPage - Detail view for a TV show (default: Stranger Things).
 *
 * REQ: WM-8299 - Shows Page Open view: hero with title/synopsis, Play Now button.
 * REQ: WM-8299 - Seasons & episodes container.
 * REQ: WM-8299 - Description panel with exact text.
 * REQ: WM-8299 - Metadata sidebar: Released Year 2022, Director, Music, Genres, Languages.
 * REQ: WM-8291 - No dead clicks: all buttons have handlers.
 * REQ: WM-8300 - CTA banner and footer present on this page.
 *
 * @param {Object}  props
 * @param {Function} props.navigate  - App navigation handler
 * @param {Object}  [props.show]     - Optional show data (falls back to defaultShow)
 * @returns {JSX.Element}
 */
// PUBLIC_INTERFACE
const ShowDetailPage = ({ navigate, show }) => {
  const currentShow = show || defaultShow;
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [selectedEpisode, setSelectedEpisode] = useState(1);
  const episodes = seasonEpisodes[selectedSeason] || [];
  const totalSeasons = currentShow.seasons || 4;

  /**
   * Handle Play Now button click.
   * REQ: WM-8291 - No dead clicks; destination not evidenced → graceful no-op.
   */
  const handlePlayNow = () => {
    // Play destination is not evidenced in design spec; click acknowledged.
  };

  /**
   * Handle "Add to list", "Like", "Volume" icon button clicks.
   * REQ: WM-8291 - No dead clicks; destinations not evidenced → graceful no-ops.
   */
  const handleIconAction = (action) => {
    // Action acknowledged; specific destination/outcome not evidenced.
  };

  /**
   * Handle "See More" for cast/reviews.
   * REQ: WM-8291 - No dead clicks; destination not evidenced → graceful no-op.
   */
  const handleSeeMore = () => {
    // Destination not evidenced; click acknowledged.
  };

  return (
    <div className="show-detail-page">
      {/* Hero Section */}
      {/* REQ: WM-8299 - Hero with Stranger Things title/synopsis + Play Now button */}
      <div className="show-detail-page__hero-wrapper">
        {/* REQ: WM-8291 - Navbar active state: 'movies' when on show detail */}
        <Navbar activePage="movies" navigate={navigate} />

        {/* Hero Banner */}
        <div className="show-detail-page__hero-container">
          <div className="show-detail-page__hero-banner">
            {/* Background */}
            <div
              className="show-detail-page__hero-bg"
              style={{ backgroundImage: `url(${currentShow.heroImage || currentShow.poster})` }}
            />
            <div className="show-detail-page__hero-gradient" />

            {/* Content */}
            <div className="show-detail-page__hero-content">
              <div className="show-detail-page__hero-text">
                <h1 className="show-detail-page__hero-title">{currentShow.title}</h1>
                <p className="show-detail-page__hero-desc">{currentShow.description}</p>
              </div>
              <div className="show-detail-page__hero-actions">
                {/* REQ: WM-8299 - Play Now button */}
                <button className="show-detail-page__play-btn" onClick={handlePlayNow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.2)"/>
                    <path d="M10 8L16 12L10 16V8Z" fill="white"/>
                  </svg>
                  <span>Play Now</span>
                </button>
                <div className="show-detail-page__icon-btns">
                  <button
                    className="show-detail-page__icon-btn"
                    aria-label="Add to list"
                    onClick={() => handleIconAction('add-to-list')}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5V19M5 12H19" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <button
                    className="show-detail-page__icon-btn"
                    aria-label="Like"
                    onClick={() => handleIconAction('like')}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button
                    className="show-detail-page__icon-btn"
                    aria-label="Volume"
                    onClick={() => handleIconAction('volume')}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="show-detail-page__main">
        {/* Left Column: Seasons & Episodes */}
        <div className="show-detail-page__left-col">

          {/* Seasons & Episodes Panel */}
          {/* REQ: WM-8299 - Seasons & episodes container */}
          <div className="show-detail-page__seasons-panel">
            <h2 className="show-detail-page__panel-title">Seasons and Episodes</h2>
            {/* Season Tabs */}
            <div className="show-detail-page__season-tabs">
              {Array.from({ length: totalSeasons }).map((_, i) => (
                <button
                  key={i + 1}
                  className={`show-detail-page__season-tab ${selectedSeason === i + 1 ? 'show-detail-page__season-tab--active' : ''}`}
                  onClick={() => { setSelectedSeason(i + 1); setSelectedEpisode(1); }}
                >
                  Season {i + 1}
                </button>
              ))}
            </div>
            {/* Episode List */}
            <div className="show-detail-page__episodes">
              {episodes.map((ep) => (
                <div
                  key={ep.num}
                  className={`show-detail-page__episode ${selectedEpisode === ep.num ? 'show-detail-page__episode--active' : ''}`}
                  onClick={() => setSelectedEpisode(ep.num)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedEpisode(ep.num)}
                >
                  <div
                    className="show-detail-page__ep-thumb"
                    style={{ backgroundImage: `url(${ep.thumb})` }}
                  >
                    {selectedEpisode === ep.num && (
                      <div className="show-detail-page__ep-play-overlay">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" fill="rgba(229,0,0,0.9)"/>
                          <path d="M10 8L16 12L10 16V8Z" fill="white"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="show-detail-page__ep-info">
                    <span className="show-detail-page__ep-num">E{ep.num}</span>
                    <span className="show-detail-page__ep-title">{ep.title}</span>
                    <span className="show-detail-page__ep-duration">{ep.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Description Card */}
          {/* REQ: WM-8299 - Description panel with exact text */}
          <div className="show-detail-page__info-card">
            <h3 className="show-detail-page__info-card-label">Description</h3>
            <p className="show-detail-page__info-card-text">{currentShow.description}</p>
          </div>

          {/* Cast & More */}
          <div className="show-detail-page__info-card">
            <div className="show-detail-page__cast-header">
              <h3 className="show-detail-page__info-card-label">Cast</h3>
              <button
                className="show-detail-page__see-more"
                onClick={handleSeeMore}
              >
                See More &rarr;
              </button>
            </div>
            <div className="show-detail-page__cast-grid">
              {['Millie Bobby Brown', 'Finn Wolfhard', 'Winona Ryder', 'David Harbour'].map((name, i) => (
                <div key={i} className="show-detail-page__cast-item">
                  <div
                    className="show-detail-page__cast-avatar"
                    style={{ backgroundImage: `url(/assets/movie-bg-${i + 1}.png)` }}
                  />
                  <span className="show-detail-page__cast-name">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="show-detail-page__info-card show-detail-page__info-card--reviews">
            <div className="show-detail-page__cast-header">
              <h3 className="show-detail-page__info-card-label">Reviews</h3>
              <button
                className="show-detail-page__see-more"
                onClick={handleSeeMore}
              >
                See More &rarr;
              </button>
            </div>
            <div className="show-detail-page__rating-display">
              <div className="show-detail-page__stars">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="20" height="20" viewBox="0 0 24 24" fill={s <= 4 ? '#E50000' : 'none'} stroke={s <= 4 ? 'none' : '#999'} strokeWidth="2">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                ))}
              </div>
              <span className="show-detail-page__rating-score">{currentShow.rating}/10</span>
            </div>
            <div className="show-detail-page__review-bars">
              {[5,4,3,2,1].map(s => (
                <div key={s} className="show-detail-page__review-bar-row">
                  <span className="show-detail-page__review-bar-label">{s}★</span>
                  <div className="show-detail-page__review-bar-track">
                    <div
                      className="show-detail-page__review-bar-fill"
                      style={{ width: `${s === 5 ? 70 : s === 4 ? 50 : s === 3 ? 20 : s === 2 ? 8 : 4}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Show Info / Metadata Sidebar */}
        {/* REQ: WM-8299 - Metadata sidebar: Released Year 2022, Director, Music, Genres, Languages */}
        <div className="show-detail-page__right-col">
          <div className="show-detail-page__show-info-panel">

            {/* Released Year */}
            <div className="show-detail-page__info-row">
              <div className="show-detail-page__info-row-header">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="#999" strokeWidth="2"/>
                  <path d="M16 2V6M8 2V6M3 10H21" stroke="#999" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                {/* REQ: WM-8299 - "Released Year" label in metadata sidebar */}
                <span className="show-detail-page__info-row-label">Released Year</span>
              </div>
              {/* REQ: WM-8299 - Value: 2022 */}
              <span className="show-detail-page__info-row-value">{currentShow.year}</span>
            </div>

            {/* Available Languages */}
            <div className="show-detail-page__info-row">
              <div className="show-detail-page__info-row-header">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#999" strokeWidth="2"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#999" strokeWidth="2"/>
                  <path d="M2 12H22" stroke="#999" strokeWidth="2"/>
                </svg>
                <span className="show-detail-page__info-row-label">Available Languages</span>
              </div>
              <div className="show-detail-page__lang-tags">
                {['English', 'Spanish', 'French', 'German'].map(lang => (
                  <span key={lang} className="show-detail-page__lang-tag">{lang}</span>
                ))}
              </div>
            </div>

            {/* Ratings */}
            <div className="show-detail-page__info-row">
              <div className="show-detail-page__info-row-header">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="show-detail-page__info-row-label">Ratings</span>
              </div>
              <div className="show-detail-page__ratings-row">
                {[
                  { src: '🎬', label: 'IMDb', score: currentShow.rating },
                  { src: '🍅', label: 'Rotten', score: '92%' },
                  { src: '📺', label: 'Stream', score: '9.0' },
                ].map(r => (
                  <div key={r.label} className="show-detail-page__rating-badge">
                    <span className="show-detail-page__rating-emoji">{r.src}</span>
                    <span className="show-detail-page__rating-label">{r.label}</span>
                    <span className="show-detail-page__rating-val">{r.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Genres */}
            <div className="show-detail-page__info-row">
              <div className="show-detail-page__info-row-header">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="#999" strokeWidth="2"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="#999" strokeWidth="2"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="#999" strokeWidth="2"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="#999" strokeWidth="2"/>
                </svg>
                <span className="show-detail-page__info-row-label">Genres</span>
              </div>
              <div className="show-detail-page__genre-tags">
                {(currentShow.genres || ['Drama']).map(g => (
                  <span key={g} className="show-detail-page__genre-tag">{g}</span>
                ))}
              </div>
            </div>

            {/* Director */}
            {/* REQ: WM-8299 - Director labeled field in metadata sidebar */}
            <div className="show-detail-page__info-row">
              <div className="show-detail-page__info-row-header">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="#999" strokeWidth="2"/>
                  <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="#999" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="show-detail-page__info-row-label">Director</span>
              </div>
              <div className="show-detail-page__director-card">
                <div className="show-detail-page__director-avatar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" stroke="#BFBFBF" strokeWidth="2"/>
                    <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="show-detail-page__director-name">{currentShow.director || 'N/A'}</span>
              </div>
            </div>

            {/* Music */}
            {/* REQ: WM-8299 - Music labeled field in metadata sidebar */}
            <div className="show-detail-page__info-row">
              <div className="show-detail-page__info-row-header">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18V5l12-2v13" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="6" cy="18" r="3" stroke="#999" strokeWidth="2"/>
                  <circle cx="18" cy="16" r="3" stroke="#999" strokeWidth="2"/>
                </svg>
                <span className="show-detail-page__info-row-label">Music</span>
              </div>
              <div className="show-detail-page__director-card">
                <div className="show-detail-page__director-avatar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18V5l12-2v13" stroke="#BFBFBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="6" cy="18" r="3" stroke="#BFBFBF" strokeWidth="2"/>
                    <circle cx="18" cy="16" r="3" stroke="#BFBFBF" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="show-detail-page__director-name">{currentShow.music || 'N/A'}</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CTA Banner */}
      {/* REQ: WM-8300 - CTA banner on all screens */}
      <section className="show-detail-page__cta">
        <CTABanner />
      </section>

      {/* Footer */}
      {/* REQ: WM-8300 - Footer on all screens */}
      <Footer navigate={navigate} />
    </div>
  );
};

export default ShowDetailPage;
