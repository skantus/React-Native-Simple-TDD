import React from 'react'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai'

configure({ adapter: new Adapter() });

import { Counter } from './Counter'

it('should display the Counter', () => {
  const wrapper = shallow(<Counter/>);
  expect(wrapper.find('#text-counter')).to.exist;
});

it('should display the counter set to zero', () => {
  const wrapper = shallow(<Counter/>);
  expect(wrapper.find('#text-counter').props().children).to.equal(0);
});

it('should display the Increment button', () => {
  const wrapper = shallow(<Counter/>);
  expect(wrapper.find('#button-increment').props().title).to.equal('Increment');
});

it('should increment the counter when Increment button is pressed', () => {
  const wrapper = shallow(<Counter/>);
  wrapper.find('#button-increment').simulate('press');
  expect(wrapper.find('#text-counter').props().children).to.equal(1);
});

it('should display the Reset button', () => {
  const wrapper = shallow(<Counter/>);
  expect(wrapper.find('#button-reset').props().title).to.equal('Reset');
});

it('should reset the counter when Reset button is pressed', () => {
  const wrapper = shallow(<Counter/>);
  wrapper.find('#button-increment').simulate('press');
  wrapper.find('#button-reset').simulate('press');

  expect(wrapper.find('#text-counter').props().children).to.equal(0);
});

it('should display the Reset button', () => {
  const wrapper = shallow(<Counter/>);

  expect(wrapper.find('#button-increment').props().color).to.equal('green');
});


it('should display the Reset button', () => {
  const wrapper = shallow(<Counter/>);

  expect(wrapper.find('#button-reset').props().color).to.equal('red');
});
