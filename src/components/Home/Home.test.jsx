/* eslint-disable */
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Home from './Home';

describe('<Home />', () => {
  beforeEach(() => {
    global.APP_NAME = 'Application name';
    global.APP_VERSION = '1.0.0';
  }),
  it('renders <Home /> component', () => {
    const wrapper = shallow(<Home />);
  });
});
