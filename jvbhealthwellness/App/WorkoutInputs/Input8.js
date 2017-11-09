import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import TextInput from '../Components/TextInput';


export default class Input2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Select'}
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
        <Text>What % of Your Workout Did you breathe in and out through Your nose?</Text>
        </Text>
        <TextInput />
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