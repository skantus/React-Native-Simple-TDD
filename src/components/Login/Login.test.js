import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai'

import { Login } from './Login'

configure({ adapter: new Adapter() });

const wrapper = shallow(<Login name="Name" brand="Brand"/>);

it('it should render 1 view component Login', () => {
  expect(wrapper.find(View)).to.have.length(1);
});

it('Login button testID should be loginButton', () => {
  expect(wrapper.find(TouchableHighlight).props().testID).equal('loginButton');
})

it('it should display username & password when is pressed', () => {
  wrapper.find(TouchableHighlight).simulate('press');
})
