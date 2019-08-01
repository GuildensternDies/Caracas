import React from 'react'
import rockMap from '../assets/rockMap.png'


function LocationRockaway() {

  return (
    <div className="info">
      <div className="row">
        <h3 className="menu-header">Hours</h3>
        <div className="row">
          <h4 className="location-header">SUNDAY</h4>
          <h4 className="location-header">MONDAY</h4>
          <h4 className="location-header">TUESDAY</h4>
          <h4 className="location-header">WEDNESDAY</h4>
          <h4 className="location-header">THURSDAY</h4>
          <h4 className="location-header">FRIDAY</h4>
          <h4 className="location-header">SATURDAY</h4>
        </div>
        <div className="row">
          <h4 className="location-header">12PM - 8PM</h4>
          <h4 className="location-header">12PM - 8PM</h4>
          <h4 className="location-header">12PM - 8PM</h4>
          <h4 className="location-header">12PM - 8PM</h4>
          <h4 className="location-header">11AM - 8:30PM</h4>
          <h4 className="location-header">11AM - 8:30PM</h4>
          <h4 className="location-header">11AM - 8:30PM</h4>
        </div>
      </div>
      <div className="row">
        <h3 className="menu-header">Location</h3>
        <h4 className="location-header">ROCKAWAY</h4>
        <h4 className="location-header">106-01 SHORE FRONT PKWY</h4>
        <h4 className="location-header">ROCKAWAY PARK, NY 11694</h4>
        <h4 className="location-header">T. 718 218 6060 </h4>
        <a href="https://www.google.com/maps/place/Caracas+Arepa+Bar+(Summer+Only)/@40.5805721,-73.828269,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2683139952b0f:0x39e1e6e6206283c6!8m2!3d40.580568!4d-73.826075" target="_blank"><button className="flynn-button">Get Directions</button></a>
      </div>
      {/* <img src={rockMap} /> */}
    </div>
  )
}

export default LocationRockaway