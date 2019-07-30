import React from 'react';
import bkMap from '../assets/bkMap.png';


function LocationBrooklyn() {

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
          <h4 className="location-header">12PM - 11PM</h4>
          <h4 className="location-header">12PM - 11PM</h4>
          <h4 className="location-header">12PM - 11PM</h4>
          <h4 className="location-header">12PM - 11PM</h4>
          <h4 className="location-header">12PM - 11PM</h4>
          <h4 className="location-header">12PM - 11PM</h4>
          <h4 className="location-header">12PM - 11PM</h4>
        </div>
      </div>
      <div className="row">
        <section id="location-section">
          <h3 className="menu-header">Location</h3>
          <h4 className="location-header">WILLIAMSBURG</h4>
        </section>
        <h4 className="location-header">291 GRAND STREET</h4>
        <h4 className="location-header">BROOKLYN NY 11211</h4>
        <h4 className="location-header">T. 718 218 6060 </h4>
        <a href="https://www.google.com/maps/place/291+Grand+St,+Brooklyn,+NY+11211/@40.7131869,-73.9596126,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2595f962df24f:0xf6c37fab37c2723a!8m2!3d40.7131829!4d-73.9574186" target="_blank"><button className="flynn-button">Get Directions</button></a>
      </div>
      {/* <img src={bkMap} /> */}
    </div>
  )
}

export default LocationBrooklyn