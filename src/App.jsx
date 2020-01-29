import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Imcoding from './pages/Imcoding';
import AstroCamp from './pages/AstroCamp';
import Talks from './pages/Talks';
import Dev5ruby from './pages/Dev5ruby';
import Training from './pages/Training';
import Space from './pages/Space';
import Posts from './pages/Posts';
import Contacts from './pages/Contacts';
// import Carousel from './components/Carousel/Carousel'

function App() {
  return (
    // Fragment使用shorthand syntax(速記語法), <>...</>
    <>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/imcoding" exact component={Imcoding} />
        <Route path="/astro" exact component={AstroCamp} />
        <Route path="/talks" exact component={Talks} />
        <Route path="/dev5xruby" exact component={Dev5ruby} />
        <Route path="/training" exact component={Training} />
        <Route path="/space" exact component={Space} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/contacts" exact component={Contacts} />
        {/* <Carousel /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
