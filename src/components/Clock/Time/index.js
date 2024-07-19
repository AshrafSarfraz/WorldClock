import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Time = (props) => {
  const { time } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{time}</Text>
      
    </View>
  );
};
 
//Ashraf Sarfraz

const styles = StyleSheet.create({
  container: {
  },
  timeText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 47,
  },
});

export default Time;
