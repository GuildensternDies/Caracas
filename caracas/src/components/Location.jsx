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

  locationToggle = () => {
    if (this.state.location === 'Brooklyn') {
      this.setState({
        location: 'Rockaway'
      });
    }
    if (this.state.location === 'Rockaway') {
      this.setState({
        location: 'Brooklyn'
      })
    }
  };

  render() {
    return (
      <>
        {(this.state.location === 'Brooklyn') &&
          <LocationBrooklyn />}
        {(this.state.location === 'Rockaway') &&
          <LocationRockaway />}
      </>
    )
  }
}

export default Location