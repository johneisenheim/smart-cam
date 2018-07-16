import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const Client = require('react-native-ssdp').Client;


export default class App extends React.Component {
  componentDidMount() {
    console.log('component did mount');
    this.client = new Client();
    this.client.on('response', (headers, statusCode, rinfo) => {
      console.log('Got a response to an m-search.', headers, rinfo);
    });

  }

  onButtonClick = () => {
    this.client.search('ssdp:all');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Button onPress={this.onButtonClick} title={'Press Me'}></Button>
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
