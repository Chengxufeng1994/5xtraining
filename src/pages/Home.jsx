import React from 'react';
import HomeCarousel from '../components/Content/HomeCarousel.jsx';
import Feature from '../components/Content/Feature.jsx';
import Recent from '../components/Content/Recent.jsx';
import AvatarCarousel from '../components/Content/AvatarCarousel.jsx';
import Showcases from '../components/Content/Showcases.jsx';
import Knowaboutus from '../components/Content/Knowaboutus.jsx';
// database
import data from '../db/content.json';

const Home = () => (
  <>
    <HomeCarousel carouselData={data.carousel} />
    <Feature featureData={data.sections[0]} />
    <Recent recentData={data.sections[1]} />
    <AvatarCarousel avatarData={data.sections[2]} />
    <Showcases showCasesData={data.sections[3]} />
    <Knowaboutus knowAboutUsData={data.sections[4]} />
  </>
);

export default Home;
