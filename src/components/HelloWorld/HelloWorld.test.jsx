import React from 'react';
import chai from 'chai';
import { mount, shallow } from 'enzyme';
import HelloWorld from './HelloWorld';

let expect = chai.expect;

describe('<HelloWorld /> Component', () => {
  it('renders one <h1> tag', () => {
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
