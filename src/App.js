import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Home from './pages/Home.jsx'
import Contacts from './pages/Contacts';
// import Carousel from './components/Carousel/Carousel'

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/contacts" exact component={Contacts} />
        {/* <Carousel /> */}
        <Footer />
      </Router>
    </Fragment>);
}

export default App;
