import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clock extends Component {
  padNumber = (number) => {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  }

  formattedTime = (hours, minutes, seconds) => {
    const timeParts = [hours, minutes, seconds];
    let formattedParts = timeParts.map((part) => this.padNumber(part));
    return formattedParts.join(':');
  }

  render() {
    return (
      <div style={styles.clockContainer}>
        {this.formattedTime(this.props.hours, this.props.minutes, this.props.seconds)}
      </div>
    );
  }
}

Clock.propTypes = {
  hours: PropTypes.number.required,
  minutes: PropTypes.number.required,
  seconds: PropTypes.number.required,
};

const styles = {
  clockContainer: {
    border: '1px solid black',
    marginBottom: '2rem',
    padding: '2rem',
  }
};

export default Clock;
