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
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  
  
});