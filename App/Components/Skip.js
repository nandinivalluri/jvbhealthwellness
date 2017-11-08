import React from 'react';
import { Text, View, Button } from 'react-native';
import Display from 'react-native-display'; 

export default class Skip extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {enable: true};
  }
	render() {
		return(
			<View>
			   <Button
                  onPress={this.Display.bind(this)}
                  title="Skip"
                  color="#34495e"
                  accessibilityLabel="Toggle display "
                />
		    </View>


		);
	}
}