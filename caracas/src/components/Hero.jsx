import React from 'react'

function Hero() {
  return (
    <div className="container is-fluid">
      <div className="hero-container">
        <p className="hero-text">WE ARE AN AREPA BAR IN WILLIAMSBURG, BROOKLYN.</p>

        <a href="/#about-section"><button className="hero-button visible-desktop">WHAT'S AN AREPA?</button></a>
        <a href="/#menu-section"><button className="hero-button visible-mobile">MENU</button></a>
      </div>
    </div>
  )
}


export default Hero;