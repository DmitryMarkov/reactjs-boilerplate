import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './components/Routes';
import './assets/css/main.scss';
import '../public/favicon.ico';

const HotMiddleware = () => (
  MIDDLEWARE
    ? <Routes />
    : <AppContainer warnings={false}><Routes /></AppContainer>);

render(HotMiddleware(), document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
