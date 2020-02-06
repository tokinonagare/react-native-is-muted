/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import IsMuted from 'react-native-is-muted';

export default class App extends Component {
  state = {
    muted: undefined,
  };

  onPressListener = async () => {
    try {
      const muted = await IsMuted();
      this.setState({muted});
      Alert.alert(`Muted:  ${muted ? 'true' : false}`);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    let mutedText;

    if (typeof this.state.muted === 'undefined') {
      mutedText = 'undefined';
    } else if (this.state.muted === true) {
      mutedText = 'muted';
    } else {
      mutedText = 'not muted';
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>IsMuted example</Text>
        <Text style={styles.instructions}>Muted: {mutedText}</Text>
        <Button onPress={this.onPressListener} title="Check muted" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
