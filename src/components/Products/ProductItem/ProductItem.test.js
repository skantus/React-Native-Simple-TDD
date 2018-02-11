import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai'

import { ProductItem } from './ProductItem'

configure({ adapter: new Adapter() });

it('it should render 1 TouchableOpacity component included name & brand', () => {
  const wrapper = shallow(<ProductItem name="Classic" brand="Reebook"/>);
  expect(wrapper.find(TouchableOpacity)).to.have.length(1);
});
