import React from 'react'
import calogo from '../assets/caracas-logo.svg'

function Header() {
  return (
    <>
      <div className="container is-fluid">
        <div className="row">
          <div className="one-half column">
            <img className="logo" src={calogo} />
          </div>
          <div className="one-half column">
            <ul className="mainNav">
              <li><a href="/#menu-section">Menu</a></li>
              <li><a href="/#location-section">Hours & Location</a></li>
              <li><a href="https://ordering.chownow.com/order/4265/locations"><button className="flynn-button">ORDER ONLINE</button></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;