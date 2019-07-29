import React from 'react';
import './App.css';
import Menu from './components/Menu';
import SocialContact from './components/SocialContact';
import Location from './components/Location';

function App() {
  return (
    <>
      <div className="App">
        <SocialContact />
        <Menu />
        <Location />
      </div>
    </>
  );
}

export default App;
