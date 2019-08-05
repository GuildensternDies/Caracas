import React from 'react'
import fb from '../assets/fb-icon.svg'
import ig from '../assets/ig-icon.svg'
import tw from '../assets/tw-icon.svg'


function SocialContact() {

  return (
    <>
      <div className="container is-fluid">
        <div className="social-wrapper">
          <img className="sm-icons" src={fb} alt="..." />
          <img className="sm-icons" src={ig} alt="..." />
          <img className="sm-icons" src={tw} alt="..." />
          <div id="button-right">
            <a href="/#location-section"><button className="flynn-button">Contact</button></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SocialContact

