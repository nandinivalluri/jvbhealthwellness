import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CheckBox from '../Components/CheckBox';
import Display from 'react-native-display'; 

export default class Input1 extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {enable: true};
  }
 
  Display() {
   
    this.setState({enable: false,disable:true});
  }
  
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Display enable={this.state.enable}>
            <Text style={styles.text}>
            <Text>Did you Workout Today?</Text>
            </Text> 
            <CheckBox />
          </Display>
        </View>  
        <View style={styles.container}>
          <Display enable={this.state.disbale}>
            <Text style={styles.text}>
            <Text>Was Your Workout Easy or Hard?</Text>
            </Text> 
            <CheckBox />
          </Display> 
        </View>
        <View>
         <Button
            onPress={this.Display.bind(this)}
            title="Skip"
            color="#34495e"
            accessibilityLabel="Toggle display "
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
  
  
});
