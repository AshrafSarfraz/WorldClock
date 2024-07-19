import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import ClockWrap from './ClockWrap';


import clockhour from '../../assets/images/clock-hour.png';
import clockminute from '../../assets/images/clock-minute.png';
import clocksecond from '../../assets/images/clock-second.png';

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: setInterval(this.setDate.bind(this), 1000),
      secondsDegrees: 0,
      minutesDegrees: 0,
      hoursDegrees: 0,
    };
  }

  componentDidMount() {
    this.setDate();
  }

  componentWillUnmount() {
    const { timer } = this.state;

    clearInterval(timer);
  }

  setDate() {
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    this.setState({
      secondsDegrees: (second / 60) * 360,
      minutesDegrees: (minute / 60) * 360,
      hoursDegrees: (hour / 12) * 360,
    });
  }

  render() {
    const { hoursDegrees, minutesDegrees, secondsDegrees } = this.state;

    const hourStyle = { transform: [{ rotate: `${hoursDegrees}deg` }] };
    const minutesStyle = { transform: [{ rotate: `${minutesDegrees}deg` }] };
    const secondsStyle = { transform: [{ rotate: `${secondsDegrees}deg` }] };

    return (
      <View style={styles.container}>
        <ClockWrap>
          <Image source={clockhour} style={[styles.clockHand, hourStyle]} />
          <Image source={clockminute} style={[styles.clockHand, minutesStyle]} />
          <Image source={clocksecond} style={[styles.clockHand, secondsStyle]} />
        </ClockWrap>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 47,
    marginBottom: 67,
    position: 'relative',
    alignItems: 'center',
  },
  clockHand: {
    position: 'absolute',
  },
});
