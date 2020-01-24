import React, { Component, Fragment } from 'react';
import Navigation from '../components/Header/Navigation';
import HomeCarousel from '../components/Content/HomeCarousel';
import Feature from '../components/Content/Feature';
import Recent from '../components/Content/Recent';
import AvatarCarousel from '../components/Content/AvatarCarousel';
import Showcases from '../components/Content/Showcases';
import Knowaboutus from '../components/Content/Knowaboutus';
import Footer from '../components/Footer/Footer';
// database
import data from '../db/content.json'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                <HomeCarousel />
                <Feature featureData={data.sections[0]} />
                <Recent recentData={data.sections[1]} />
                <AvatarCarousel avatarData={data.sections[2]} />
                <Showcases showCasesData={data.sections[3]} />
                <Knowaboutus knowAboutUsData={data.sections[4]} />
                <Footer />
            </Fragment>
        )
    }
}

export default Home;