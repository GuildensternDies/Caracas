import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Menu from './components/Menu';
import SocialContact from './components/SocialContact';
import Locations from './components/Locations';
import About from './components/About';
import PicSection from './components/PicSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Header />
        <SocialContact />
        <About />
        <Menu />
        <PicSection />
        <Locations />
        <Footer />
      </div>
    </>

  );
}

export default App;
