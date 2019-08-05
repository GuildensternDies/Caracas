import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import SocialContact from './components/SocialContact';
import Locations from './components/Locations';
import About from './components/About';
import PicSection from './components/PicSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SocialContact />
      <About />
      <Menu />
      <PicSection />
      <Locations />
      <Footer />
    </>

  );
}

export default App;
