import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home.jsx';
import Contacts from './pages/Contacts.jsx';
// import Carousel from './components/Carousel/Carousel'

function App() {
  return (
    // Fragment使用shorthand syntax(速記語法), <>...</>
    <>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/contacts" exact component={Contacts} />
        {/* <Carousel /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
