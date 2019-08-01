import React from 'react';
import LocationBrooklyn from './LocationBrooklyn'
import LocationRockaway from './LocationRockaway'

class Location extends React.Component {
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
      <>
        <div className="menu-container">
          <div className="switch-bk">
            <h2 onClick={this.locationToggleBrooklyn}>Williamsburg</h2>
          </div>
          <div className="switch-rock">
            <h2 onClick={this.locationToggleRockaway}>Rockaway</h2>
          </div>
          {(this.state.location === 'Brooklyn') &&
            <LocationBrooklyn />}
          {(this.state.location === 'Rockaway') &&
            <LocationRockaway />}
        </div>
      </>
    )
  }
}

export default Location