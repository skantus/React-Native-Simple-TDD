import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    Input,
    TouchableHighlight
} from 'react-native'
import PropTypes from 'prop-types'
import { styles } from './styles'

export class Login extends Component {

    constructor(props) {
      super(props)

      this.state = { username: '', password: '' }
    }

    handlePasswordChange(text) {
      this.setState({password: text})
    }

    handleUsernameChange(text) {
      this.setState({username: text})
    }

    handleLoginPress() {
      // this.props.handleLogin(this.state.username, this.state.password)
      console.log('this.state', this.state);
    }

    render() {
      return (
        <View style={styles.container}>
          <TextInput
              style={styles.inputBox}
              placeholder='Enter Username'
              testID={'username'}
              value={this.state.username}
              onChangeText={this.handleUsernameChange.bind(this)}
          />
          <TextInput
              style={styles.inputBox}
              placeholder='Enter password'
              testID={'password'}
              secureTextEntry
              value={this.state.password}
              onChangeText={this.handlePasswordChange.bind(this)}
          />
          <TouchableHighlight
              testID={'loginButton'}
              onPress={this.handleLoginPress.bind(this)}>
              <Text>
                  Login
              </Text>
          </TouchableHighlight>
        </View>
      )
    }
}

Login.propTypes = Object.assign({}, Component.propTypes, {
    handleLogin: PropTypes.func
})
