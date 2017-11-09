import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Skip from '../Components/Skip';
import CheckBox from '../Components/CheckBox';

export default class Input1 extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      checked: false,
    };
  }
  render() {
    const { checked } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
        <Text>Did you Workout Today?</Text>
        </Text> 
        <CheckBox />
        <Skip />


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
  },
  
  
});