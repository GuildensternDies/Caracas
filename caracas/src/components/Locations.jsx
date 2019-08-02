import React from 'react'
import rockMap from '../assets/rockMap.png'
import bkMap from '../assets/bkMap.png'


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
      <div id="location-section">
        <div className="location-container">
          <div className="row">

            <div className="col-6">
              <h2 className="switch-drink" onClick={this.locationToggleBrooklyn}>WILLIAMSBURG</h2>
            </div>

            <div className="col-6">
              <h2 className="switch-drink" onClick={this.locationToggleRockaway}>ROCKAWAY</h2>
            </div>

          </div>

          {(this.state.location === 'Brooklyn') &&
            <div className="row">
              <div className="col-3">
                <h3 className="menu-header">Hours</h3>
                <h4 className="location-header">SUNDAY</h4>
                <h4 className="location-header">MONDAY</h4>
                <h4 className="location-header">TUESDAY</h4>
                <h4 className="location-header">WEDNESDAY</h4>
                <h4 className="location-header">THURSDAY</h4>
                <h4 className="location-header">FRIDAY</h4>
                <h4 className="location-header">SATURDAY</h4>
              </div>
              <div className="col-3">
                <h4 className="location-header">12PM - 11PM</h4>
                <h4 className="location-header">12PM - 11PM</h4>
                <h4 className="location-header">12PM - 11PM</h4>
                <h4 className="location-header">12PM - 11PM</h4>
                <h4 className="location-header">12PM - 11PM</h4>
                <h4 className="location-header">12PM - 11PM</h4>
                <h4 className="location-header">12PM - 11PM</h4>
              </div>


              <div className="col-6">
                <h3 className="menu-header">Location</h3>
                <h4 className="location-header">WILLIAMSBURG</h4>

                <h4 className="location-header">291 GRAND STREET</h4>
                <h4 className="location-header">BROOKLYN NY 11211</h4>
                <h4 className="location-header">T. 718 218 6060 </h4>
                <a href="https://www.google.com/maps/place/291+Grand+St,+Brooklyn,+NY+11211/@40.7131869,-73.9596126,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2595f962df24f:0xf6c37fab37c2723a!8m2!3d40.7131829!4d-73.9574186" target="_blank"><button className="flynn-button">Get Directions</button></a>
              </div>

              <img src={bkMap} width="1110px" alt="brooklyn" />
            </div>
          }
          {(this.state.location === 'Rockaway' &&
            <div className="row">
              <div className="col-3">
                <h3 className="menu-header">Hours</h3>
                <h4 className="location-header">SUNDAY</h4>
                <h4 className="location-header">MONDAY</h4>
                <h4 className="location-header">TUESDAY</h4>
                <h4 className="location-header">WEDNESDAY</h4>
                <h4 className="location-header">THURSDAY</h4>
                <h4 className="location-header">FRIDAY</h4>
                <h4 className="location-header">SATURDAY</h4>
              </div>
              <div className="col-3">
                <h4 className="location-header">12PM - 8PM</h4>
                <h4 className="location-header">12PM - 8PM</h4>
                <h4 className="location-header">12PM - 8PM</h4>
                <h4 className="location-header">12PM - 8PM</h4>
                <h4 className="location-header">11AM - 8:30PM</h4>
                <h4 className="location-header">11AM - 8:30PM</h4>
                <h4 className="location-header">11AM - 8:30PM</h4>
              </div>

              <div className="col-6">
                <h3 className="menu-header">Location</h3>
                <h4 className="location-header">ROCKAWAY</h4>
                <h4 className="location-header">106-01 SHORE FRONT PKWY</h4>
                <h4 className="location-header">ROCKAWAY PARK, NY 11694</h4>
                <h4 className="location-header">T. 718 218 6060 </h4>
                <a href="https://www.google.com/maps/place/Caracas+Arepa+Bar+(Summer+Only)/@40.5805721,-73.828269,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2683139952b0f:0x39e1e6e6206283c6!8m2!3d40.580568!4d-73.826075" target="_blank"><button className="flynn-button">Get Directions</button></a>
              </div>
              <img src={rockMap} width="1110px" alt="rockaway" />
            </div>)}




        </div>
      </div>
    )
  }
}
export default Locations
