import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';


export default class Input2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Select'}
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
        <Text>Was Your Workout Easy or Hard?</Text>
        </Text>
        <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 320, marginTop: 20}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
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