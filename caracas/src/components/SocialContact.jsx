import React from 'react'
import sm from '../assets/sm-place.png'


function SocialContact() {

  return (

    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col">
          <img className="sm-icons" height="24px" src={sm} alt="..." />
          <img className="sm-icons" height="24px" src={sm} alt="..." />
          <img className="sm-icons" height="24px" src={sm} alt="..." />
        </div>
        <div className="col-6">
        </div>
        <div className="float-col-right">
          <a href="/#location-section"><button className="flynn-button">Contact</button></a>
        </div>
      </div>
    </div>

  )
}

export default SocialContact

