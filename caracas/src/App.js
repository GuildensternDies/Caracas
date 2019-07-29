import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Header from './components/Header';
import Menu from './components/Menu';
import SocialContact from './components/SocialContact';
import About from './components/About';

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Header />
        <SocialContact />
        <About />
        <Menu />
      </div>
    </>

  );
}

export default App;
