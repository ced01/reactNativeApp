import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  ConnextionForm  from './private/common/auth/connexion/component/form';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ConnextionForm urlToFetch={'http://192.168.10.11:8080/reactBackend/connexion/login.php'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
