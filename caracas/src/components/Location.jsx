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
      <div className="location">
        <h2 className="switch" onClick={this.locationToggleBrooklyn}>Williamsburg</h2>
        <h2 className="switch" onClick={this.locationToggleRockaway}>Rockaway</h2>
        {(this.state.location === 'Brooklyn') &&
          <LocationBrooklyn />}
        {(this.state.location === 'Rockaway') &&
          <LocationRockaway />}
      </div>
    )
  }
}

export default Location