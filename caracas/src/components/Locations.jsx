import React from 'react'
import rockMap from '../assets/rockMap.svg'
import bkMap from '../assets/bkMap.svg'

// Locations BK & Rockaway

class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Brooklyn'
    }
  };


  locationToggleBrooklyn = () => {
    if (this.state.location === 'Rockaway') {
      this.setState({
        location: 'Brooklyn'
      })
    }
  };

  locationToggleRockaway = () => {
    if (this.state.location === 'Brooklyn') {
      this.setState({
        location: 'Rockaway'
      });
    }
  };

  render() {
    return (
      <div className="container is-fluid">
        <div className="row">

          <div className="col-6">

            <h2 className="switch-food" onClick={this.locationToggleBrooklyn}>WILLIAMSBURG</h2><br></br>
          </div>
          <div className="col-6">
            <h2 className="switch-drink" onClick={this.locationToggleRockaway}>ROCKAWAY</h2>
          </div>

        </div>

        {(this.state.location === 'Brooklyn') &&
          <div className="row">
            <div className="col-3">
              <h2 className="location-title">Hours</h2>
              <p className="location-p">SUNDAY</p>
              <p className="location-p">MONDAY</p>
              <p className="location-p">TUESDAY</p>
              <p className="location-p">WEDNESDAY</p>
              <p className="location-p">THURSDAY</p>
              <p className="location-p">FRIDAY</p>
              <p className="location-p">SATURDAY</p>
            </div>
            <div className="col-3">
              <p className="location-p">12PM - 11PM</p>
              <p className="location-p">12PM - 11PM</p>
              <p className="location-p">12PM - 11PM</p>
              <p className="location-p">12PM - 11PM</p>
              <p className="location-p">12PM - 11PM</p>
              <p className="location-p">12PM - 11PM</p>
              <p className="location-p">12PM - 11PM</p>
            </div>


            <div className="col-6">
              <h3 className="location-title">Location</h3>
              <p className="location-p">WILLIAMSBURG</p>
              <p className="location-p">291 GRAND STREET</p>
              <p className="location-p">BROOKLYN NY 11211</p>
              <p className="location-p">T. 718 218 6060 </p>
              <a href="https://www.google.com/maps/place/291+Grand+St,+Brooklyn,+NY+11211/@40.7131869,-73.9596126,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2595f962df24f:0xf6c37fab37c2723a!8m2!3d40.7131829!4d-73.9574186" target="_blank"><button className="map-button">Get Directions</button></a>
            </div>
            <div className="container is-fluid">
              <img src={bkMap} className="map-responsive-image" alt="brooklyn" />
            </div>
          </div>
        }
        {(this.state.location === 'Rockaway' &&
          <div className="row">
            <div className="col-3">
              <h3 className="location-title">Hours</h3>
              <p className="location-p">SUNDAY</p>
              <p className="location-p">MONDAY</p>
              <p className="location-p">TUESDAY</p>
              <p className="location-p">WEDNESDAY</p>
              <p className="location-p">THURSDAY</p>
              <p className="location-p">FRIDAY</p>
              <p className="location-p">SATURDAY</p>
            </div>
            <div className="col-3">
              <h3 className="location-title-white">Invisible Text</h3>
              <p className="location-p">12PM - 8PM</p>
              <p className="location-p">12PM - 8PM</p>
              <p className="location-p">12PM - 8PM</p>
              <p className="location-p">12PM - 8PM</p>
              <p className="location-p">11AM - 8:30PM</p>
              <p className="location-p">11AM - 8:30PM</p>
              <p className="location-p">11AM - 8:30PM</p>
            </div>

            <div className="col-6">
              <h3 className="location-title">Location</h3>
              <p className="location-p">ROCKAWAY</p>
              <p className="location-p">106-01 SHORE FRONT PKWY</p>
              <p className="location-p">ROCKAWAY PARK, NY 11694</p>
              <p className="location-p">T. 718 218 6060 </p>
              <a href="https://www.google.com/maps/place/Caracas+Arepa+Bar+(Summer+Only)/@40.5805721,-73.828269,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2683139952b0f:0x39e1e6e6206283c6!8m2!3d40.580568!4d-73.826075" target="_blank">
                <button className="map-button">Get Directions</button></a>
            </div>
            <div className="container is-fluid mb-5">
              <img src={rockMap} className="map-responsive-image" alt="rockaway" />
            </div>
          </div>)}




      </div>
    )
  }
}
export default Locations