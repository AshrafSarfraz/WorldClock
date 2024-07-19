import React from 'react';
import { View, StyleSheet } from 'react-native';

import { colors, clock } from '../../themes/colors';

const ClockSmall = () => (
  <View style={styles.container}>
    <View style={styles.clockFace} />
    <View style={styles.clockPin} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: 100,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  clockFace: {
    backgroundColor: colors.clockFaceSmall,
    width: clock.size - 272,
    height: clock.size - 272,
    borderRadius: 32,
    position: 'absolute',
  },
  clockPin: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    width: 5,
    height: 5,
  },
});

export default ClockSmall;
