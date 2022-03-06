import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChange = event => {
    this.setState({
      numberOfEvents: event.target.value,
    });
  };

  render() {
    return (
      <div className="numberOfEvents">
        <input
          type="number"
          className="numberEvents"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
