import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

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
        <View>
          <CheckBox
            center
            title='Yes'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => this.setState({checked: !checked})}
            
         /> 
          <CheckBox
            center
            title='No'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o' 
            checked={this.state.checked}
            onPress={() => this.setState({checked: !checked})}
                    
          /> 
          <CheckBox
            
            title='Not Yet'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => this.setState({checked: !checked})}
          
          /> 

        </View>
        <View style={styles.footer}>
          <Button
            center
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