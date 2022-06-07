import React from 'react';
import './App.css';

import HeaderComponents from './components/organisms/HeaderComponents';
import MainLayout from './components/pages/MainLayout';

function App() {
  return (
    <div className="App">
      <HeaderComponents />
      <MainLayout />
    </div>
  );
}

export default App;
