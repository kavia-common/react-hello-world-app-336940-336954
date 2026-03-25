import React, { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import MoviesShowsPage from './pages/MoviesShowsPage';
import ShowDetailPage from './pages/ShowDetailPage';

// PUBLIC_INTERFACE
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedShow, setSelectedShow] = useState(null);

  const navigate = (page, data = null) => {
    setCurrentPage(page);
    if (data) setSelectedShow(data);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      {currentPage === 'home' && <HomePage navigate={navigate} />}
      {currentPage === 'movies' && <MoviesShowsPage navigate={navigate} />}
      {currentPage === 'show-detail' && <ShowDetailPage navigate={navigate} show={selectedShow} />}
    </div>
  );
}

export default App;
