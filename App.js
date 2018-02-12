import React from 'react'
import { Counter } from './src/components/Counter/Counter'
import { ProductList } from './src/components/Products/ProductList/ProductList'
import { Login } from './src/components/Login/Login'

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [
        {id: 1, name: 'AirMax 90', brand: 'Nike'},
        {id: 2, name: 'Yeezy', brand: 'Adidas'},
        {id: 3, name: 'Classic', brand: 'Reebok'},
      ]
    }
  }

  render() {
    return (
      <ProductList products={this.state.products}/>
    );
  }
}
