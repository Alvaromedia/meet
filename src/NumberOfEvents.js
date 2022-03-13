import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: null,
  };

  handleInputChange = event => {
    if (event.target.value >= 33 || event.target.value <= 0) {
      this.setState({
        numberOfEvents: event.target.value,
        infoText: 'Specified number is not allowed',
      });
    } else {
      this.setState({
        numberOfEvents: event.target.value,
        infoText: '',
      });
    }
    this.props.updateNumberOfEvents(event.target.value);
  };
  render() {
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={this.state.infoText} />
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
