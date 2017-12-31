import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './icon.svg';
import './HelloWorld.scss';

const HelloWorld = () => (
  <div className="hello-world">
    <h1>
      <img src={Icon} alt="world" />
      Hello World!!!
    </h1>
    <Link to="/">Go home</Link>
  </div>
);

export default HelloWorld;
