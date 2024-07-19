import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { colors, shadow, clock } from '../../themes/colors';
import dots from '../../assets/images/clock-dots.png';

const ClockWrap = (props) => {
  const { children } = props;
  return (
    <View style={styles.container}>
      <View style={styles.clockShadow} />
      <View style={styles.clockShadowDark} />
      <View style={styles.clockShadowWhite} />
      <View style={styles.clockShadowColor} />
      <Image source={dots} style={styles.clockDots} />
      <View style={styles.clockFace} />
      {children}
      <View style={styles.clockPin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: clock.size,
    height: clock.size,
  },
  clockShadow: {
    backgroundColor: colors.clockBackground,
    shadowColor: shadow.main,
    shadowOffset: { width: -38, height: 0 },
    shadowOpacity: 0.41,
    shadowRadius: 54,
    position: 'absolute',
    width: clock.size,
    height: clock.size,
    borderRadius: clock.size / 2,
  },
  clockShadowDark: {
    backgroundColor: colors.clockBackground,
    shadowColor: shadow.dark,
    shadowOffset: { width: 50, height: 0 },
    shadowOpacity: 0.55,
    shadowRadius: 54,
    position: 'absolute',
    width: clock.size,
    height: clock.size,
    borderRadius: clock.size / 2,
  },
  clockShadowWhite: {
    backgroundColor: colors.clockBackground,
    shadowColor: shadow.main,
    shadowOffset: { width: -11, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 44,
    position: 'absolute',
    width: clock.size,
    height: clock.size,
    borderRadius: clock.size / 2,
  },
  clockShadowColor: {
    backgroundColor: colors.clockBackground,
    shadowColor: shadow.color,
    shadowOffset: { width: 10, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 44,
    position: 'absolute',
    borderColor: '#e5ecfb',
    borderWidth: 1,
    width: clock.size,
    height: clock.size,
    borderRadius: clock.size / 2,
  },
  clockDots: {
    width: clock.size - 30,
    height: clock.size - 30,
    position: 'absolute',
    tintColor:'black'
  },
  clockFace: {
    backgroundColor: colors.clockFace,
    width: clock.size - 80,
    height: clock.size - 80,
    borderRadius: (clock.size - 80) / 2,
    shadowColor: shadow.color,
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    position: 'absolute',
  },
  clockPin: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    width: 12,
    height: 12,
  },
});

export default ClockWrap;
