import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const ZERO_COUNT = 0;

export class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = { counter: ZERO_COUNT };
  }

  onPressButtonIncrement() {
    this.setState({ counter: ++this.state.counter });
  }

  onPressButtonReset() {
    this.setState({ counter: ZERO_COUNT });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text id='text-counter' style={styles.counter}>{this.state.counter}</Text>

        <Button id='button-increment'
                title='Increment'
                color='green'
                onPress={this.onPressButtonIncrement.bind(this)}/>

        <Button id='button-reset'
                title='Reset'
                color='red'
                onPress={this.onPressButtonReset.bind(this)}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  counter: {
    fontSize: 92,
    textAlign: 'center',
  },
});
