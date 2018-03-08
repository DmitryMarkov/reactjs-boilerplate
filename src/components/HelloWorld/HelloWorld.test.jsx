/* eslint-disable */
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import HelloWorld from './HelloWorld';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<HelloWorld />', () => {
  it('renders <HelloWorld /> component', () => {
    const wrapper = shallow(<HelloWorld />);
  });
});
