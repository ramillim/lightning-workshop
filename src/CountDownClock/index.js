import React, { Component } from 'react';
import Clock from '../Clock';

export class CountDown extends React.Component {
  constructor(props) {
    super();

    this.state = {
      seconds: props.from
    };
  }

  componentDidMount() {
    this.timeoutID = setInterval(() => {
      if (this.state.seconds === 0) {
        clearInterval(this.timeoutId);
      } else {
        this.setState(({ seconds }) => ({ seconds: seconds - 1 }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeoutID);
  }

  render() {
    const { seconds } = this.state;
    return this.props.render({
      hours: Math.floor(seconds / 3600),
      minutes: Math.floor((seconds % 3600) / 60),
      seconds: Math.floor((seconds % 3600) % 60),
    })
  }
}

const CountDownClock = props => (
  <CountDown
    {...props}
    render={({ hours, minutes, seconds }) => (
      <Clock hours={hours} minutes={minutes} seconds={seconds} />
    )}
  />
)

export default CountDownClock;

/** Done early?  Try adding these features:
 *
 *  1. onComplete handler
 *  2. Option to repeat when countdown reaches 0
 */
