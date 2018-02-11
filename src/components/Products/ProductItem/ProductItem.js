import React, { Component } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { styles } from './styles'

export class ProductItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity>
        <View>
          <Text>{this.props.name} - {this.props.brand}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired
}
