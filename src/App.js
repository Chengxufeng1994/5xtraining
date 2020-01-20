import React, { Fragment } from 'react';
import Navigation from './components/Header/Navigation';
import HomeCarousel from './components/Content/HomeCarousel';
import Feature from './components/Content/Feature';
import Recent from './components/Content/Recent';
import AvatarCarousel from './components/Content/AvatarCarousel';
import Showcases from './components/Content/Showcases';
import Knowaboutus from './components/Content/Knowaboutus';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Fragment>
      <Navigation />
      <HomeCarousel />
      <Feature />
      <Recent />
      <AvatarCarousel />
      <Showcases />
      <Knowaboutus />
      <Footer />
    </Fragment>
  );
}

export default App;
