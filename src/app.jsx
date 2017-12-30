import React from 'react';
import { hydrate } from 'react-dom';
import HelloWorld from './components/HelloWorld/HelloWorld';
import './assets/css/main.scss';
// import './favicon.ico';

hydrate(<HelloWorld />, document.querySelector('#app'));
