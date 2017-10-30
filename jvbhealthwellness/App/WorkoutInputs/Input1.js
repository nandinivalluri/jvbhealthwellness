import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

export default class Input1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
        <Text>Did you Workout Today?</Text>
        </Text>
        <View>
          <CheckBox
            center
            title='Yes'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            
         /> 
          <CheckBox
            center
            title='No'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'         
          /> 
          <CheckBox
            
            title='Not Yet'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
          /> 

        </View>
        <View style={styles.footer}>
          <Button
            title='SKIP'
          />  

        </View>

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
  footer: {
    marginLeft: 10,
    bottom: -10,

  }
  
  
});