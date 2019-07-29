import React from 'react';
import './App.css';
import Menu from './components/Menu';
import SocialContact from './components/SocialContact';
import About from './components/About';

function App() {
  return (
    <>
      <div className="App">
        <SocialContact />
        <About />
        <Menu />
      </div>
    </>
  );
}

export default App;
