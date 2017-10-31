import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class Input3 extends React.Component {
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
        <Text>Was Your Workout Today Enjoyable?</Text>
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
  }
  
  
  
});