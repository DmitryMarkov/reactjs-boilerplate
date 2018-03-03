import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './components/Routes';
import './assets/css/main.scss';
import '../public/favicon.ico';

const HotMiddleware = () => (
  NO_MIDDLEWARE
    ? <AppContainer warnings={false}><Routes /></AppContainer>
    : <Routes />);

render(HotMiddleware(), document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
