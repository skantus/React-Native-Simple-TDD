import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { styles } from './styles'
import PropTypes from 'prop-types'

import { ProductItem } from '../ProductItem/ProductItem'

export class ProductList extends React.Component {

  constructor(props) {
    super(props)

    this.renderItem = ({item}, i) => (
      <ProductItem name={item.name}
                   brand={item.brand}/>
    )

    this.emptyList = () => (
      <Text>No items</Text>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.props.products}
                  extraData={this.state}
                  keyExtractor={(item, index) => index}
                  renderItem={this.renderItem}
                  ListEmptyComponent={this.emptyList}
                  inverted/>
      </View>
    )
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};
