// screens/ClockScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


import Clock from './src/components/Clock';
import Time from './src/components/Clock/Time';
import { colors } from './src/themes/colors';

export default function ClockScreen() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = setInterval(handleUpdate, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleUpdate = () => {
    setTime(new Date());
  };

  const h = time.getHours();
  const m = time.getMinutes();

  return (
    <View style={styles.container}>
      <Clock />
      <Text style={styles.title}>Pakistan</Text>
      <Time time={`${h % 12}:${m < 10 ? `0${m}` : m}${h < 12 ? ' AM' : ' PM'}`} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  title: {
    color: '#FFB200',
    fontSize: 30,
    paddingBottom: 10,
  },
});
