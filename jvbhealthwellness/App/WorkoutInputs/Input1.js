import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Input1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
        <Text>Did you Workout Today?</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    marginTop: 250,
    marginLeft:15
  }
  
});