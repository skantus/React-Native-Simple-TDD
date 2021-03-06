import React from 'react'
import { View, FlatList } from 'react-native';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai'

import { ProductList } from './ProductList'
import { ProductItem } from '../ProductItem/ProductItem'

configure({ adapter: new Adapter() });

let mockProducts, wrapper;
beforeEach(() => {
  mockProducts = [
    {id: 1, name: 'Mock Product 1', brand: 'MockBrandA'},
    {id: 2, name: 'Mock Product 2', brand: 'MockBrandB'},
    {id: 3, name: 'Mock Product 3', brand: 'MockBrandC'},
  ];
  wrapper = shallow(<ProductList products={mockProducts}/>);
});

it('it should render 1 view ProductList', () => {
  expect(wrapper.find(View)).to.have.length(1);
});

it('it should render ProductItem component', () => {
  expect(wrapper.find(ProductItem)).to.have.length(0);
});
