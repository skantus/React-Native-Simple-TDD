import React from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import sinon from 'sinon'

import { Login } from './Login'

configure({ adapter: new Adapter() });

const wrapper = shallow(<Login name="Name" brand="Brand"/>);

it('it should render 1 View component', () => {
  expect(wrapper.find(View)).to.have.length(1);
});

it('it should render 2 TextInput component', () => {
  expect(wrapper.find(TextInput)).to.have.length(2);
});

it('it should render 1 TouchableHighlight component', () => {
  expect(wrapper.find(TouchableHighlight)).to.have.length(1);
});

it('it should username testID should be username', () => {
  expect(wrapper.find(TextInput).first().props().testID).equal('username');
})

it('Login button testID should be called loginButton', () => {
  expect(wrapper.find(TouchableHighlight).props().testID).equal('loginButton');
})

it('it should display initial state', () => {
  expect(wrapper.state().username).to.equal('');
  expect(wrapper.state().password).to.equal('');

})

it('should update the login state on press button', function () {
  wrapper.setState({ username: 'a@a.com', password: '123456' });
  wrapper.find(TouchableHighlight).simulate('press');
  expect(wrapper.state().username).to.equal('a@a.com');
  expect(wrapper.state().password).to.equal('123456');
});
