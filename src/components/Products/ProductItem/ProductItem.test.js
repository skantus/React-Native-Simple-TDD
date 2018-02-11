import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai'

import { ProductItem } from './ProductItem'

configure({ adapter: new Adapter() });

const wrapper = shallow(<ProductItem name="Name" brand="Brand"/>);

it('it should render 1 TouchableOpacity ProductItem', () => {
  expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  expect(wrapper.find(View)).to.have.length(1);
  expect(wrapper.find(Text)).to.have.length(1);
});

