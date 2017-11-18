import React, { Component } from 'react';
import { CountDown } from '../CountDownClock';

const styles = {
  clockContainer: {
    border: '1px solid black',
    marginBottom: '2rem',
    padding: '2rem',
  }
};

const WordClock = ({ hours, minutes, seconds }) => (
  <div style={styles.clockContainer}>
    {`${hours} hours ${minutes} minutes ${seconds} seconds`}
  </div>
);

const CountDownWordClock = props => (
  <CountDown
    {...props}
    render={({ hours, minutes, seconds }) => (
      <WordClock hours={hours} minutes={minutes} seconds={seconds} />
    )}
  />
);

export default CountDownWordClock;

/** Done early?  Try adding these features:
 *
 *  1. Correct number pluralization (hour vs. hours)
 *  2. Format with words (one hour, twenty-three minutes, forty-five seconds),
 *     probably pull in an external library for this.
 */
