/* eslint-disable */
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import HelloWorld from './HelloWorld';

describe('<HelloWorld />', () => {
  it('renders <HelloWorld /> component', () => {
    const wrapper = shallow(<HelloWorld />);
  });
});
