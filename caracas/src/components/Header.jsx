import React from 'react'

function Header() {
  return (
    <div id="header">
      <div className="hero-container">
        <p className="hero-text">WE ARE AN AREPA BAR IN WILLIAMSBURG, BROOKLYN.</p>
        <div className='hero-button-container'>
          <a href="/#about-section"><button className="hero-button">WHAT'S AN AREPA?</button></a>
        </div>
      </div>
    </div>
  )
}


export default Header;