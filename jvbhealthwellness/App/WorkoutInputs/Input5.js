import React from 'react';
import { StyleSheet, Text, View} from 'react-native';



export default class Input5 extends React.Component { 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
        <Text>Did You Have Any Pain or Twinges During or After Your Workout?</Text>
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
    fontSize: 25,
    marginTop: 220,
    marginLeft:15
  }
  
  
  
});