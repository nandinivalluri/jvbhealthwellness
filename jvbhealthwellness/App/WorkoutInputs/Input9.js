import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import CheckBox from '../Components/CheckBox';


export default class Input2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Select'}
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
        <Text>Were You Fasted During Your Workout?</Text>
        </Text>
        <CheckBox />
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