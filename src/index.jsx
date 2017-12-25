import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './components/Routes';
import './assets/css/main.scss';
// import './favicon.ico';

const HotMiddleware = () => (
  HOT_MIDDLEWARE
    ? <Routes />
    : <AppContainer><Routes /></AppContainer>);

render(HotMiddleware(), document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
