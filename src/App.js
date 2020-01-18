import React from 'react';
import Navigation from './components/Header/Navigation';
import HomeCarousel from './components/Content/HomeCarousel';
import Feature from './components/Content/Feature'

function App() {
  return (
    <div>
      <Navigation />
      <HomeCarousel />
      <Feature />
    </div>
  );
}

export default App;
