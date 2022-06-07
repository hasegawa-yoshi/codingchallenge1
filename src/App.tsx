import React from 'react';
import { MovieApi } from './api/MovieApi';
import { requests } from './api/request';
import './App.css';

import HeaderComponents from './components/organisms/HeaderComponents';
import MainLayout from './components/pages/MainLayout';

function App() {
  return (
    <div className="App">
      <HeaderComponents />
      <MainLayout />
      <MovieApi fetchUrl={requests.feactMovies} />
    </div>
  );
}

export default App;
