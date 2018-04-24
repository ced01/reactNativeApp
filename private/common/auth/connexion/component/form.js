import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Button } from 'react-native';
/*import { Button } from 'react-native-material-design';*/

export default class ConnexionForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: 'Your email', password:'', buttonStyles:{ backgroundColor: '#841584', color:'white'}, json: null};
  }

  

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(localtext) => this.setState({localtext})}
          value={this.state.email}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(loctext) => this.setState({loctext})}
          value={this.state.password}
        />
        <Button
          onPress={() => {
             fetch('https://facebook.github.io/react-native/movies.json').then((response) => response.json()).then((responseJson) => {
              this.state.json = responseJson.movies;
              console.log("success"+ this.state.json);
              })
              .catch((error) => {
                console.error(error);
              })
            }}
          title="Log in"
          buttonStyles = {this.state.buttonStyles}
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}