import React from 'react'

function Nav() {
  return (
    <nav id="nav-bar">
      <div id="logo">
        <img src="https://i.imgur.com/eygf71m.png"></img>
      </div>

      <div id="links">
        <a href="/#menu-section">Menu</a>
        <a href="/#location-section">Hours & Location</a>
        <a href="https://ordering.chownow.com/order/4265/locations"><button className="flynn-button">ORDER ONLINE</button></a>
      </div>
    </nav>
  )
}

export default Nav;